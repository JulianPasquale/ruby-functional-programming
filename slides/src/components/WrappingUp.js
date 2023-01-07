import React from 'react';

function WrappingUp() {
  return (
    <section>
      <section>
        <h3>Wrapping Up</h3>
      </section>

      <section>
        <h4>Reviewed concepts</h4>

        <ul className="text-3xl space-y-3 text-left">
          <li>Higher-order and first-class functions</li>

          <li>Closures</li>

          <li>Referential transparency</li>

          <li>Currying and function partial application</li>

          <li>Recursion</li>

          <li>Lazy evaluation</li>

          <li className="text-gray-500">Pattern matching</li>

          <li className="text-gray-500">Memoization</li>
        </ul>
      </section>

      <section>
        <h4>Links</h4>

        <ul className="text-3xl space-y-3 text-left">
          <li>
            <a href="https://www.youtube.com/watch?v=BV1-Z38ZWQU">
              RubyConf 2019 - The Functional Rubyist by Joe Leo
            </a>
          </li>

          <li>
            <a href="https://github.com/JulianPasquale/ruby-functional-programming">
              Slides + code examples
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default WrappingUp;
