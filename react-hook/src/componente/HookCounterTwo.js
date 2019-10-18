import React,{useState} from 'react';

const HookCounterTwo = () => {

    const intial=0
    const [count,setCount]=useState(intial)
    const increment=()=>{
        for(let i=0;i<5;i++){
            setCount(priv=> priv + 1)
            
        }
    }
    return (
        <div>
            count= {count }
            <button onClick={()=>setCount(intial)}>reset</button>
            <button onClick={()=>setCount(count + 1)}>increment</button>
            <button onClick={()=>setCount(count - 1)}>decrement</button>
            <button onClick={increment}>increment By 5 </button>
        </div>
    );
}

export default HookCounterTwo;
