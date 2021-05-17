import {GET_QUOTES, VIEW_QUOTE, ADD_QUOTE, DELETE_QUOTE, UPDATE_QUOTE} from '../constants/ActionTypes'
const initialState = {
    quotes : [],
    quote : {}
}
const quoteReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_QUOTE:
            return {
                ...state,
                quotes : [...state.quotes,...action.payload]
            }

        case GET_QUOTES:
            return {
                ...state,
                quotes : action.payload,
                quote : {
                    isSingleQuoteView : false
                }
            }

        case DELETE_QUOTE:
            let quotes = state.quotes.filter(quote =>
                quote._id !== action.payload._id
            )

            return {
                ...state,
                quotes : quotes
            }

        case UPDATE_QUOTE:
            return {
                ...state,
                quote : {isSingleQuoteView : false},
                refreshList : false
            };

      case VIEW_QUOTE:
            return {
                ...state,
                quotes : action.payload,
                quote : {
                    isSingleQuoteView : false
                }
            };
      default:
        return state
    }
}

export default quoteReducer;