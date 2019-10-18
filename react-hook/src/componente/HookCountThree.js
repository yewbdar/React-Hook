import React,{useState} from 'react';

const HookCountThree = () => {
    const [name,setName]=useState({firstName:"",lastName:""})
    return (
        <form>

            <label>firstName</label>
            
            <input type="text"  value={name.firstName} name="firstName"  onClick={(e) => setName({...name,firstName : e.target.value})}/>
            <label>last Name</label>
            <input type="text"  name="LastName"  onClick={(e) => setName({...name,LastName : e.target.value})}/>
            <p>firstName {name.firstName}</p>  
            <p>lastName {name.lastName}</p>  
         
        </form>
    );
}

export default HookCountThree;
