import React, { useState, useContext, useEffect } from "react";
import EventModal from "./EventModalUsers";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import Title from "../Title/Title";
import Card from "./Card";

function Users() {

 
  const textTitre = "Utilisateurs";
  
  
  
  return (
    <div>
      <div className='home'>
        <SideBar />
        <div className='homeContainer'>
          <NavBar />
          <Title titre={textTitre} />

            <div ><Card/></div>
                  
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Users;
