import React, { useReducer, useState, useEffect } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

function savedEventsReducer(state: { id: any }[], { type, payload }: any) {
  switch (type) {
    case 'push':
      return [...state, payload];
    case 'update':
      return state.map((evt: { id: any }) => (evt.id === payload.id ? payload : evt));
    case 'delete':
      return state.filter((evt: { id: any }) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem('savedEvents');
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

export default function ContextWrapper(props: any) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal, setShowEventModal] = useState(false);
  const [daySelected, setDaySelected] = useState<Date | null>(dayjs().toDate());
  const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null); 

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showEventModal,
        setShowEventModal,
        daySelected,
        setDaySelected,
        dispatchCalEvent,
        savedEvents,
        selectedEvent,
        setSelectedEvent
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}