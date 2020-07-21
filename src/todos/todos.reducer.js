import { createAction, handleActions } from "redux-actions";
import produce from 'immer'

const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'
let id = 3
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: `리액트 학습`,
            done: true
        },
        {
            id: 2,
            text: `리덕스 학습`,
            done: false
        }
    ]
}
export const changeInput = createAction(CHANGE_INPUT, input => input)
export const insert = createAction(INSERT, text => ({
    id: id++, text, done: false
}))
export const toggle = createAction(TOGGLE, id => id)
export const remove = createAction(REMOVE, id => id)

const todos = handleActions({
    [CHANGE_INPUT]: (state, { payload: input }) => produce(state, e => { e.input = input}),
    [INSERT]: (state, { payload: todo }) => produce(state, e =>{e.todos.push(todo)}),
    [TOGGLE]: (state, { payload: id }) => produce(state, e=>{
        const todo = e.todos.find(todo => todo.id === id)
        todo.done = !todo.done
    }),
    [REMOVE]: (state, { payload: id }) => produce(state, e => {
        const i = e.todos.findIndex(todo => todo.id === id)
        e.todos.splice(i, 1)
    })
}, initialState)

export default todos





