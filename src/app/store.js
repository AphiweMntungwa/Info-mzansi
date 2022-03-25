import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import topbarReducer from './redux/topbar/topbarReducer';

export const store = configureStore({
    reducer: {
        topbar: topbarReducer,
    },
});