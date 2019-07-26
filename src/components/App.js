import React, {Component} from 'react';
import ArticleList from './ArticleList';
import fixtures from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css' 
//import './App.css';


class App extends Component {
  
  constructor (props) {
    super(props);

    this.state = {
      reverted: false
    }
  }

  render () {
    return (
      <div className="App container">
      
        <header className="App-header">
        	<div className="jumbotron">
          	<h1 className="display-3">App name</h1>
            <button onClick={this.revert} className="btn btn-primary float-right">
              Revert
            </button>
        	</div>
          <ArticleList articles={this.state.reverted ? fixtures.slice().reverse() : fixtures}/>
        </header>
      </div>
    );
  }

  revert = () => {
    this.setState ({
      reverted: !this.state.reverted
    });
    
  }
}

export default App;
