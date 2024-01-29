import React, { useState, useContext, useEffect } from "react";
import SideBar from '../SideBar/SideBar';
import './home.css';
import { getMonth } from "../../utils";
import CalendarHeader from "../Calendar/CalendarHeader";
import Months from "../Calendar/Months";
import GlobalContext from "../../context/GlobalContext";
import EventModal from "../EventModal";
import { Box } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import Title from "../Title/Title";
import Main from "../Dash/Main";

const textTitre = "Tableau de Bord";
export default function Home() {

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className='home' style={{ backgroundColor: 'grey' }}>
      <SideBar />
      <div className='homeContainer'>
        <NavBar />
        <Title titre={textTitre} />
        <Main/>
      <Footer/>
      </div>
    </div>
  );
}
