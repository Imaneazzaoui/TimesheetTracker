import React from 'react'
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { Box } from "@mui/material";
import Title from '../Title/Title';
const textTitre = "Prestataires";
import CardPrestataires from './cardPrestataires';
import EventModal from './EventModalPrestataires';
import { useState } from "react";

export default function Prestataires() {

  
  const [isEventModalOpen, setEventModalOpen] = useState(false);

  const openEventModal = () => {
    setEventModalOpen(true);
  };

  return (
        <div>
                <div className='home'>
                 <SideBar />
                 <div className='homeContainer'>
                 <NavBar />
                 <Title titre={textTitre} />
                 <div className="grid grid-cols-5 grid-rows-1 gap-4 m-3">
            <div className="mb-3 ">
              <input
                type="text"
                placeholder="Search un  prestataire..."
                className="px-3 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <div className="flex flex-col">
                <select
                  id="statusFilter"
                  className="px-3 py-2 border border-gray-300 rounded-md w-full"
                >
                  <option value="all">All</option>
                  <option value="done">Active</option>
                  <option value="inProgress">Inactive</option>
                </select>
              </div>
            </div>
            <div className="col-span-2 col-start-4">
              <div>
              <button
              onClick={openEventModal}
              className="mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Ajouter un nouveau Prestataire
            </button>
              </div>
            </div>
          </div>
            <CardPrestataires />
          {isEventModalOpen && <EventModal  />}
                  <Footer />
                 </div>
                 </div>
         </div>
  )
}
