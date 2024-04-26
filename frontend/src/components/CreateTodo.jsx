import { useEffect, useState } from "react";
import TodosContainer from "./TodosContainer";
import axios from "axios";

function CreateTodo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function fetchTodosFromBackend() {
    setInterval(async () => {
      const data = await fetch("http://localhost:3000/todos");
      const todos = await data.json();
      setTodos(todos.todos);
    }, 1000);
  }

  async function handleCreateTodo() {
    await axios.post("http://localhost:3000/todo",{
        "title":title,
        "description":description
    });
    document.getElementById('title').value = "";
    document.getElementById('desc').value = "";
  }

  useEffect(() => {
    fetch("http://localhost:3000/todos").then((res) => res.json()).then((data) => setTodos(data.todos));
    fetchTodosFromBackend();
  }, []);

  return (
    <>
      <input
        id="title"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br />
      <input
        id="desc"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <br />
      <button style={{ padding: 10, margin: 10 }} onClick={handleCreateTodo}>
        Add todo
      </button>
      <TodosContainer todos={todos} />
    </>
  );
}

export default CreateTodo;
