import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, DATA_FILTER_ARTICLE} from '../constants'

export default (articles = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
        case DATA_FILTER_ARTICLE:
            if(payload.to && payload.from) {

              return articles.filter(article => {
                console.log(payload.from, payload.to)

                return Date.parse(payload.from) < Date.parse(article.date)
                  && Date.parse(article.date) < Date.parse(payload.to)
              })
            } else {
              return defaultArticles.filter(article => true)
            }

    }
//fix
    return articles
}

// Date.parse(article.date) < Date.parse(payload.from)