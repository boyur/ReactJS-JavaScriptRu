import {INCREMENT, DELETE_ARTICLE, SELECTED_ARTICLE} from '../constants'

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

export function dateRange(selectedArticle) {
  return {
    type: SELECTED_ARTICLE,
    payload: selectedArticle
  }
}