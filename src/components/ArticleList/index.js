import React, {Component} from 'react';
import Article from '../Article';
import './ArticleList.css';

export default class ArticleList extends Component {
	constructor (props) {
		super(props);

		this.state = {
			openArticleId: null
		}
	}

	render () {
	const articleElements = this.props.articles.map((article, index) => 
		<li key={article.id} className="article-list_li">
			<Article article={article} 
					 isOpen={this.state.openArticleId === article.id}
					 onBtnClick={this.handlerClick.bind(this, article.id)}/>
		</li>
	);
	return (
		<ul>
			{articleElements}
		</ul>
		);
	}

	handlerClick (openArticleId) {
		this.setState({
			openArticleId: this.state.openArticleId === openArticleId ? null: openArticleId,
		});
	}
}