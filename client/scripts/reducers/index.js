import { combineReducers } from 'redux'
import code from './code'
import review from './review'
const codeReviewApp = combineReducers({
  code,
  review
})

export default codeReviewApp;
