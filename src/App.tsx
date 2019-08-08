import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");

  type FormElem = React.FormEvent<HTMLFormElement>;

  const handleSubmit = (e: FormElem):void => {
    e.preventDefault();
    setValue('');
  }
  
  return (
    <Fragment>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <button type="submit">Add todo</button>
      </form>
    </Fragment>
  );
};

export default App;