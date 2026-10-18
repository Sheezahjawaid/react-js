import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>
        Custom App!
      </h1>
    </div>
  )
}

/*
const reactElement = {
    type:'a', 
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    Children:'Click me to visit google'
}
*/


const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai or react"

const reactElement = React.createElement(
  'a',//tag
  {href: 'https://google.com',target:'_blank'},//setAttribute like props 
  'click me to visit google',
   anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
