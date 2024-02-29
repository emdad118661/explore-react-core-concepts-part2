import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('Button clicked!!');
  }
  const handleClick2 = () =>{
    alert('Button clicked 2!!');
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      
      <h3>React Core Concept 2</h3>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => {alert('third click!!!')}}>Third click</button>
      <button onClick={() => {addToFive(5)}}>Four</button>

      
    </>
  )
}

export default App
