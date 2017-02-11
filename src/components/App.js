import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'

class App extends Component {

    render() {
        const {articles} = this.props;
        return (
            <div>
                <ArticleList articles={articles} isOpenItem='' toggleOpenItem=''/>
            </div>
        )
    }
}

App.propTypes = {
    articles: PropTypes.array.isRequired
};

export default App