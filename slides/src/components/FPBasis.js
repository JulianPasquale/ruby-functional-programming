import React from 'react';

function FPBasis() {
  return (
    <section>
      <section>
        <p className="font-extrabold text-green-800 text-6xl">
          Functional Programming Basis
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-800 text-5xl">
          Functional Programming Basis
        </p>

        <p className="text-gray-600 text-3xl">
          <a href="htt<ps://en.wikipedia.org/wiki/Functional_programming">
            Wikipedia:
          </a>

          <p className="text-left">
            Functional programming is a programming paradigm where programs are
            constructed by applying and composing functions.
          </p>

          <p className="text-left">
            It is a declarative programming paradigm in which function definitions
            are trees of expressions that map values to other values,
            rather than a sequence of imperative statements which update
            the running state of the program
          </p>
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-800 text-5xl">
          Functional Programming Basis
        </p>

        <ul className="text-gray-600 text-3xl space-y-3 text-left">
          <li>Higher-order and first-class functions</li>
          <li>Referential transparency</li>
          <li>Immutability</li>
          <li>Pure functions (no side-effects)</li>
          <li>Idempotence</li>
          <li>No state (no implicit, hidden data)</li>
          <li>Currying and function partial application</li>
          <li>Recursion</li>
          <li>Lazy evaluation (non-strict evaluation)</li>
        </ul>
      </section>

      <section>
        <p className="font-extrabold text-green-800 text-4xl">
          Functional Programming Basis
        </p>

        <p className="font-extrabold text-green-600 text-3xl">
          Higher-order functions
        </p>

        <p className="text-gray-600 text-3xl text-left">
          Higher-order functions are functions that can either take other functions as arguments
          or return them as results.
        </p>

        <p className="text-gray-600 text-3xl text-left">
          Higher-order functions enable partial application or currying.
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-800 text-4xl">
          Functional Programming Basis
        </p>

        <p className="font-extrabold text-green-600 text-3xl">
          First class functions
        </p>

        <p className="text-gray-600 text-3xl text-left">
          A programming language is said to have first-class functions if
          it treats functions as first-class citizens.
        </p>

        <p className="text-gray-600 text-3xl text-left">
          It means that it should support passing functions as arguments to other functions,
          returning them as the values from other functions,
          and assigning them to variables or storing them in data structures.
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-800 text-4xl">
          Functional Programming Basis
        </p>

        <p className="font-extrabold text-green-600 text-3xl">
          First class functions
        </p>

        <pre>
          <code data-trim data-noescape>
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
      </section>
    </section>
  );
}

export default FPBasis;
