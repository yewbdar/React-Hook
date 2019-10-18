import React ,{useState}from 'react';

const HookCounterFour = () => {
     const [arry,setArry]=useState([])
   const onClickeButton=()=>{
       setArry([...arry,{
           id:arry.length,
           value:Math.floor(Math.random()*10)+1
    }],console.log('hello',arry))
    
   }
    return (
        
        <div>
            <button onClick={onClickeButton}>add a number </button>
            {arry.map(item=> <li key={item.id}>{item.value}</li>)}
             
        </div>
    );
}

export default HookCounterFour;
