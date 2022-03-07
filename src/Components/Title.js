import React from 'react'

export default function Title({todoData, setTodoData}) {
    const delBtnStyle = {
        color: "#000",
        border: "none",
        padding: "10px 10px",
        margin: "10px 10px",
        cursor: "pointer",
        float: "right",
    };
    const handelDelClick = () => {
        let newTodoData = [];
        setTodoData(newTodoData);
    };

    return (
        <div>
            <h1>
                할 일 목록
                <button style={delBtnStyle} onClick={()=> handelDelClick()}> x </button>
            </h1>
        </div>
    );
}
