import React from "react";

const TodosItem = ({ todo, onToggle, onRemove}) => {
    return (
        <>
            <input type="checkbox"
            onClick={()=>onToggle(todo.id)}
            checked={todo.done}
            readOnly={true}/>
            <span style={{ textDecoration: todo.done ? 'line-through': 'none'}}>
                {todo.text}
            </span>
            <button onClick={()=> onRemove(todo.id)}>삭제</button>
        </>
    )
}
const Todos = ({
    input, // 인풋에 입력되는 텍스트
    todos, // 할일 목록이 들어 있는객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefault()
        onInsert(input)
        onChangeInput('') // 등록 후 인풋 초기화
    }
    const onChage = e => {
        onChangeInput(e.target.value)
    }
}

export default Todos