import React,  {useState} from 'react'

export default function List({todoData, setTodoData}) {


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

                    <form className='flex w-full' onSubmit={handelSubmit(data.id)} >
                        <input
                            type="text"
                            name="value"
                            className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
                            style={{flex:'10', padding:'5px'}}
                            placeholder={data.title}
                            value={value}
                            onChange={handelChange}
                        />
                        <input
                            type="submit"
                            value="+"
                            className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
                            style={{flex:'1'}}
                        />
                    </form> 
                    
                    :<div className='className = "flex items-center justify-between w-full px-4 py-6 my-2 text-gray-500 rounded bg-gray-100 "'>
                        <input
                            type = "checkbox"
                            onChange={() => handelCompletedChange(data.id) }
                            defaultChecked={false}
                        />
                        <span className={data.completed ? "line-through" : "undefined"}>
                            {" "}{data.title}
                        </span>

                        <button className='px-4 py-2 mx-2  float-right bg-gray-300 rounded-xl w-10 h-10 items-center'
                        onClick={()=> handelDelClick(data.id)}> x </button>
                        <button  className='px-4 py-2 mx-2 float-right bg-gray-300 rounded-xl w-10 h-10 items-center'
                        onClick={()=> handelModClick(data.id)}> + </button>
                    </div> 
                }

                </p>
            </div>
            ))}
        </div>
    );
}
