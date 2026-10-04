import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card8 from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  
     /* eslint-disable @next/next/no-img-element */
  return (
    <>
      <Card8 username="John Doe" btnText="View Profile" />
      <Card8 username="Jane Smith" btnText="Follow" />
      <Card8 username="Bob Johnson" btnText="Message" />
    </>

  )
}


export default App
