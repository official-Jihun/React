import React from 'react'

export default function Title({todoData, setTodoData}) {
    const handelDelClick = () => {
        let newTodoData = [];
        setTodoData(newTodoData);
    };

    return (
        <div className="flex w-full px-4 py-8 text-gray-500 round text-2xl items-center justify-between ">
            <h1>
                할 일 목록
            </h1>
            <button className="px-4 py-2 items-center mx-2 bg-gray-300 rounded-xl float-right" 
            onClick={()=> handelDelClick()}> x </button>
        </div>
    );
}
