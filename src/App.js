import React from "react";
import { useState } from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setcount]=useState(0);
  let [value,setvalue]=useState(0);
  return (
    <div>
      <div> Count {count}
      </div>
      <input type="number" name="value" onChange={(e)=>{setvalue(parseInt(e.nativeEvent.data))}}/>
      <button onClick={()=>{setcount(count+value)}}>Increase count</button>
      <button onClick={()=>{setcount(count-value)}}>Decrease count</button>
    </div>
  );
}

export default App;
