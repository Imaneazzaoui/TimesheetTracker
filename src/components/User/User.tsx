import React, { useState } from 'react';
import { Footer } from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import Title from "../Title/Title";
import UsersEventModal from "./UsersEventModal"; 

const textTitre = "Utilisateurs";

export default function User() {
    const [showEventModal, setShowEventModal] = useState(false);

    const handleOpenEventModal = () => {
        setShowEventModal(true);
    };


    return (
        <div>
            <div className='home'>
                <SideBar />
                <div className='homeContainer'>
                    <NavBar />
                    <Title titre={textTitre} />
                    <button onClick={handleOpenEventModal}>Open Event Modal</button>
                    <Footer />
                </div>
            </div>
            {showEventModal && <UsersEventModal />}
        </div>
    )
}
