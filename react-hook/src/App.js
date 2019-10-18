import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './componente/ClassCounter';
import HookCounter from './componente/HookCounter';
import HookCounterTwo from './componente/HookCounterTwo';
import HookCountThree from './componente/HookCountThree';
import HookCounterFour from './componente/HookCounterFour';

function App() {
  return (
    <div className="App">
      <HookCounterFour/>
      {/* <HookCountThree/> */}
      {/* <HookCounterTwo/>
      <HookCounter/>
      <ClassCounter/> */}
    </div>
  );
}

export default App;
