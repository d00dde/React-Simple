import React from 'react';
import Article from './Article';
import fixtures from '../fixtures';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App name</h1>
        <Article article={fixtures[0]}/>
      </header>
    </div>
  );
}

export default App;
