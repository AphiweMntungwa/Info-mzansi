import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import topbarReducer from './redux/topbar/topbarReducer';
import modeReducer from './redux/darkmode/modeReducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk';


export const store = configureStore({
    reducer: {
        topbar: topbarReducer,
        mode: modeReducer
    },
    devTools: { logger, thunk }
});