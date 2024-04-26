import Todo from "./Todo";

function TodosContainer(props){

    return<>
        {props.todos.map((todo, i) => {
            return <Todo key={i} todo={todo}/>
        })}
    </>
}

export default TodosContainer;