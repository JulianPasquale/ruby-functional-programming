import React from 'react';

function Introduction() {
  return (
    <section>
      <section>
        <p className="font-extrabold text-green-800 text-6xl">
          Functional Programming
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-800 text-5xl">
          Functional Programming
        </p>

        <p className="text-gray-600 text-3xl">
          <a href="htt<ps://en.wikipedia.org/wiki/Functional_programming">
            Wikipedia:
          </a>
        </p>

        <p className="text-gray-600 text-3xl text-left">
          Functional programming is a programming paradigm where programs are
          constructed by applying and composing functions.
        </p>

        <p className="text-gray-600 text-3xl text-left">
          It is a declarative type of programming style. Its main focus is on
          “what to solve” in contrast to an imperative style where
          the main focus is “how to solve”.
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-800 text-5xl">
          Functional Programming
        </p>

        <ul className="text-gray-600 text-3xl space-y-3 text-left">
          <li>Higher-order and first-class functions</li>

          <li>Closures</li>

          <li>Currying and function partial application</li>

          <li>
            Referential transparency
            <ul className="text-xl">
              <li>Idempotency</li>
              <li>Immutability</li>
              <li>Pure functions</li>
            </ul>
          </li>

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
