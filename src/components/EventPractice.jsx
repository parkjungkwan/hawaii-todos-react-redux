import React, {useState} from "react";

const EventPractice = () => {
    const [form, setForm] = useState({
        userid: '', password: ''
    })

    const {userid, password} = form
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm)
    }
    const onClick = e => {
        alert("userid : "+userid)
        setForm({
            userid: '', password: ''
        })
    }
    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick()
        }
    }
    return (
        <>
            <input type="text" name={"userid"} value={userid}
            onChange = {onChange()}/>
            <input type="text" name={"password"} value={password}
            onChange = {onChange} onKeyPress = {onKeyPress}/>
            <button onClick={onClick}>확인</button>
        </>
    )
}
export default EventPractice