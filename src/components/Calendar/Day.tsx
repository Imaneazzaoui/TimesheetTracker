import React, { useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import GlobalContext from '../../context/GlobalContext';
import './Calendar.css';
import holidaysData from '../../../holidays.json';



interface DayProps {
  day: Dayjs;
  rowIdx: React.Key | null | undefined;
  jPlusOneDay: Dayjs;
  holidays: { name: string; date: string; }[];
}

export default function Day({ day, rowIdx, jPlusOneDay, holidays }: DayProps) {
  
  function getCurrentDayClass() {
    return day.isSame(dayjs(), 'day') ? 'bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center text-right' : '';
  }

  const holiday = holidaysData.find((holiday) => dayjs(holiday.date).isSame(day, 'day'));
  const holidayName = holiday ? holiday.name : null;

  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } = useContext(GlobalContext);

  const dayEvents = savedEvents.filter((event) => dayjs(event.day).isSame(day, 'day'));

  const isSunday = day.format('ddd').toUpperCase() === 'SUN';

  const isSaturday = day.format('ddd').toUpperCase() === 'SAT';

  const isAfterJPlusOneDay = day.isAfter(jPlusOneDay, 'day');


  return (
    <div className={`day-container border flex flex-col ${isAfterJPlusOneDay && !isSunday && !isSaturday ? 'other-disabled' : ''} ${isAfterJPlusOneDay ? 'disabled' : '' } ${day.format('ddd').toUpperCase() === 'SAT' || day.format('ddd').toUpperCase() === 'SUN' ? 'greyback' : ''}`} style={{height: ' 100px' }}>
      {rowIdx === 0 && (
        <header className={`flex flex-col items-center blueback ${isAfterJPlusOneDay ? 'disabled' : 'blueback'} ${day.format('ddd').toUpperCase() === 'SAT' || day.format('ddd').toUpperCase() === 'SUN' ? 'greyback' : ''}`}>
          <p className={`text-sm mt-1 ${day.format('ddd').toUpperCase() === 'SAT' || day.format('ddd').toUpperCase() === 'SUN' ? 'greyback' : ''}`} >
            {day.format('ddd').toUpperCase()}
          </p>
          
        </header>
      )}
      <p className={`text-sm p-1 my-1 text-right ${getCurrentDayClass()} `}>{day.format('DD')}</p>
      <div
        className={`flex-1 cursor-pointer ${isAfterJPlusOneDay && !isSunday && !isSaturday ? 'other-disabled' : ''} ${isAfterJPlusOneDay ? 'disabled' : ''} ${isSunday ? 'disabled' : ''}`}
        onClick={() => {
          if (!isSunday && !isAfterJPlusOneDay) {
            setDaySelected(day.toDate());
            setShowEventModal(true);
          }
        }}
      >
        {dayEvents.map((event,idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(event)}
            className={`bg-${event.label}-300 p-1 mr-3 text-${event.label}-700 text-sm rounded mb-1 truncate`}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',margin:2  }}
          >
           <span>{event.title}</span>
           <span>{event.numberValue}</span>
           
          </div>
        ))}
        {holidayName && (
          <div
            className="bg-yellow-500 p-1 pr-2 pl-2 text-white text-sm rounded mb-1"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 2,
              wordBreak: 'break-word', // Allow long words to break
            }}
            onClick={() => console.log("Holiday clicked:", holidayName)} // Optional: Add click action
          >
            {holidayName}
          </div>
        )}
      </div>
    </div>
  );
}