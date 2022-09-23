import React, { useEffect } from 'react';

// Reveal Styles
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/solarized.css';
import 'reveal.js/plugin/highlight/monokai.css';

import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import Reveal from 'reveal.js';

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
    <div className="slides">
      <slides.CoverPage />

      <slides.Agenda />

      <slides.Introduction />

      <slides.HOAndFirstClass />

      <slides.Closures />

      <slides.ReferencialTransparency />

      <slides.Currying />

      <slides.Recursion />
    </div>
  );
}

export default App;
