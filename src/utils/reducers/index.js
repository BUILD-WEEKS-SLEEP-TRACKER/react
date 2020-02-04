import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,

} from '../actions/index';


export const initialState = {
    entries:[
        {
            date: 0,
            wakeUpRating: '',
            dayRating: '',
            nightRating: '',
            hours_slept: 0
        }
    ],
    fetchingData: false,
    error: '',
    id: '',
    data: [],
    payload: {}
   
}

export const reducer = (state = initialState, { action, payload }) => {
    console.log('Initial state: ', state)
    switch(action) {
        case SIGNUP_START:
            return {
                ...state,
                isPosting: false
            };

        case SIGNUP_SUCCESS:
            return {
                ...state,
                isPosting: true
            };

        case SIGNUP_FAIL:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            };
        
        default: 
            return state;
    }
}