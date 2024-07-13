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
    await axios.post("http://localhost:3000/todo", {
      title: title,
      description: description,
    });
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    setTitle("");
    setDescription("");
  }

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.todos));
    fetchTodosFromBackend();
  }, []);

  return (
    <>
    <div className="bg-[#151515] flex flex-col justify-center items-center py-14">
      <input
      className="rounded-lg"
        id="title"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            document.getElementById("desc").focus();
          }
        }}
      ></input>
      <br />
      <input
      className="rounded-lg"
        id="desc"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            handleCreateTodo();
          }
        }}
      ></input>
      <br />
      <button className="p-2 m-2 bg-[#A91D3A] text-white rounded-md px-2 hover:bg-[#C73659]" onClick={handleCreateTodo}>
        Add todo
      </button>
      </div>
      <TodosContainer todos={todos} />
    </>
  );
}

export default CreateTodo;
