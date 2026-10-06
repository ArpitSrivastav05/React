import { useState, useCallback, useEffect, useRef} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8)//password ki length ko store karne ke liye state banai; initial value 8 hai
  
  const [numberAllowed,setNumberAllowed] = useState(false)//checkbox ke liye state banai;

  const [charAllowed,setCharAllowed] = useState(false)//checkbox ke liye state banai; useState - hook hai jo state ko manage karne ke liye use hota hai; initial value false hai

  const [password,setPassword] = useState("") //password ko store karne ke liye state banai

  //useRef Hook-
  const passwordRef = useRef(null)//ye hook ek reference create karega jo password input field ko refer karega; initial value null hai


  const passwordGenerator = useCallback(() =>{//password generate karne ke liye function banaya;jisme useCallback hook ka use kiya gaya hai; ye function ko memoize karta hai; ye function tabhi re-create hoga jab length,numberAllowed,charAllowed change honge
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
    setPassword(pass)//password ko state me set kar diya
  }, [length,numberAllowed,charAllowed, setPassword])//ye function tabhi re-create hoga jab length,numberAllowed,charAllowed, setPassword change honge

const copyPasswordToClipboard = useCallback(() =>{
  passwordRef.current.select()//ye function password input field ko select karega
  
  window.navigator.clipboard.writeText(password)//ye function password ko clipboard me copy karega
}, [password])//ye function tabhi re-create hoga jab password change hoga


  useEffect(() => { //ye hook tabhi run hoga jab length,numberAllowed,charAllowed,passwordGenerator change honge; ye hook passwordGenerator function ko call karega
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])//ye hook tabhi run hoga jab length,numberAllowed,charAllowed,passwordGenerator change honge
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
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
          <input
          type="range"
          min={4}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}//ye function length ko update karega jab user slider ko move karega
          />
          <label className='text-orange-500'>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input
          type="checkbox"
          checked={numberAllowed}
          id="numberInput"
          onChange={(e) => setNumberAllowed(e.target.checked)}
          />
          <label htmlFor="numberInput" className='text-orange-500'>Include Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input
          type="checkbox"
          checked={charAllowed}
          id="charInput"
          onChange={() => { setCharAllowed((prev) => !prev)}}//prev value ko change ya reverse kar dega
          />
          <label htmlFor="charInput" className='text-orange-500'>Include Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
