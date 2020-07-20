import React, {useState} from "react";
import {MDBBtn} from 'mdbreact'

const Greeting = () =>{
    const [message, setMessage] = useState("")
    const [color, setColor] = useState("")
    const onClickWelcome = () => setMessage("어서 오세요")
    const onClickBye = () => setMessage("안녕히 가세요")
    const onClickRed = () => setColor("red")
    const onClickBlue = () => setColor("blue")
    const onClickGreen = () => setColor("green")


    return (
        <>
            <MDBBtn color="default" onClick={onClickWelcome}>입장</MDBBtn>
            <MDBBtn color="default" onClick={onClickBye}>퇴장</MDBBtn>
            <h1 style={{color}}>{message}</h1>
            <MDBBtn color={"danger"} onClick={onClickRed} >적색 변환</MDBBtn>
            <MDBBtn color={"success"} onClick={onClickGreen} >녹색 변환</MDBBtn>
            <MDBBtn color={"primary"} onClick={onClickBlue}>청색 변환</MDBBtn>
        </>
    )
}
export default Greeting