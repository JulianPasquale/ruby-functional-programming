import React from 'react';

function RealLifeScenario() {
  return (
    <section>
      <h3>Real-life scenario</h3>

      <p className="text-3xl text-left">
        Our app needs to get information from an external service.
      </p>

      <p className="text-3xl text-left">
        The service we need to consume provides a list of paginated elements.
      </p>

      <p className="text-3xl">
        <a href="https://swapi.dev/">Star Wars API</a>
      </p>
    </section>
  );
}

export default RealLifeScenario;
