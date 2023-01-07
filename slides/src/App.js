import React, { useEffect } from 'react';

// Reveal
import Reveal from 'reveal.js';

// Styles
import 'reveal.js/dist/reveal.css';

// Custom Rootstrap theme
// https://revealjs.com/themes
import './themes/rs.scss';

// Reveal plugins
// https://revealjs.com/plugins/#built-in-plugins
import 'reveal.js/plugin/highlight/monokai.css';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';

// Components
import * as slides from './components';

function App() {
  useEffect(() => {
    Reveal.initialize({
      hash: false,
      controls: true,
      progress: true,
      center: true,
      plugins: [RevealHighlight, RevealNotes],
    });
  }, [Reveal]);

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <nav
        className="sticky w-full flex flex-wrap items-center justify-between py-4 hover:text-gray-900 focus:text-gray-900 shadow-lg"
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="container-fluid">
            <a className="flex items-center mt-2 lg:mt-0 mr-1" href="https://www.rootstrap.com">
              <img src="https://www.rootstrap.com/wp-content/uploads/2022/02/RS-logo-white.svg" alt="Rootstrap Home page" style={{ height: '1.2rem' }} loading="lazy" />
            </a>
          </div>
        </div>
      </nav>

      <div className="slides">
        <slides.CoverPage />

        <slides.Agenda />

        <slides.Introduction />

        <slides.RealLifeScenario />

        <slides.HOAndFirstClass />

        <slides.Closures />

        <slides.Currying />

        <slides.ReferencialTransparency />

        <slides.Recursion />

        <slides.LazyEvaluation />

        <slides.ProsAndCons />

        <slides.WrappingUp />

        <slides.Final />
      </div>
    </main>
  );
}

export default App;
