import React from 'react';

function LazyEvaluation() {
  return (
    <section>
      <section>
        <p className="font-extrabold text-6xl">
          Lazy Evaluation
        </p>
      </section>

      <section>
        <p className="font-extrabold text-3xl">
          Lazy Evaluation
        </p>

        <p className="text-3xl text-left">
          Lazy evaluation or call-by-need, is an evaluation strategy which delays
          the evaluation of an expression until its value is needed
          and which also avoids repeated evaluations
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              (1..).select(&:odd?) # This will take forever

              (1..).lazy.select(&:odd?)
            `}
          </code>
        </pre>
      </section>

      <section>
        <p className="font-extrabold text-6xl">
          Examples:
        </p>

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