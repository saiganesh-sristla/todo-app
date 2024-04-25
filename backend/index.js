const express = require("express");
const { todoModel } = require("./db");
const { createTodoValidate, updateTodoValidate } = require("./types");
const app = express();

app.use(express.json());

app.get("/todos", async (req, res) => {
  const todos = await todoModel.find();
  res.status(200).json({
    todos: todos,
  });
});

app.post("/todo", async (req, res) => {
  const receivedPayload = req.body;
  const actualPayload = createTodoValidate.safeParse(receivedPayload);

  if (!actualPayload.success) {
    res.status(401).json({
      message: "wrong inputs",
    });
    return;
  }

  await todoModel.create({
    title: receivedPayload.title,
    description: receivedPayload.description,
    completed: false,
  });

  res.status(201).json({
    message: "todo created",
  });
});

app.put("/todo", async (req, res) => {
  const receivedPayload = req.body;
  const actualPayload = updateTodoValidate.safeParse(receivedPayload);

  if (!actualPayload.success) {
    res.status("401").json({
      message: "wrong inputs",
    });
    return;
  }

  await todoModel.updateOne(
    {
      _id: receivedPayload.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    message: "todo completed",
  });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
