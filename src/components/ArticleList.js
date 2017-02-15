import React, {Component, PropTypes} from 'react'
import Article from './Article/index'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    render() {
        const {articles, dateRange, toggleOpenItem, isOpenItem} = this.props
        console.log(dateRange);
        let articleFiltred = articles;
        if(dateRange.to && dateRange.from) {
          articleFiltred = articles.filter(article => {
            console.log(Date.parse(dateRange.from), Date.parse(article.date), Date.parse(dateRange.to))
            console.log(Date.parse(dateRange.from) < Date.parse(article.date)
              && Date.parse(article.date) < Date.parse(dateRange.to))

            return Date.parse(dateRange.from) < Date.parse(article.date)
              && Date.parse(article.date) < Date.parse(dateRange.to)
          });
        }
        console.log(articleFiltred);

        const articleElements = articleFiltred.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={isOpenItem(article.id)}
                toggleOpen={toggleOpenItem(article.id)}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}
//export default accordion(ArticleList)

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion decorator
    isOpenItem: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}

ArticleList.defaultProps = {
    articles: []
}

export default connect(state => ({
  dateRange: state.dateRange
}))(accordion(ArticleList))