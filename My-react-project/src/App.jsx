import {Function} from './index'
import { useState,useMemo } from 'react';

function App(){
 const [count,setCount]=useState(0);
 let result=useMemo(()=>{
  console.log("Hello World");
  return "Ram Sharma";
 },[count])
return (
<>
<h1>

  Hello Sir How are you?
</h1>
<h1>
  Count : {count}
</h1>
<button onClick={()=>{
  setCount(count+1);
}}>Click me to increase Count</button>
<Function title={result}/>









</>
)
}
export default App
