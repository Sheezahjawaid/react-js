import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

/*object passing */
  let myObj = {
    username: "sheezah",
    age:21
  }

  /*passing array */

  let newArray= [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4  rounded-xl mb-04' >Talwind test</h1>
      <Card user="sheezah" btnText="Click To Read"/>
      <Card place="America" btnSecond="Click To Follow"/>
    </>
  )
}

export default App
