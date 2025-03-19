import React from "react";
import { redirect } from "react-router-dom";

export const LoadAction=async ({request})=>{
const data=new URLSearchParams(await request.formData());
const userName=data.get('userName');
const password=data.get('password');
if(userName=='admin' && password=='password'){
    return redirect('/Dashboard')
}
else{
   return {error:'Your have entered wrong credentials',
    myMessage:'Hello Sir Enter Right password and Sleep'
   }
}
}
