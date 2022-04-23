import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import UserReducer from "./../reducers/user"

const createDebugger = require('redux-flipper').default;
export default configureStore({
  reducer: combineReducers({
    UserReducer
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(createDebugger()),
});
