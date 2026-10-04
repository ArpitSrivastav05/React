import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    if(counter >=20){
      alert("Counter value is greater than 20");
      setCounter(0);
    }
  }

  const removeValue = () => {
    setCounter(counter - 1);
    if(counter <= 0){
      alert("Counter value is less than 0");
      setCounter(0);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>remove Value {counter}</button>
    </>
  )
}

export default App
