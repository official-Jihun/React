import React,  {useState} from 'react'

export default function List({todoData, setTodoData}) {

    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        margin:"5px",
        cursor: "pointer",
        float: "right",
    };

    const [value, setValue] = useState("");

    const handelChange = (e) =>{
        setValue(e.target.value);
    };
    
    const getStyle = (completed) => {
        return{
            padding:"10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through": "none",
        };
    };

    const handelDelClick = (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData);
    };

    const handelModClick = (id) => {
        let newTodoData = todoData.map((data) => {
            if(data.id === id){
              data.mod = !data.mod;
            }
            return data;
        });
        setTodoData(newTodoData)
        setValue(todoData.title)
    };

    const handelCompletedChange = (id) =>{
        let newTodoData = todoData.map((data) => {
          if(data.id === id){
            data.completed = !data.completed;
          }
          return data;
        });
        setTodoData(newTodoData)
    };

    const handelSubmit = (id) => (e) => {
    
        e.preventDefault();

        console.log('handelsub',value, id, e);
        let newTodoData = todoData.map((data) => {
            if(data.id === id){
              data.mod = !data.mod;
              data.title = value;
            }
            return data;
        });
        setTodoData(newTodoData)
    
      };
    
    


    return (
        <div>
            {todoData.map((data)=> (
            <div style={getStyle(data.completed)} key={data.id}>
                <p>
                
                {   
                    data.mod ?

                    <form style= {{display:'flex'}} onSubmit={handelSubmit(data.id)} >
                        <input
                            type="text"
                            name="value"
                            style={{flex:'10', padding:'5px'}}
                            placeholder={data.title}
                            value={value}
                            onChange={handelChange}
                        />
                        <input
                            type="submit"
                            value="+"
                            className="수정"
                            style={{flex:'1'}}
                        />
                    </form> 
                    
                    :<div>
                        <input
                            type = "checkbox"
                            onChange={() => handelCompletedChange(data.id) }
                            defaultChecked={false}
                        />
                        {" "}{data.title}
                    
                        <button style={btnStyle} onClick={()=> handelDelClick(data.id)}> x </button>
                        <button style={btnStyle} onClick={()=> handelModClick(data.id)}> + </button>
                    </div> 
                }

                </p>
            </div>
            ))}
        </div>
    );
}
