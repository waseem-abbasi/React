import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Card from './components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello</h1>
      <Card cardname = "first Card" text="this is a first card "/>
      <Card cardname='second Card'  text="this is a second card "/>
    </>
  )
}

export default App
