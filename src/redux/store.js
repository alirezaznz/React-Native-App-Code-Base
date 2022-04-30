import { createStore, combineReducers, applyMiddleware } from 'redux'
import UserReducer from './sliceReducers/userSlice'

const createDebugger = require('redux-flipper').default;

const middlewareEnhancer = applyMiddleware(createDebugger)
const rootReducers = combineReducers({UserReducer})
export default createStore(rootReducers, undefined, middlewareEnhancer)