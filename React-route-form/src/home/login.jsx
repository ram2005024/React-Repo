import React from "react"
import { useState } from "react"
import { Form } from "react-router-dom"
import { useActionData } from "react-router-dom"
export const Login=()=>{
    const Actiondata=useActionData();
    return(
        <div>
            <h1 className="text-center text-5xl" >Login Page</h1>
        <Form method="POST" className="text-center m-7">
            <label htmlFor="name">UserName:</label>
            <input type="text" className="border border-black" id="name" name="userName" placeholder="UserName"/><br />
            <label htmlFor="password">Password: </label>
            <input type="password"  className="border border-black mt-2" name="password" placeholder="Password"/><br />
            <button type="submit" className="border mt-2 bg-black text-white cursor-pointer">Submit</button>
        </Form>
        {
            Actiondata?.error && <p style={{color:'red'}}> {Actiondata.error} {Actiondata.myMessage}</p>
        }   
    </div>
    )
}
