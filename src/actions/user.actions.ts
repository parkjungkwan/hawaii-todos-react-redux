import {userConstants} from '../constants'
import {userService} from "../apis";
import {alertActions} from "./alert.actions";

const userActions = {
    login, join
}
function join(userid, password, name) {
    alert(`ID: ${userid}, PW: ${password}, Name: ${name}`)
}

function login(userid, password) {
    alert(`ID: ${userid}, PW: ${password}`)

    return dispatch =>{
        dispatch(request(userid))
    }

    const request = user => { return { type: userConstants.LOGIN_REQUEST, user}}
    const success = user => { return { type: userConstants.LOGIN_SUCCESS, user}}
    const failure = user => { return { type: userConstants.LOGIN_FAILURE, user}}
}
export default userActions