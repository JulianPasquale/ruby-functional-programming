import React from 'react';

function Closures() {
  return (
    <section>
      <section>
        <p className="font-extrabold text-green-800 text-6xl">
          Closures
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Closures
        </p>

        <p className="text-gray-600 text-3xl text-left">
          A closure is the combination of a function bundled together (enclosed)
          with references to its surrounding state (the lexical environment).
        </p>

        <p className="text-gray-600 text-3xl text-left">
          A closure gives you access to an
          outer function&apos;s scope from an inner function.
        </p>

        <p className="text-gray-600 text-3xl text-left">
          Blocks are Ruby&apos;s version of closures
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              def multiple(m)
                -> n { n * m }
              end
              
              double = multiple(2)
              triple = multiple(3)
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
            <b>03_closures</b>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Closures;
