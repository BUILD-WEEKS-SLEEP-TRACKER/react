import axios from 'axios'
import { initialState } from '../reducers'

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';


export const fetchChartData = () => {
    return dispatch => {
        dispatch({ type: FETCHING_DATA })
        axios
            .get({initialState})
            .then(res => {
                console.log('First axios call (GET)', res)
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: initialState
                })
            })
            .catch(err => {
                console.log(err.response)
                dispatch({
                    type: FETCH_FAILED,
                    payload: `${err}`
                })
            })
    }
}