import { createAction, handleActions } from "redux-actions";

const INCRESE = 'counter/INCREASE'
const DECRESE = 'counter/DECREASE'

export const increase = () => ( {type:INCRESE})
export const decrease = () => ( {type:DECRESE})

const initialState = {
    number: 0
}
const counterReducer = handleActions(
    {
        [INCRESE]: (state, action) => ({number: state.number + 1}),
        [DECRESE]: (state, action) => ({number: state.number - 1})
    },
    initialState
)
export default counterReducer

