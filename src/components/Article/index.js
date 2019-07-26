import React, {Component} from 'react';
import './Article.css';

class Article extends Component {
  
  //Закомментированный код относится к контролю
  //состояния внутри компонента

  /*constructor (props) {
    super(props);
    
    this.state = {
      isOpen: props.defaultOpen
    }
  }*/

 /* componentWillReceiveProps (nextProps) {
    if(nextProps.defaultOpen !== this.props.defaultOpen)
      this.setState ({
        isOpen: nextProps.defaultOpen
      });
  }*/

  render() {
    const {article, isOpen, onBtnClick} = this.props;
    const body = isOpen ? <section className="card-text">{article.text}</section> : '';
    const createDate = isOpen ? <h6 className="card-subtitle text-muted">creation date: {(new Date(article.date)).toString()}</h6> : '';

    return (
      <div className="Article card mx-auto" style={{width: '50%'}}>
        <h2>
          <div className="card-header">
            {article.title}
            <button onClick={onBtnClick} className="btn btn-primary float-right">
              {isOpen ? 'close':'open'}
            </button>
          </div>
        </h2>
        {createDate}
        {body}
      </div>
    );
  }
/*  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }*/
}

export default Article;
