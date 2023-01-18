import React from 'react';
import RunButton from './ruby/RunButton';

function HOAndFirstClass() {
  return (
    <section>
      <section>
        <h4>High-order and First class functions</h4>
      </section>

      <section>
        <h4>High-order functions</h4>

        <p className="text-3xl text-left">
          High-order functions are functions that can either take other functions as arguments
          or return them as results.
        </p>
      </section>

      <section>
        <h4>First class functions</h4>

        <p className="text-3xl text-left">
          A programming language is said to have first-class functions if
          it treats functions as first-class citizens.
        </p>

        <p className="text-3xl text-left">
          It means that it should support passing functions as arguments to other functions,
          returning them as the values from other functions,
          and assigning them to variables or storing them in data structures.
        </p>
      </section>

      <section>
        <h4>Blocks</h4>

        <p className="text-3xl text-left">
          Ruby blocks are little anonymous functions that can be passed into methods.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="greetings">
            {`
              def greetings
                puts "hello"
                yield
                puts "Nice to meet you!"
              end

              def greetings2(&block)
                puts "hello"
                yield block
                puts "Nice to meet you!"
              end

              greetings { puts "Julian" }
              greetings2 { puts "Julian" }
            `}
          </code>
        </pre>

        <RunButton domSelector="#greetings" />
      </section>

      <section>
        <h4>Procs</h4>

        <p className="text-3xl text-left">
          A Proc object is an encapsulation of a block of code,
          which can be stored in a local variable, passed to a method or another Proc,
          and can be called.
        </p>

        <p className="text-3xl text-left">
          Proc is an essential concept in Ruby and a core of its functional programming features.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="procs">
            {`
              square = Proc.new { |x| x ** 2 }

              square.call(3) #=> 9
            `}
          </code>
        </pre>

        <RunButton domSelector="#procs" />
      </section>

      <section>
        <h4>Lambdas</h4>

        <p className="text-3xl text-left">
          Lambdas are useful as self-sufficient functions, in particular useful
          as arguments to higher-order functions, behaving exactly like Ruby methods.
        </p>

        <aside className="notes">
          Differences are:

          <ul>
            <li>
              In lambdas, return means exit from this lambda
              <ul>
                <li>
                  In regular procs, return means exit from embracing method
                  (and will throw LocalJumpError if invoked outside the method)
                </li>
              </ul>
            </li>

            <li>
              In lambdas, arguments are treated in the same way as in methods: strict,
              with ArgumentError for mismatching argument number,
              and no additional argument processing
              <ul>
                <li>
                  Regular procs accept arguments more generously: missing arguments are
                  filled with nil, single Array arguments are deconstructed if the proc
                  has multiple arguments, and there is no error raised on extra arguments.
                </li>
              </ul>
            </li>
          </ul>
        </aside>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              square = lambda { |x| x ** 2 }
              square2 = ->(x) { x ** 2 }

              square.call(3)  #=> 9
              square2.call(3)  #=> 9
            `}
          </code>
        </pre>
      </section>

      <section>
        <h4>Examples</h4>

        <ul className="text-3xl space-y-3 text-left">
          <li>
            <b>01_high_order_functions</b>
          </li>
          <li>
            <b>02_function_composition</b>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default HOAndFirstClass;
