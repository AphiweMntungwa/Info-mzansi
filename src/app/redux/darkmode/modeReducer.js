import { FETCH_MODE_REQ, FETCH_MODE_SUCCESS, FETCH_MODE_FAILURE } from "../actionConstants"

const initialState = {
    loading: false,
    darkMode: false,
    error: ''
}

const modeReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case FETCH_MODE_REQ:
            return {
                ...state,
                loading: true,
            }
        case FETCH_MODE_SUCCESS:
            return {
                ...state,
                loading: false,
                darkMode: payload,
                error: ''
            }
        case FETCH_MODE_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export default modeReducer;