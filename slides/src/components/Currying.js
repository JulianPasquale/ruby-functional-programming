import React from 'react';
import RunButton from './ruby/RunButton';

function Currying() {
  return (
    <section>
      <section>
        <h4>Currying and function partial application</h4>
      </section>

      <section>
        <h4>Currying and function partial application</h4>

        <p className="text-3xl text-left">
          Currying is the technique of converting a function that takes multiple
          arguments into a sequence of functions that each takes a single argument.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="currying">
            {`
              multiply = -> (n, m) { n * m }

              puts multiply.call(2, 2)
              
              curried_multiply = -> (n) { -> (m) { n * m } }

              puts curried_multiply.call(2).call(2)
            `}
          </code>
        </pre>

        <RunButton domSelector="#currying" />
      </section>

      <section>
        <h4>Partial application</h4>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="partial-application">
            {`
              multiply = -> (n, m) { n * m }

              curried_multiply = multiply.curry

              puts curried_multiply.call(2, 2)

              double = curried_multiply[2]
              puts double.call(2)

              triple = curried_multiply.call(3)
              puts triple.call(3)
            `}
          </code>
        </pre>

        <RunButton domSelector="#partial-application" />
      </section>

      <section>
        <h4>Examples:</h4>

        <ul className="text-3xl space-y-3 text-left">
          <li>
            <b>04_curry</b>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Currying;
