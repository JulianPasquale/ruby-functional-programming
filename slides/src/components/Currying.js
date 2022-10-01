import React from 'react';

function Currying() {
  return (
    <section>
      <section>
        <p className="font-extrabold text-green-800 text-6xl">
          Currying and function partial application
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Currying
        </p>

        <p className="text-gray-600 text-3xl text-left">
          Currying is the technique of converting a function that takes multiple
          arguments into a sequence of functions that each takes a single argument.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              multiply = -> (n, m) { n * m }

              multiply.call(2, 2)
              
              curried_multiply = -> (n) { -> (m) { n * m } }

              curried_multiply.call(2).call(2)
            `}
          </code>
        </pre>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Partial application
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              multiply = -> (n, m) { n * m }

              curried_multiply = multiply.curry

              curried_multiply.call(2, 2)

              double = curried_multiply.curry[2]
              
              double.call(2)
            `}
          </code>
        </pre>
      </section>

      <section>
        <p className="font-extrabold text-green-800 text-6xl">
          Examples:
        </p>

        <ul className="text-gray-600 text-3xl space-y-3 text-left">
          <li>
            <b>04_curry</b>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Currying;
