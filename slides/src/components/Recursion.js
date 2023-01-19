import React from 'react';
import RunButton from './ruby/RunButton';

function Recursion() {
  return (
    <section>
      <section>
        <h3>Recursion</h3>
      </section>

      <section>
        <h4>Recursion</h4>

        <p className="text-3xl text-left">
          The act of a function calling itself.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="factorial">
            {`
              def factorial(n)
                return 1 if n <= 1

                n * factorial(n-1)
              end

              puts factorial(5)
              puts factorial(10000)
            `}
          </code>
        </pre>

        <RunButton domSelector="#factorial" />
      </section>

      <section>
        <h4>Recursion - Tail call recursive</h4>

        <p className="text-3xl text-left">
          In a tail call recursive function, the last line of the function
          is the one that calls to the function itself.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="factorial2">
            {`
              def factorial(n, acc=1)
                return acc if n <= 1

                factorial(n - 1, acc * n)
              end

              puts factorial(5)
              puts factorial(10000)
            `}
          </code>
        </pre>

        <RunButton domSelector="#factorial2" />
      </section>

      <section>
        <h4>Recursion - Tail call recursive</h4>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="tail-call-optimization">
            {`
              RubyVM::InstructionSequence.compile_option = {
                tailcall_optimization: true,
                trace_instruction: false
              }
            `}
          </code>
        </pre>

        <RunButton domSelector="#tail-call-optimization" />
      </section>

      <section>
        <h4>Examples:</h4>

        <ul className="text-3xl space-y-3 text-left">
          <li>
            <b>05_recursion</b>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Recursion;
