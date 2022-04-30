import { createStore, combineReducers } from 'redux'
import UserReducer from './sliceReducers/userSlice'

export default createStore(combineReducers({UserReducer}))