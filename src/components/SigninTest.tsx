import React, {useState, useEffect} from "react";

const SignTest:React.FC = () =>{
    const [userid, setUserid] = useState('')
    const [password, setPassword] = useState('')

    // useEffect 컴포넌트가 랜더링 될 때마다 특정 작업을 수행하도록 설정
    useEffect(()=>{
        alert(`ID변화만 체크합니다 -->  ${userid}`)
    }, [])
    const onChangeUserid = e => {
        setUserid(e.target.value)
    }
    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    return (
        <>
            <div>
                <input type="text" value={userid} onChange={onChangeUserid}/>
    <input type="text" value={password} onChange={onChangePassword}/>
    </div>
    <div>
    <b>아이디: </b> {userid} <br/>
    <b>비밀번호: </b> {password} <br/>

    </div>
    </>
)
}
export default SignTest