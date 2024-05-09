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

    if(title == "" || description == ""){
        return;
    }

    return <div className="p-2 m-2 w-[80%] h-30 bg-[#EEEEEE] shadow-lg">
        <h1 className="font-semibold ">Title: {title}</h1>
        <h2 className="font-medium ">Description: {description}</h2>
        <button className="p-1 m-2 hover:bg-[#C73659] text-white rounded-md px-2 bg-[#A91D3A]" onClick={handleCompleteTodo}>{completed==true ? "completed" : "Mark as complete"}</button>
        <button className="p-1 m-2 hover:bg-[#C73659] text-white rounded-md px-2 bg-[#A91D3A]" onClick={handleDeleteTodo}>Remove</button>
    </div>
}

export default Todo;