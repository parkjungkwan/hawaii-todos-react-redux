import React from "react";

const CounterComponent = ({number, onIncrease, onDecrease}) => {

    return (<>
        <h1>숫자: {number}</h1>
        <br/>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </>)
}
export default CounterComponent