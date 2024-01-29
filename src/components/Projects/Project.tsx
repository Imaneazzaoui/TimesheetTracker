import React from 'react'
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { Box } from "@mui/material";
import Title from '../Title/Title';
const textTitre = "Liste des Projects";
import CardProjet from './CardProjet';
import EventModal from './EventModalProject';
import { useState } from "react";

export default function Project() {

  const [isEventModalOpen, setEventModalOpen] = useState(false);

  const openEventModal = () => {
    setEventModalOpen(true);
  };

  

  return (
        <div>
                <div className='home'>
                 <SideBar />
                 <div>
                 <NavBar />
                 <Title titre={textTitre} />
                 <div className="grid grid-cols-5 grid-rows-1 gap-4 m-3">
           
           
            <div className="col-span-2 col-start-4">
              <div>
              <button
              onClick={openEventModal}
              className="mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Ajouter un nouveau Projet
            </button>
              </div>
            </div>
          </div>
            <CardProjet />
          {isEventModalOpen && <EventModal  />}
                  <Footer />
                 </div>
                 </div>
         </div>
  )
}
