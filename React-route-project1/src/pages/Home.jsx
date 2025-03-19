import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Intro from '../Components/intro';

export const LoaderFunction=async ()=>{
  return  JSON.parse(localStorage.getItem('userName'));
 
}
export const Home = () => {
  const userName=useLoaderData();
  return userName ? (
    <div>
      <h1>Welcome to Budget App {userName}</h1>
    </div>
  ) :<Intro />
};
