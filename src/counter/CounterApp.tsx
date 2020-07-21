import React, {useCallback} from "react";
import { useSelector , useDispatch } from 'react-redux'
import Counter from './Counter'
import {increase, decrease} from "./counter.reducer";

export default function CounterApp (){

    const number = useSelector(state => state.counterReducer.number)
    const dispatch = useDispatch()
    const onIncrease = useCallback(()=> dispatch(increase()), [dispatch])
    const onDecrease = useCallback(()=> dispatch(decrease()), [dispatch])
    return (
        <Counter number={number}
                      onIncrease={onIncrease}
                      onDecrease={onDecrease}
        />
    )
}
