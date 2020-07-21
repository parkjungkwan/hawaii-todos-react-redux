import { createAction, handleActions } from "redux-actions";

const INCRESE = 'counter/INCREASE'
const DECRESE = 'counter/DECREASE'

export const increase = createAction(INCRESE)
export const decrease = createAction(DECRESE)

const initialState = {
    number: 0
}
const counterReducer = handleActions(
    {
        [INCRESE]: (state) => ({number: state.number + 1}),
        [DECRESE]: (state) => ({number: state.number - 1})
    },
    initialState
)
export default counterReducer