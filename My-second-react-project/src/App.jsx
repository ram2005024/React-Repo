import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [count,setMyCount]=useState(0);
const addOnClickCounter=()=>{setMyCount((count)=>count+1);
setMyCount((count)=>count+1);
setMyCount((count)=>count+1);
setMyCount((count)=>count+1);
setMyCount((count)=>count+1);
console.log(count+5);}
const deleteMyCount=()=>{
if(count==0){
return}else{
setMyCount((count)=>count-1);
setMyCount((count)=>count-1);
setMyCount((count)=>count-1);
setMyCount((count)=>count-1);
setMyCount((count)=>count-1);
console.log(count-5);

}
}
  return (
    <>
     <h1>Hello I am Ram Sharma</h1>
     <h2>Counter Value {count}</h2>
     <button  onClick={
     addOnClickCounter
     }>Add Value</button> {""}
     <button
    onClick={deleteMyCount}
     >Delete Value</button>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, assumenda.</p>
    </>
  )
}

export default App
