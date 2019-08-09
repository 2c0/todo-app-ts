import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { string } from "prop-types";

// setting interface for ITodo
interface ITodo {
  text: string;
  complete: boolean;
}

const App: React.FC = () => {
  //initialiazing State using React Hooks
  const [value, setValue] = useState<string>(""); // set initial value as "value" with empty String
  const [todos, setTodos] = useState<ITodo[]>([]); // set initial value as "todos" using ITodo interface -> empty []

  type FormElem = React.FormEvent<HTMLFormElement>;

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    // cleaning the State after the todo is added
    setValue("");
  };

  const addTodo = (text: string):void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos); // adding the string from user to the []
  };

  const removeTodo = (index: number):void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1); // removing the todo, that user is clicking on using index and splice method
    setTodos(newTodos);
  };

  const completeTodo = (index: number):void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete; // revert the state
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
              <div style={{textDecoration: todo.complete ? 'line-through' : ''}}>{todo.text}</div>
              <button type="button" onClick={() => completeTodo(index)}>
                {todo.complete ? "Incomplete" : "Complete"}
              </button>
              <button type="button" onClick={() => removeTodo(index)}>
               &times;
              </button>
            </Fragment>
          ))}
        </section>
      </form>
    </Fragment>
  );
};

export default App;
