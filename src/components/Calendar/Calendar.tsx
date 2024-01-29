import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import GlobalContext from "../../context/GlobalContext";
import { Box } from "@mui/material";
import { getMonth } from "../../utils";
import Months from "./Months";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import Title from "../Title/Title";
import HolidayNamesMap from '../../../holidays.json';
import EventModal from "./EventModel";

type Holiday = {
  name: string;
  date: string;
};

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  const holidays = HolidayNamesMap as Holiday[];

  const textTitre = "Feuille de temps";
  console.log('HolidayNamesMap:', HolidayNamesMap);

  return (
    <>
      <div className='home'>
        <SideBar />
        <div className='homeContainer'>
          <NavBar />
          <Title titre={textTitre} />
          <Box sx={{ display: 'flex' }}>
            <React.Fragment>
              {showEventModal && <EventModal />}
              <div className="card-container">
                <div className="flex flex-col">
                  <CalendarHeader />
                  <div className="flex flex-1 h-full">
                    <Months month={currentMonth} holidays={holidays} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          </Box>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Calendar;
