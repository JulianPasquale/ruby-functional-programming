import React from 'react';
import RunButton from './ruby/RunButton';

function Closures() {
  return (
    <section>
      <section>
        <h3>Closures</h3>
      </section>

      <section>
        <h4>Closures</h4>

        <p className="text-3xl text-left">
          A closure is the combination of a function bundled together (enclosed)
          with references to its surrounding state (the lexical environment).
        </p>

        <p className="text-3xl text-left">
          A closure gives you access to an
          outer function&apos;s scope from an inner function.
        </p>

        <p className="text-3xl text-left">
          Blocks are Ruby&apos;s version of closures
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby" id="closures">
            {`
              def multiple(m)
                -> n { n * m }
              end
              
              double = multiple(2)
              triple = multiple(3)

              puts double.call(2)
              puts triple.call(2)
            `}
          </code>
        </pre>

        <RunButton domSelector="#closures" />
      </section>

      <section>
        <h4>Closures</h4>

        <p className="text-3xl text-left">
          In Rails, we usually do
        </p>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              def index
                @posts = Post.all
        
                respond_to do |format|
                  format.html  # index.html.erb
                  format.json  { render :json => @posts }
                end
              end
            `}
          </code>
        </pre>
      </section>

      <section>
        <h4>Examples</h4>

        <ul className="text-3xl space-y-3 text-left">
          <li>
            <b>03_closures</b>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Closures;
