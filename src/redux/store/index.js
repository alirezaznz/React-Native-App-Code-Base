import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "./../reducers/user"

export default configureStore({
  reducer: {
    user: UserReducer
  },
})
