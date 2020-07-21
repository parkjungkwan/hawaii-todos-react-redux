import React from "react";
import { useSelector } from 'react-redux'
import {changeInput, insert, toggle, remove} from "./todos.reducer";
import useActions from "./todos.service.js";
import Todos from './Todos'


function TodosApp(){
    const {input, todos } = useSelector(
        ({todos}) =>(
                    {input: todos.input,todos: todos.todos}),[])
    /*TypeError: Cannot read property 'input' of undefined*/
    const [onCangeInput, onInsert, onToggle, onRemove ] = useActions(
        [changeInput, insert, toggle, remove],[]
    )
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onCangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    )
}
export default React.memo(TodosApp)