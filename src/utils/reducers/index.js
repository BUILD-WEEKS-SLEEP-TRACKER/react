import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    }
    from "../actions/index";

const initialState = {
        entries : [
        {
            date: 0,
            wakeUpRating: '',
            dayRating: '',
            nightRating: '',
            hours_slept: 0,
           
        }
    ],
    isLoading: false,
    isLoggedIn: false,
    chartData: [{}]

}



export const reducer = (state = initialState, action) => {
    console.log('Initial state: ', state)
    switch(action.type) {
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
                error: '',       
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                error: ''
            };
        case LOGIN_FAILED:
            return {
                state,
                isLoading: false,
                isLoggedIn: false,
                error: ''
            }

        default: 
            return state;
    }
}