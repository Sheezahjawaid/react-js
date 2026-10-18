import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const[counter , setCounter] = useState(15)
  
  //let counter= 15

  const addValue=() =>{
    if(counter == 20){
      alert("counter reaches the limit")
    }
    else{
      setCounter(counter + 1)
    }
  }

  const removeValue=()=>{
    if(counter < 1){
      alert("counter reaches the limit")
    }
    else{
      setCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>Counter App</h1>
    <h2>counter value : {counter}</h2>
    <button
    onClick={addValue}
    >Add value</button>
    <br/>
    <button
    onClick={removeValue}
    >remove value</button>
    </>
  )
}

export default App
