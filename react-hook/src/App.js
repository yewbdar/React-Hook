import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './componente/ClassCounter';
import HookCounter from './componente/HookCounter';
import HookCounterTwo from './componente/HookCounterTwo';
import HookCountThree from './componente/HookCountThree';
import HookCounterFour from './componente/HookCounterFour';
import EffectCounter from './componente/EffectCounter';

function App() {
  return (
    <div className="App">
      <EffectCounter/>
      {/* <HookCounterFour/> */}
      {/* <HookCountThree/> */}
      {/* <HookCounterTwo/>
      <HookCounter/>
      <ClassCounter/> */}
    </div>
  );
}

export default App;
