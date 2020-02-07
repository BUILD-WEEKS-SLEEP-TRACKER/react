import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  ADD_ENTRY_START,
  ADD_ENTRY_SUCCESS,
  ADD_ENTRY_FAIL,
  FETCHING_DATA,
  FETCH_SUCCESS,
  FETCH_FAILED,
  EDIT_ENTRY_START,
  EDIT_ENTRY_SUCCESS,
  EDIT_ENTRY_FAILED,
  DELETE_ENTRY,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_FAILED
} from "../actions/index";

import moment from "moment";

const initialState = {
  data: [
    {
      date: `${moment().format("MMM Do YY")}`,
      wakeUpRating: "",
      wokeUp:"",
      nightRating: "",
      fellAsleep:"",
      dayRating: "",
      timeCreated: "",
      totalTimeSlept: 0,  
      
    }
  ],
  chartData: [],
    
  isLoading: false,
  isLoggedIn: false,
  isEditing: false

};

export const reducer = (state = initialState, action) => {
  console.log("Initial state: ", state);
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        isPosting: false,
        isLoading: true
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isPosting: true,
        isLoading: true,
        entries: action.payload
      };

    case SIGNUP_FAIL:
      return {
        ...state,
        isPosting: false,
        isLoading: false,
        error: action.payload
      };
    case LOGIN_START:
      return {
        ...state,
        entries: action.payload,
        isLoading: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: ""
      };
    case LOGIN_FAILED:
      return {
        state,
        isLoading: false,
        isLoggedIn: false,
        error: ""
      };
    case FETCHING_DATA:
      return {
        ...state,
        fetchingData: true
      };
    case FETCH_SUCCESS:
    console.log("this is the action/payload", action.payload) 
    return {
        ...state,
        fetchingData: false,
        data: action.payload
      };
    case FETCH_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case ADD_ENTRY_START:
      return {
        ...state,
        fetchingData: true
      };
    
    case ADD_ENTRY_SUCCESS:
      // console.log("this is action /payload", action.payload)
        return {
        ...state,
        fetchingData: false,
        data: action.payload
      };
    case ADD_ENTRY_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case EDIT_ENTRY_START:
      return {
        ...state,
        fetchingData: true,
        isEditing: true
      }
    case EDIT_ENTRY_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        data: action.payload,
        isEditing: false
      };
    case EDIT_ENTRY_FAILED: 
    return {
      ...state,
      fetchingData: false,
      error: action.payload,
    }
    case DELETE_ENTRY:
      return{
        ...state,
        isEditing: false
      }
    case DELETE_ENTRY_SUCCESS:
      return {
        ...state,
        payload: action.payload
      }
    case DELETE_ENTRY_FAILED:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
};
