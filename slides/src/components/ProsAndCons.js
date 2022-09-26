import React from 'react';

function ProsAndCons() {
  return (
    <section>
      <section>
        <p className="font-extrabold text-green-800 text-6xl">
          Pros and Cons
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-800 text-5xl">
          Pros
        </p>

        <ul className="text-gray-600 text-3xl space-y-3 text-left">
          <li>Pure functions are easy to test</li>

          <li>
            Functional code tends to have its state isolated
          </li>

          <li>Concurrency is more easily kept safe</li>

          <li>It&apos;s a diferent paradigm, but the goal is still the same</li>
        </ul>
      </section>

      <section>
        <p className="font-extrabold text-green-800 text-5xl">
          Cons
        </p>

        <ul className="text-gray-600 text-3xl space-y-3 text-left">
          <li>For many people, recursion doesn&apos;t feel natural</li>

          <li>Dev responsibility</li>

          <li>Performance and space</li>

          <li>What about Rails?</li>
        </ul>
      </section>
    </section>
  );
}

export default ProsAndCons;
