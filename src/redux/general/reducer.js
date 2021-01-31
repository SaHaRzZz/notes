import {SET_CONNECTED, SET_LOADING, SET_NOTES} from './types';

const initialState = {
    isConnected: false,
    isLoading: true,
    notes: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CONNECTED: return {
            ...state,
            isConnected: action.payload
        }
        case SET_LOADING: return {
            ...state,
            isLoading: action.payload
        }
        case SET_NOTES: return {
            ...state,
            notes: action.payload
        }
        default: return state;
    }
}

export default reducer;