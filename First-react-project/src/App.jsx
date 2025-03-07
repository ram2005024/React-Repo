    import { useState } from 'react'
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    import './App.css'

    function App() {
      const [color,setColor]=useState('olive');
      function changeColor(Color){
        setColor(Color);
      }
     return (
<div style={{backgroundColor:color}} className="mainCont">
<div className="contForButton">
  <button className="button redButton " onClick={()=>{setColor('red')}}>
Red
    </button>
    <button className="button greenButton " onClick={()=>{setColor('green')}}>
Green
      </button>
      <button className="button whiteButton" onClick={()=>{
        
     setColor('white') }}>
White
      </button>
      <button className="button pinkButton" onClick={()=>{
        
     setColor('pink') }}>
Pink
      </button>
      <button className="button beigeButton" onClick={()=>{
        
     setColor('beige') }}>
Beige 
      </button>
      <button className="button skyBlueButton" onClick={()=>{
        
     setColor('skyblue') }}>
SkyBlue
      </button>
</div>
</div>  

     )
    }

    export default App
