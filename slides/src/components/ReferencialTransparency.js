import React from 'react';
import RunButton from './ruby/RunButton';

function ReferencialTransparency() {
  return (
    <section>
      <section>
        <h3>Referencial Transparency</h3>
      </section>

      <section>
        <h4>Referencial Transparency</h4>

        <p className="text-3xl text-left">
          An expression is called referentially transparent if it can be replaced
          with its corresponding value (and vice-versa) without changing
          the program&apos;s behavior.
        </p>
      </section>

      <section>
        <h4>Idempotency</h4>

        <p className="text-3xl text-left">
          It is the property of certain operations in mathematics and computer science
          whereby they can be applied multiple times without changing the result
          beyond the initial application.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="idempotency">
            {`
              def two_times(num)
                num * 2
              end

              puts two_times(2)
              puts two_times(2)
            `}
          </code>
        </pre>

        <RunButton domSelector="#idempotency" />
      </section>

      <section>
        <h4>Pure functions</h4>

        <p className="text-3xl text-left">
          Functions are pure functions in the mathematical sense:
          the output depends only on the received inputs, not the environment.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="pure-functions">
            {`
              def add(a, b)
                a + b
              end

              puts add(1, 2)
            `}
          </code>
        </pre>

        <RunButton domSelector="#pure-functions" />
      </section>

      <section>
        <h4>Immutability and Side effects</h4>

        <p className="text-3xl text-left">
          Immutability means unable to change.
        </p>

        <p className="text-3xl text-left">
          An expression is said to have a side effect if it modifies
          some state variable value(s) outside its local environment.
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="inmutability">
            {`
              arr = [1, 2, 3]

              puts arr.join(', ')

              puts arr.map { |num| num + 1 }.join(', ')

              puts arr.join(', ')

              puts arr.map! { |num| num + 1 }.join(', ')

              puts arr.join(', ')
            `}
          </code>
        </pre>

        <RunButton domSelector="#inmutability" />
      </section>

      <section>
        <h4>Example</h4>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="class-example">
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

              puts my_account.deposit(100)
              puts my_account.deposit(100)
            `}
          </code>
        </pre>

        <RunButton domSelector="#class-example" />
      </section>

      <section>
        <h4>Example</h4>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="func-example">
            {`
              def deposit(balance, amount)
                balance + amount
              end

              my_balance = 100
              my_new_balance = deposit(my_balance, 100)

              puts my_new_balance
            `}
          </code>
        </pre>

        <RunButton domSelector="#func-example" />
      </section>

      <section>
        <h4>Example</h4>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="class-example-2">
            {`
              class Account
                attr_reader :balance

                def initialize(balance = 100)
                  @balance = balance
                end

                def deposit(amount)
                  Account.new(@balance + amount)
                end
              end

              my_account = Account.new
              puts my_new_account = my_account.deposit(100)
              puts my_new_account.balance
            `}
          </code>
        </pre>

        <RunButton domSelector="#class-example-2" />
      </section>
    </section>
  );
}

export default ReferencialTransparency;
