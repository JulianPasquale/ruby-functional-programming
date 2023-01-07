import React from 'react';

function RealLifeScenario() {
  return (
    <section>
      <section>
        <p className="font-extrabold text-6xl">
          Real-life scenario
        </p>
      </section>

      <section>
        <p className="font-extrabold text-6xl">
          Real-life scenario
        </p>

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
    </section>
  );
}

export default RealLifeScenario;
