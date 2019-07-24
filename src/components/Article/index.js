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
    const body = this.state.isOpen ? <section className="card-text">{article.text}</section> : '';
    const createDate = this.state.isOpen ? <h6 className="card-subtitle text-muted">creation date: {(new Date(article.date)).toString()}</h6> : '';

    return (
      <div className="Article card mx-auto" style={{width: '50%'}}>
        <h2>
          <div className="card-header">
            {article.title}
            <button onClick={this.handleClick} className="btn btn-primary float-right">
              {this.state.isOpen ? 'close':'open'}
            </button>
          </div>
        </h2>
        {createDate}
        {body}
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
