import React from 'react'

export default function Form({handelSubmit, value, setValue}) {
    const handelChange = (e) =>{
        setValue(e.target.value);
        // console.log('e', e.target.value)
    };
    


    return (
        <div>
            <form style= {{display:'flex'}} onSubmit={handelSubmit} className="flex pt-2">
                <input
                className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
                type="text"
                name="value"
                style={{flex:'10', padding:'5px'}}
                placeholder="해야 할 일을 입력하세요."
                value={value}
                onChange={handelChange}
                />
                <input
                type="submit"
                value="입력"
                className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
                style={{flex:'1'}}
                
                />
            </form>
        </div>
    );
}
