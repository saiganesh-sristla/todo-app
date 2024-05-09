import Todo from "./Todo";

function TodosContainer(props){

    return<div className=" flex flex-col justify-center items-center">
        {props.todos.map((todo, i) => {
            return <Todo key={i} todo={todo}/>
        })}
    </div>
}

export default TodosContainer;