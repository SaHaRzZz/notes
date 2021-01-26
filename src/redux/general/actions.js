import {SET_CONNECTED, SET_LOADING, SET_NOTES} from './types';

export const setIsConnected = bool => {
    return {
        type: SET_CONNECTED,
        payload: bool
    }
}

export const setIsLoading = bool => {
    return {
        type: SET_LOADING,
        payload: bool
    }
}

export const setNotes = notes => {
    return {
        type: SET_NOTES,
        payload: notes
    }
}