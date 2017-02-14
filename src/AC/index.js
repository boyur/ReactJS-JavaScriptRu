import {INCREMENT, DELETE_ARTICLE, DATA_FILTER_ARTICLE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function dataFilterArticle(filter) {
  console.log(Date.parse(filter.from));
  return {
    type: DATA_FILTER_ARTICLE,
    payload: {
        from: filter.from,
        to: filter.to
    }
  }
}