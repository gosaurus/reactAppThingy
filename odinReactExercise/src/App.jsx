import { useState } from "react";
import "./App.css";
import List from "./components/List.jsx";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodo] = useState([]);

 const handleChange = (event) => {
     setValue(event.target.value);
     console.log("Input value", event.target.value);
 };

 const handleSubmit = (event) => {
    console.log("handlesubmit input value", value)
    event.preventDefault();
    if (value.trim() === "") return;
    const newTodos = [...todos, value];
    setTodo(newTodos);
    setValue("");
    console.log("Todos: ", todos);
    console.log("Length =", todos.length)
 };

  return (
    <>
      <div>
      <h1>To-do list</h1>
      <p>No-other-components version.</p>
    <form onSubmit={handleSubmit}>
    <label htmlFor="value">Next on your to do list: </label>
     <input type="text" defaultValue={value} onBlur={handleChange}/>
        <button type="submit">Submit
        </button>
      </form>
      <List todos={todos} />
      </div>
    </>
  )
}

export default App
