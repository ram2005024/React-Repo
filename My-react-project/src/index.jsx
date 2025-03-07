
import React, { useState } from "react";
 export const Function=React.memo(({title})=>{
    console.log("Re rendering")

return (

    <>
    <h2>
        Yes I am fine, Whats about you?
    </h2>
    <h1>I am {title}</h1>
    
    </>
)



})
