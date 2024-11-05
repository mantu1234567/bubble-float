import React from 'react';
import Bubble from './Bubble';

function App() {
  return (
    <div className="App">
      <Bubble /> {/* Floating bubble that stays across all sections */}

      {/* Section 1 */}
      <div style={{ backgroundColor: '#000', color: '#b3ff00', minHeight: '100vh', padding: '2rem' }}>
        <h1>Not sorry to burst your bubble</h1>
        {/* Add other content for Section 1 as needed */}
      </div>

      {/* Section 2 */}
      <div style={{ backgroundColor: '#f3c6d3', color: '#b3ff00', minHeight: '100vh', padding: '2rem' }}>
        <h1>Rouser's activism makes people think.</h1>
        <p>Our interventions can be funny, scary, strange...</p>
        {/* Add other content for Section 2 as needed */}
      </div>

      {/* Section 3 */}
      <div style={{ backgroundColor: '#7fcde6', color: '#b3ff00', minHeight: '100vh', padding: '2rem' }}>
        <h1>Change only happens when everyone is paying attention.</h1>
        <p>Rouser’s climate interventions fuse activism...</p>
        {/* Add other content for Section 3 as needed */}
      </div>

      {/* Section 4 */}
      <div style={{ backgroundColor: '#000', color: '#b3ff00', minHeight: '100vh', padding: '2rem' }}>
        <h1>Get noisy as hell, our lives depend on it.</h1>
        <p>Rouser does what we do because political...</p>
        {/* Add other content for Section 4 as needed */}
      </div>

      {/* Section 5 */}
      <div style={{ backgroundColor: '#b3ff00', color: '#000', minHeight: '100vh', padding: '2rem' }}>
        <h1>Let's burst some damn bubbles.</h1>
        <p>We’re growing a gang of people who care...</p>
        {/* Add other content for Section 5 as needed */}
      </div>
    </div>
  );
}

export default App;
