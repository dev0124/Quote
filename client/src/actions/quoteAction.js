import { GET_QUOTES, ADD_QUOTE,DELETE_QUOTE } from '../constants/ActionTypes';
import axios from "axios";
import history from '../history'
const API_URL = 'http://localhost:4000/';

export const getQuotes = () => dispatch => {
    return fetch(API_URL)
        .then((response) => {
            return response.json();
        })
        .then(result => {
            dispatch({
                type: GET_QUOTES,
                payload: result.quotes
            });
        });
}


export const addQuote = (quote) => {
        return (dispatch) => {
            return axios.post(API_URL, quote)
                .then((res) => {
                    dispatch({ type: ADD_QUOTE, payload : res.data.quote })
                    history.push(`/`)
                });
        }
}
    
export const updateQuote = (quote) => {
    return (dispatch) => {
        return axios.put(API_URL, quote)
            .then((res) => {
                
                history.push(`/`)
            });
    }
}

export const deleteQuote = (quote) => {
    var id = quote._id;
    return (dispatch) => {
        return axios.delete(`${API_URL}${id}`)
            .then((res) => {
                dispatch({ type: DELETE_QUOTE, payload : quote })
            });
    }
}
