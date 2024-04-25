function CreateTodo() {
  return (
    <>
      <input style={{ padding:10, margin:10 }} type="text" placeholder="title"></input><br/>
      <input style={{ padding:10, margin:10 }} type="text" placeholder="description"></input><br/>
      <button style={{ padding:10, margin:10 }}>Add todo</button>
    </>
  );
}

export default CreateTodo;
