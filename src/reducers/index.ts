import { combineReducers } from 'redux'
import {userReducers} from './user.reducer'
import counterReducer from "../counter/counter.reducer";
const rootReducer = combineReducers({
    userReducers,
    counterReducer
})

export default rootReducer