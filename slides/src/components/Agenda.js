import React from 'react';

function Agenda() {
  return (
    <section>
      <p className="font-extrabold text-green-800 text-6xl">
        Agenda
      </p>

      <ol className="text-gray-600 text-3xl space-y-6">
        <li>Functional programming basis</li>
        <li>&quot;Real-life&quot; examples</li>
        <li>Pros and cons</li>
        <li>Q&A</li>
      </ol>
    </section>
  );
}

export default Agenda;
