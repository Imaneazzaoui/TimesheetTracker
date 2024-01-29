import React, { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserTabs } from './UserTabs';

  
  
export default function UsersEventModal() {

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-end items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)",overflowY: "auto" }}>
    <form className="bg-white shadow-2xl w-[400px] flex flex-col items-start" style={{ height: "100vh", position: "fixed" }}>
    <header className=" pb-2 flex justify-between w-full h-[52px]" style={{ backgroundColor: "#364574" }}>
          <div></div>
          <h5 className="text-white mr-auto ml-5 mt-4" style={{  fontSize: '18px', fontWeight: 'normal', fontFamily:'Poppins,sans-serif'}}>Ajouter un utilisateur</h5>
          <button>
            <span className="material-icons-outlined  pt-3 text-white pr-2" style={{ marginRight: '5px' }}>close</span>
          </button>
          
        </header>
            <div className="relative w-full p-4">
            <UserTabs />
            </div>
            <footer className="flex justify-end p-2 mt-5 fixed bottom-0 border border-t ">
          <div className="grid grid-cols-2 gap-7">
            <div>
              <button className='bg-blue-900 px-5 py-4 ml-2 my-3 rounded text-white text-sm w-full' type="submit"
               id='savebutton' style={{width: "180px"}}>Enregistrer</button>
            </div>
            <div>
              <button className='bg-gray-300 px-5 py-4 my-3 rounded text-black text-sm w-full'>Annuler</button>
            </div>
          </div>
        </footer>
    </form>
    </div>
  );
}
