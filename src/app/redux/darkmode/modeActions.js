import axios from "axios";
import { FETCH_MODE_REQ, FETCH_MODE_SUCCESS, FETCH_MODE_FAILURE } from "../actionConstants";


export const fetchModeReq = () => {
    return {
        type: FETCH_MODE_REQ
    }
}
export const fetchModeSuccess = darkMode => {
    return {
        type: FETCH_MODE_SUCCESS,
        payload: darkMode
    }
}
export const fetchModeFailure = error => {
    return {
        type: FETCH_MODE_FAILURE,
        error: error
    }
}

const changeMode = () => {
    return (dispatch) => {
        dispatch(fetchModeReq);
        axios.post('localhost:3001/darkMode', {
                darkMode: true
            }).then(res => {
                dispatch(fetchModeSuccess(res.data));
            })
            .catch(e => dispatch(fetchModeFailure(e)))
    }
}