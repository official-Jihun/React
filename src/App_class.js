import { render } from "@testing-library/react";
import React, {Component} from "react";

export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  }

  getStyle = (completed) => {
    return{
      padding:"10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through": "none",
    };
  }
  state = {
    todoData : [
      
    ],
    value:"",
  }
  

  handelClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({todoData: newTodoData})
    // console.log('newTodoData', newTodoData)
  }

  handelChange = (e) =>{
    this.setState({value: e.target.value})
    // console.log('e', e.target.value)
  }

  handelSubmit = (e) => {

    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed:false,
    };

    this.setState({todoData:[...this.state.todoData,newTodo], value: ""});
  
  }

  handelCompletedChange = (id) =>{
    let newTodoData = this.state.todoData.map((data) => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({todoData:newTodoData});
  }
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>

          </div>

          {this.state.todoData.map((data)=> (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <p>
                <input
                  type = "checkbox"
                  onChange={() => this.handelCompletedChange(data.id) }
                  defaultChecked={false}
                />
                {" "}{data.title}
                <button style={this.btnStyle} onClick={()=> this.handelClick(data.id)}> x </button>
              </p>
            </div>
          ))}
          <div style={this.getStyle()}>
          </div>

          <form style= {{display:'flex'}} onSubmit={this.handelSubmit}>
            <input
              type="text"
              name="value"
              style={{flex:'10', padding:'5px'}}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handelChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{flex:'1'}}
            
            />
          </form>
           
          

        </div>
      </div>
    )
  }
}