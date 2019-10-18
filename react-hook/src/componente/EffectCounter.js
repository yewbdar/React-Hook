import React ,{useState,useEffect}from 'react';

const EffectCounter = () => {
    const [count, setCount]=useState(0)
    useEffect(() => {document.title =`you clicked ${count} time `})
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>counter {count}</button>
        </div>
    );
}

export default EffectCounter;
