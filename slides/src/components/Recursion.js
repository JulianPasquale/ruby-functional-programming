import React from 'react';

function Recursion() {
  return (
    <section>
      <section>
        <p className="font-extrabold text-green-800 text-6xl">
          Recursion
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Recursion
        </p>

        <p className="text-gray-600 text-3xl text-left">
          The act of a function calling itself.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              def factorial(n)
                return 1 if n <= 1

                n * factorial(n-1)
              end
            `}
          </code>
        </pre>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Recursion - Tail call recursive
        </p>

        <p className="text-gray-600 text-3xl text-left">
          In a tail call recursive function, the last line of the function
          is the one that calls to the function itself.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              def factorial(n, acc=1)
                return acc if n <= 1

                factorial(n - 1, acc * n)
              end
            `}
          </code>
        </pre>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Recursion - Tail call optimization
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              RubyVM::InstructionSequence.compile_option = {
                tailcall_optimization: true,
                trace_instruction: false
              }
            `}
          </code>
        </pre>
      </section>
    </section>
  );
}

export default Recursion;