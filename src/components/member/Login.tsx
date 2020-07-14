import React, {Component} from "react";
import '../../assets/login.css'
import userActions from "../../actions/user.actions";
import {connect} from "react-redux";
class Login extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
           userid: '',
           password: '',
           name: '',
           submitted: false
        }
    }
    handleChange(e){
        const {name, value} = e.target
        this.setState({name: value})
    }
    handleSubmit(e){
        e.preventDefault()
        alert(` 폼 태그 알러트 `)
        this.setState({ submitted: true})
        const {userid, password} = this.state
        if(userid && password){
            this.props.login(userid, password)
        }
    }

    render() {
        const { logginIn } = this.props
        const { userid, password, submitted } = this.state
        return <div>
            <h2>Login Form</h2>
            <form name="form" onSubmit={ this.handleSubmit }>
                <div className="imgcontainer">
                    <img id={"avatar"} src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar"/>
                </div>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username"
                           name="userid" value={userid}
                           onChange={this.handleChange}
                           />
                    { submitted && !userid &&
                        <div className={"help-block"}>아이디는 필수 입력값입니다.</div>
                    }
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password"
                           name="password" value={password}
                           onChange={this.handleChange}
                           />
                    {
                        submitted && !password &&
                            <div className={"help-block"}> 비밀번호는 필수 입력값입니다.</div>
                    }
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked={true} name="remember"/> Remember me
                    </label>
                </div>
                <div className="container">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    }
}
function mapState(state) {
    const { logginIn } = state.auth
    return { logginIn}
}
const actionCreators = {
    login: userActions.login
}
const connectedLoginPage = connect(mapState, actionCreators)(Login)
export { connectedLoginPage as Login }