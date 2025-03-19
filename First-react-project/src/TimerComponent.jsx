import React from 'react'
import { useState, useEffect } from 'react'

const TimerComponent = () => {
    
    const [ second, setSecond ] = useState(0);
    
    useEffect(() => {
        console.log("Start Timer")
      const intervalID= setInterval(() => {
            setSecond((sec) => sec+1)  
        }, 1000) 
        return (() => {
            console.log("Clear Timer")
            clearInterval(intervalID);
        })

    },[])
  return (
      <div>
          <h1>
              Seconds: {second}
          </h1>
    </div>
  )
}

export default TimerComponent
