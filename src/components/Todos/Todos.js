import "./Todos.scss";
import { useState } from "react";

const Todos = () => {
  // const array = [1, 2];
  // const [first, ajhsfdsa] = array;
  // console.log(first);

  // const useState = (argument) => {
  //   // ...
  //   return [a, b];
  // };

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "first todo",
    },
    {
      id: 2,
      text: "second todo",
    },
    {
      id: 3,
      text: "third todo",
    },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const inputChange = (e) => {
    setNewTodo(e.target.value);
  };


  const addTodo = (e) => {
    e.preventDefault();
    console.log(newTodo);
  };

  return (
    <div className="todos">
      <form className="todos__form" onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={inputChange}
          placeholder="Your new todo..."
        />
        <button type="submit">Add todo</button>
      </form>
      <div className="todos__list">
        {todos.map(({ id, text: other }) => {
          const finalText = other + 1;
          return (
            <div className="todos__item" key={id}>
              {finalText}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
