import React from 'react';

function Introduction() {
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

          <li>Closures</li>

          <li>
            Referential transparency
            <ul className="text-xl">
              <li>Immutability</li>
              <li>Pure functions</li>
              <li>Idempotency</li>
            </ul>
          </li>

          <li>Currying and function partial application</li>

          <li>
            Recursion
            <ul className="text-xl">
              <li>Tail call optimization</li>
            </ul>
          </li>

          <li>Lazy evaluation</li>
        </ul>
      </section>
    </section>
  );
}

export default Introduction;
