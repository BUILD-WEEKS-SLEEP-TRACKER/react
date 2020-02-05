import axios from 'axios'

import { axiosWithAuth } from '../axiosWithAuth';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const SUBMITTING_ENTRY = 'SUBMITTING_ENTRY';
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const SUBMIT_FAILED = 'SUBMIT_FAILED';


export const ADD_ENTRY_START = 'ADD_ENTRY_START';
export const ADD_ENTRY_SUCCESS = 'ADD_ENTRY_SUCCESS';
export const ADD_ENTRY_FAIL = 'ADD_ENTRY_FAIL';





// export const fetchChartData = () => {
//     return dispatch => {
//         dispatch({ type: FETCHING_DATA })
//         axios
//             .get({'https://bw-sleeptracker.herokuapp.com/api/users/:id/logs'})
//             .then(res => {
//                 console.log('First axios call (GET)', res)
//                 dispatch({
//                     type: FETCH_SUCCESS,

//                 })
//             })
//             .catch(err => {
//                 console.log(err.response)
//                 dispatch({
//                     type: FETCH_FAILED,
//                     payload: `${err}`
//                 })
//             })
//     }
// }

export const register = payload => dispatch => {
    console.log(payload, "this is the payload in register");
    dispatch({ type: SIGNUP_START });
    axiosWithAuth()
      .post("api/auth/register", payload)
      .then(res => {
        console.log(res.data);
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        localStorage.setItem("token", res.data.token);
        // history.push("/");
      })
      .catch(err => {
        console.log(err, "Wouldn't it be nice if I worked?");
        dispatch({ type: SIGNUP_FAIL, payload: err.response });
      });
  };

  export const login = (credentials) => dispatch => {
    // console.log(credentials);
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
    .post('api/auth/login', credentials)
    .then(res => {
        // console.log(res);
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.id });
        // history.push('/journal');
    })
    .catch(err => {
        // console.log(err);
        dispatch({ type: LOGIN_FAILED, payload: err })
    })
}

//   export const addEntry = (data) => dispatch => {
//     dispatch ({ type: ADD_ENTRY_START });
//     return axiosWithAuth()
//     .post('/users/1/create ', data)
//     .then(res => {
//         console.log("this is add entry", res);
//         dispatch({ type: ADD_ENTRY_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//         console.log(err);
//         dispatch({ type: ADD_ENTRY_FAIL, payload: err });
//     })
// }