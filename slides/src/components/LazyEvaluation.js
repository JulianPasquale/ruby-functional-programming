import React from 'react';
import RunButton from './ruby/RunButton';

function LazyEvaluation() {
  return (
    <section>
      <section>
        <h3>Lazy Evaluation</h3>
      </section>

      <section>
        <h4>Ruby Enumerator</h4>

        <p className="text-3xl text-left">
          A class which allows both internal and external iteration.
        </p>

        <p className="text-3xl text-left">
          Enumerators allow to chain multiple methods.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="enumerator">
            {`
              fib = Enumerator.new do |yielder|
                a = b = 1
                loop do
                  yielder << a
                  a, b = b, a + b
                end
              end
              
              puts fib.take(10) # => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
            `}
          </code>
        </pre>

        <RunButton domSelector="#enumerator" />
      </section>

      <section>
        <h4>Lazy Evaluation</h4>

        <p className="text-3xl text-left">
          Lazy evaluation or call-by-need, is an evaluation strategy which delays
          the evaluation of an expression until its value is needed
          and which also avoids repeated evaluations
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="lazy">
            {`
              # (1..).select(&:odd?) # This will take forever

              lazy_enum = (1..).lazy.select(&:odd?)

              another_lazy_enum = (1..).lazy.select(&:odd?).take_while { |num| num < 20 }

              puts lazy_enum.take(10)

              puts another_lazy_enum.force
            `}
          </code>
        </pre>

        <RunButton domSelector="#lazy" />
      </section>

      <section>
        <h4>Examples:</h4>

        <ul className="text-3xl space-y-3 text-left">
          <li>
            <b>06_lazy_evaluation</b>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default LazyEvaluation;
