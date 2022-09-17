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
          with references to its surrounding state (the lexical environment)
        </p>

        <p className="text-gray-600 text-3xl text-left">
          Closure is a technique for creating a function based on another function
          with an environment which have impact on this function during the declaration
          process.
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Closures
        </p>

        <p className="text-gray-600 text-3xl text-left">
          Proc objects are closures, meaning they remember and
          can use the entire context in which they were created
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              def multiple(m)
                lambda { |n| n * m }
              end
              
              double = multiple(2)
              triple = multiple(3)
            `}
          </code>
        </pre>
      </section>
    </section>
  );
}

export default Closures;
