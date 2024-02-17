import React, { useState } from "react";
import Form from "./Form";
import Todos from "./Todos";
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is a first title",
      description: "This is a first Description",
    },
    {
      id: 2,
      title: "This is a second title",
      description: "This is a second Description",
    },
    {
      id: 3,
      title: "This is a third Title",
      description: "This is a third Description",
    },
  ]);

  const [id, setId] = useState("");

  console.log("This is id = ", id);

  const deleteTodo = (id) => {
    setTodos(todos.filter((d) => d.id != id));
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">React To do List CRUD App</h1>
        <Form id={id} setId={setId} todos={todos} setTodos={setTodos} />
        <Todos todos={todos} deleteTodo={deleteTodo} setId={setId} />
      </div>
    </>
  );
};

export default App;
