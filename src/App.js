import { render } from "@testing-library/react";
import React, {useState} from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import Title from "./Components/Title";

export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");


  const handelSubmit = (e) => {
    
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed:false,
      mod:false,
    };

    setTodoData(prev =>[...prev, newTodo])
    setValue("")

  };



  return (
    <div className="container">
      <div className="todoBlock">
        <Title todoData={todoData} setTodoData={setTodoData}/>
        <List todoData={todoData} setTodoData={setTodoData}/>
        <Form handelSubmit={handelSubmit} value={value} setValue={setValue}/>
      </div>
    </div>
  );
}