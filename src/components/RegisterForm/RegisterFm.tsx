import React from 'react'
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { Box } from "@mui/material";
import Title from '../Title/Title';
const textTitre = "Prestataires";
import CardPrestataires from './CardPrestataires';
import EventModal from './EventModalPrestataires';
import { useState } from "react";
import RegisterForm from "./RegisterForm.tsx"

export default function Prestataires() {

  const isAuthenticated = !!localStorage.getItem("token");

  // If not authenticated, you can handle it here, for example, redirect to a login page
  if (!isAuthenticated) {
    // You can implement your redirection logic here
    // For example:
    window.location.href = "/"; // Redirect to login page
    return null; // Prevent rendering the component
  }



  return (
        <div>
                <div className='home'>
                 <SideBar />
                 <div className='homeContainer'>
                 <NavBar />
                 <Title titre={textTitre} />

<RegisterForm/>
                
                  <Footer />
                 </div>
                 </div>
         </div>
  )
}
