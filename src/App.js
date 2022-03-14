import { render } from "@testing-library/react";
import React, {useEffect, useState} from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import Title from "./Components/Title";

export default function App() {

  if(window.localStorage.getItem("todoDataSave") == null){
    
    window.localStorage.setItem("todoDataSave", JSON.stringify([]));
  }
  const  [todoData, setTodoData] = useState(() => JSON.parse(window.localStorage.getItem("todoDataSave")));
  const [value, setValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("todoDataSave", JSON.stringify(todoData));
  });


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
    window.localStorage.setItem("todoDataSave", JSON.stringify(todoData));

  };

  //setTodoData(window.localStorage.getItem("todoData"));

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