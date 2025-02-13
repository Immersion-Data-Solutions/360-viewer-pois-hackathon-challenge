import React, { useEffect } from 'react';
import loadKrpano from './loadKrpano';

import './App.css';

function App() {
  useEffect(() => {
    loadKrpano();
  }, []);

  return (
    <div id="app">
      <div id="krpano-target"></div>
    </div>
  );
}

export default App;
