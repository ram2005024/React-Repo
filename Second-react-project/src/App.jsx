import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
const [numbersAllowded,setNumberAllowd]=useState(false);
const [charactersAllowded,setCharactersAllowd]=useState(false);
const [password,setPass]=useState("");
const generatePassword=useCallback(()=>{
 let pass="";
  let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numbersAllowded){ string+="1234567890";}
  if(charactersAllowded){ string+="!@#$%^&*()_+";}
  for(let i=1; i<=length; i++){
let char=Math.floor(Math.random()*string.length+1);
pass+=string.charAt(char);
  }
  setPass(pass);
},[length,charactersAllowded,numbersAllowded]);
useEffect(()=>{
generatePassword();
},[generatePassword,length,charactersAllowded,numbersAllowded]);
const myRef=useRef(null);
  return (
<div className="cont">
<h1>
    Password Generator
  </h1>
  <div className="inputField">
    <input type="text" placeholder='Password' value={password} readOnly ref={myRef} />
    <button onClick={()=>{
myRef.current?.select();
navigator.clipboard.writeText(password);
    }}>
      Copy
    </button>
  </div>
  <div className="lastInput">
    <input type="range" className="rangeInput" max={100} min={6} value={length} onChange={
      (e)=>{
        setLength(e.target.value)
      }
    }/>
 <span className="length">Length: {length}</span>
 <input type="checkbox" id='Numbers'  onChange={() => setNumberAllowd((prevValue)=>!prevValue)} />
 <label htmlFor="Numbers">Numbers</label>
 <input type="checkbox" id='Characters' onChange={() => setCharactersAllowd((prevValue)=>!prevValue)}/>
 <label htmlFor="Characters">Characters</label>
  </div>
</div>
  )
}   

export default App
