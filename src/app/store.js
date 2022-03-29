import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import topbarReducer from './redux/topbar/topbarReducer';
import logger from 'redux-logger'
// import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly';


export const store = configureStore({
    reducer: {
        topbar: topbarReducer,
    },
    devTools: { logger }
});