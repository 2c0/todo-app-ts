import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { string } from "prop-types";

interface ITodo {
  text: string;
  complete: boolean;
}

const App: React.FC = () => {
  //initialiazing State using Hooks
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  type FormElem = React.FormEvent<HTMLFormElement>;

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    // cleaning the State after the todo is added
    setValue("");
  };

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  console.log(todos);

  return (
    <Fragment>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add todo</button>
        <section>
          {todos.map((todo: ITodo, index: number) => (
            <Fragment key={index}>
              <div>{todo.text}</div>
              <button type="button" onClick={() => completeTodo(index)}>
                {todo.complete ? "Incomplete" : "Complete"}
              </button>
            </Fragment>
          ))}
        </section>
      </form>
    </Fragment>
  );
};

export default App;
