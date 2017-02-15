import {SELECTED_ARTICLE} from '../constants'

export default (selectedArticle, action) => {
  const {type, payload} = action
  switch (type) {
    case SELECTED_ARTICLE:
      return payload
  }

  console.log("reduser null")
  return {from: null, to: null}
}