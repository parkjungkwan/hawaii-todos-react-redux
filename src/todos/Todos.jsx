import React from "react";

function TodosItem({ todo, onToggle, onRemove}){
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
export default function Todos({
    input, // 인풋에 입력되는 텍스트
    todos, // 할일 목록이 들어 있는객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}){
    function onSubmit (e){
        e.preventDefault()
        onInsert(input)
        onChangeInput('') // 등록 후 인풋 초기화
    }
    function onChange (e){onChangeInput(e.target.value)}
    return (
        <div>
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={input} onChange={onChange}/>
                <button type={"submit"}>등록</button>
            </form>
        </div>
        <div>
            {todos.map(todo => (<TodosItem todo={todo} key={todo.id}
                           onToggle={onToggle}
                           onRemove={onRemove}/>)
            ) }
        </div>
        </div>
    )
}
