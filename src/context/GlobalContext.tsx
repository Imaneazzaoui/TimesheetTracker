import React from 'react';

interface GlobalContextType {
  monthIndex: number;
  setMonthIndex: React.Dispatch<React.SetStateAction<number>>;
  showEventModal: boolean;
  setShowEventModal: React.Dispatch<React.SetStateAction<boolean>>;
  daySelected: Date | null;
  setDaySelected: React.Dispatch<React.SetStateAction<Date | null>>;
  dispatchCalEvent: ({ type, payload }: { type: string; payload: any }) => void;
  savedEvents: any[]; 
  selectedEvent: any | null;
  setSelectedEvent: React.Dispatch<React.SetStateAction<any | null>>; 
}

const GlobalContext = React.createContext<GlobalContextType>({
  monthIndex: 0,
  setMonthIndex: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  daySelected: null,
  setDaySelected: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {}, 
});

export default GlobalContext;