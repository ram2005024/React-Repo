  import React, { useState,useEffect} from 'react';
  import { Outlet } from 'react-router-dom';
  import Navigation from '../Components/nav';
  import wave from '../assets/wave.svg';
  import { useLoaderData } from 'react-router-dom';
  import { ToastContainer } from 'react-toastify';
  export const MainLoader=()=>{
    return JSON.parse(localStorage.getItem('userName'));
  }
  const Main = () => {
    const userName=useLoaderData();
                                      return (
              <div className="layout">
                <Navigation userName={userName} />
                <main>
                  <Outlet />
                </main>
                <img src={wave} alt="footer_image" />
                <ToastContainer />
              </div>
                                              );
  };

  export default Main;
