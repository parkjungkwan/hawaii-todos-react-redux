import {userConstants} from '../constants'

let user = JSON.parse(<string>sessionStorage.getItem('user'))
const initialState = user ? {user}:{}
export function userReducers(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                user: action.user
            }
        case userConstants.LOGIN_SUCCESS:
            return {
                user: action.user
            }
        case userConstants.LOGIN_FAIL:
            return {}
        default:
            return state
    }

}