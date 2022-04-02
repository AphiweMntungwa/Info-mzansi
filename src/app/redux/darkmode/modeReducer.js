import { FETCH_MODE_REQ, FETCH_MODE_SUCCESS, FETCH_MODE_FAILURE } from "../actionConstants"

const initialState = {
    loading: false,
    dark_mode: false,
    error: ''
}

const modeReducer = (state = initialState, action) => {
    switch (action) {
        case FETCH_MODE_REQ:
            return {...state,
                loading: true,
                dark_mode: !state.dark_mode
            }
        case FETCH_MODE_SUCCESS:
            return {...state,
                loading: false,
                dark_mode: !state.dark_mode,
                error: ''
            }
        case FETCH_MODE_FAILURE:
            return {...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default modeReducer;