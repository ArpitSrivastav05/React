import { useState, useCallback} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("") 

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) {
      str += "0123456789"
    }
    if(charAllowed) {
      str += "!@#$%^&*()-+"
    }
    for(let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(idx)
    }
    setPassword(pass)
  }, [length,numberAllowed,charAllowed])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-gray-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input
        type="text"
        value={password}
        className='outline-none w-full px-4 py-2'
        placeholder='Your Password'
        readOnly
        />
        <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
          <input
          type="range"
          min={4}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label className='text-orange-500'>length: {length}</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
