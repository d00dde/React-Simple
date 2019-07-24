import React from 'react';
import ArticleList from './ArticleList';
import fixtures from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css' 
//import './App.css';


function App() {
  return (
    <div className="App container">
    
      <header className="App-header">
      	<div className="jumbotron">
        	<h1 className="display-3">App name</h1>
      	</div>
        <ArticleList articles={fixtures}/>
      </header>
    </div>
  );
}

export default App;
