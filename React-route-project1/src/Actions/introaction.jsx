import React from 'react'
import Helper from '../helper'
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
const  Introaction = async ({request}) => {
    const formData=await request.formData();
    const userName=formData.get('nameOfUser')
    localStorage.setItem("userName",JSON.stringify(userName));
    toast.success('Created Account successfully');
    return redirect('/');
}   

export default Introaction
