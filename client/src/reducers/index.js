import { combineReducers } from 'redux'
import quotes from "./quoteReducer";
const rootReducer = combineReducers({
  quotes
})

export default rootReducer
