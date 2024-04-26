import axios from "axios"

function Todo(props){
    const { title, description, completed, _id } = props.todo;

    function handleCompleteTodo(){
        axios.put("http://localhost:3000/todo",{
            "id": _id
        })
    }

    function handleDeleteTodo(){
        axios.delete("http://localhost:3000/todo/"+_id);
    }

    return <>
        <h1>Title: {title}</h1>
        <h2>Description: {description}</h2>
        <button onClick={handleCompleteTodo}>{completed==true ? "completed" : "Mark as complete"}</button>
        <button onClick={handleDeleteTodo}>Remove</button>
    </>
}

export default Todo;