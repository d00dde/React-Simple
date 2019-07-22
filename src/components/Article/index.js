import React, {Component} from 'react';
import './Article.css';

class Article extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: true
    }
  }

  render() {
    const {article} = this.props;
    const body = this.state.isOpen ? <section>{article.text}</section> : '';
    const createDate = this.state.isOpen ? <h3>creation date: {(new Date(article.date)).toString()}</h3> : '';

    return (
      <div className="Article">
        <h2>
          {article.title}
          <button onClick={this.handleClick} className="btn">
            {this.state.isOpen ? 'close':'open'}
          </button>
        </h2>
        
        {body}
        {createDate}

      </div>
    );
  }

  handleClick = () => {
  this.setState({
    isOpen: !this.state.isOpen
  });
}


}




export default Article;
