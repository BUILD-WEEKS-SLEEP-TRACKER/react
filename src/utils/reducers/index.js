export const initialState = {
    date: 0,
    wakeUpRating: '',
    dayRating: '',
    nightRating: '',
    hours_slept: 0
}

export const reducer = (state = initialState, { action, payload }) => {
    console.log('Initial state: ', state)
    switch(action) {
        default: 
            return state;
    }
}