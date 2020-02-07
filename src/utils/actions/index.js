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

export const EDIT_ENTRY_START = 'EDIT_ENTRY_START';
export const EDIT_ENTRY_SUCCESS = 'EDIT_ENTRY_SUCCESS';
export const EDIT_ENTRY_FAILED = 'EDIT_ENTRY_FAILED';

export const DELETE_ENTRY = 'DELETE_ENTRY';
export const DELETE_ENTRY_SUCCESS = 'DELETE_ENTRY_SUCCESS';
export const DELETE_ENTRY_FAILED = 'DELETE_ENTRY_FAILED';

export const register = payload => dispatch => {
    console.log(payload, "this is the payload in register");
    dispatch({ type: SIGNUP_START });
    axiosWithAuth()
      .post("api/auth/register", payload)
      .then(res => {
        console.log(res);
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        localStorage.setItem("token", res.data.token);
        console.log('token ', res.data.token)
        // res.history.push("/");
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
        console.log('This is response in login: ', res);
        localStorage.setItem('token', res.data.token);
        console.log("this is the token", res.data.token)
        
        localStorage.setItem('id', res.data.userId);
        console.log('this is the response of id', res.data.userId)
        
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.id });
        
        // history.push('/main-page');
    })
    .catch(err => {
        // console.log(err);
        dispatch({ type: LOGIN_FAILED, payload: err })
    })
};


export const getSleepEntries = () => dispatch => {
    dispatch({ type: FETCHING_DATA });
    
    const loggedInUser = localStorage.getItem("id")
    return axiosWithAuth()
      .get(`/api/users/${loggedInUser}/logs`)
      .then(res => {
        console.log('This is getSleepEntries action: ', res)
        dispatch({
          type: FETCH_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => 
        dispatch({
          type: FETCH_FAILED,
          payload: err
        })
        )

}


  export const addEntry = (payload) => dispatch => {
    dispatch ({ type: ADD_ENTRY_START });
    return axiosWithAuth()
    .post(`api/users/${localStorage.getItem("id")}/create`, payload)
    .then(res => {
        console.log("this is add entry", res);
        dispatch({ type: ADD_ENTRY_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log("this is error", err.response);
        dispatch({ type: ADD_ENTRY_FAIL, payload: err });
    })
};

  export const editEntry = (payload) => dispatch => {
    dispatch({ type: EDIT_ENTRY_START });
    return axiosWithAuth()
    .put (`api/users/logs/${localStorage.getItem("id")}`, payload)
    .then(res => {
      console.log('This is edit entry in actions: ', res);
      dispatch({ type: EDIT_ENTRY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('This is error of edit entry: ', err);
      dispatch({ type: EDIT_ENTRY_FAILED, payload: err });
    })
  };

  export const deleteEntry = (payload) => dispatch => {
    dispatch({ type: DELETE_ENTRY });
    return axiosWithAuth()
    .delete(`/api/users/logs/${payload}`)
    .then(res => {
      console.log('This is delete entry in actions: ', res);
      dispatch({ type: DELETE_ENTRY_SUCCESS, payload: res.data });
    })
    .catch(err =>{ 
      console.log(err)
      dispatch({ type: DELETE_ENTRY_FAILED })
    })
  }