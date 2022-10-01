import React from 'react';

function ReferencialTransparency() {
  return (
    <section>
      <section>
        <p className="font-extrabold text-green-800 text-6xl">
          Referencial Transparency
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Referencial Transparency
        </p>

        <p className="text-gray-600 text-3xl text-left">
          An expression is called referentially transparent if it can be replaced
          with its corresponding value (and vice-versa) without changing
          the program&apos;s behavior.
        </p>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Idempotency
        </p>

        <p className="text-gray-600 text-3xl text-left">
          It is the property of certain operations in mathematics and computer science
          whereby they can be applied multiple times without changing the result
          beyond the initial application.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              def two_times(num)
                num * 2
              end

              two_times(2) # => 4
              two_times(2) # => 4
            `}
          </code>
        </pre>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Pure functions
        </p>

        <p className="text-gray-600 text-3xl text-left">
          Functions are pure functions in the mathematical sense:
          the output depends only on the received inputs, not the environment.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              def add(a, b)
                a + b
              end
            `}
          </code>
        </pre>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Immutability and Side effects
        </p>

        <p className="text-gray-600 text-3xl text-left">
          Immutability means unable to change.
        </p>

        <p className="text-gray-600 text-3xl text-left">
          An expression is said to have a side effect if it modifies
          some state variable value(s) outside its local environment.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              arr = [1, 2, 3]
              arr # => [1, 2, 3]

              arr.map { |num| num + 1 } # => [2, 3, 4]
              arr # => [1, 2, 3]

              arr.map! { |num| num + 1 } # => [2, 3, 4]
              arr # => [2, 3, 4]
            `}
          </code>
        </pre>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Example
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              class Account
                def initialize
                  @balance = 100
                end

                def deposit(amount)
                  @balance += amount
                end
              end

              my_account = Account.new
              my_account.deposit(100) # => 200
              my_account.deposit(100) # => 300
            `}
          </code>
        </pre>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Example
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              def deposit(balance, amount)
                balance + amount
              end

              my_balance = 100
              my_new_balance = deposit(my_balance, 100)
            `}
          </code>
        </pre>
      </section>

      <section>
        <p className="font-extrabold text-green-600 text-3xl">
          Example
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              class Account
                def initialize(balance = 100)
                  @balance = balance
                end

                def deposit(amount)
                  new(@balance + amount)
                end
              end

              my_account = Account.new
              my_new_account = my_account.deposit(100)
            `}
          </code>
        </pre>
      </section>

      <section>
        <p className="font-extrabold text-green-800 text-6xl">
          Review previous examples:
        </p>

        <ul className="text-gray-600 text-3xl space-y-3 text-left">
          <li>
            <b>01_high_order_functions</b>
          </li>
          <li>
            <b>02_function_composition</b>
          </li>
          <li>
            <b>03_closures</b>
          </li>
          <li>
            <b>04_curry</b>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default ReferencialTransparency;
