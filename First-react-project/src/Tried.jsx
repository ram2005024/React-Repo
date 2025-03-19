import React from "react";
import TimerComponent from "./TimerComponent";
import { useState } from "react";

const Tried = () => {
  const [ count, setCount ] = useState(true);
  return (
    <div className="myDiv">
      {count && <TimerComponent />}
      <button onClick={()=>setCount(!count)}>
        {
          count?"Stop Count":"Start Count"
        }
       </button>
      </div>
    
  )

};

export default Tried;
