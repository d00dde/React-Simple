import React from 'react';
import ArticleList from './ArticleList';
import fixtures from '../fixtures';
//import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App name</h1>
        <ArticleList articles={fixtures}/>
      </header>
    </div>
  );
}

export default App;
