import React from 'react';
import './Article.css';

function Article(props) {
  const {article} = props;
  const body = <section>{article.text}</section>
  return (
    <div className="Article">
      <h2>
      	{article.title}
      	<button onClick={handleClick} className="btn">close</button>
      </h2>
      
      {body}
      <h3>creation date: {(new Date(article.date)).toString()}</h3>
    </div>
  );
}

function handleClick () {
	console.log ("click");
}

export default Article;
