import { configureStore } from '@reduxjs/toolkit'
import gridReducer from './GridSlice';

export default configureStore({
  reducer: {
    gridPageState: gridReducer,
  },
})