import axios from 'axios'
import { initialState } from '../reducers'
import { axiosWithAuth } from "../axiosWithAuth";

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';


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

//Register 


export const register = payload => dispatch => {
    console.log(payload, "register");
    dispatch({ type: SIGNUP_START });
    axiosWithAuth()
      .post("/auth/register", payload)
      .then(res => {
        console.log(res.data);
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        window.localStorage.setItem("token", res.data.token);
        // history.push("/");
      })
      .catch(err => {
        console.log(err, "Wouldn't it be nice if I worked?");
        dispatch({ type: SIGNUP_FAIL, payload: err });
      });
  };