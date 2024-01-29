import React, {useContext} from 'react';
import GlobalContext from '../../context/GlobalContext';
import dayjs from 'dayjs';

export default function CalendarHeader() {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext)

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(dayjs().month());
  }

  return (
    <header className='px-4 py-2 flex items-center'>
      <button className='border rounded py-2 px-4 mr-5' onClick={handleReset}>
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          chevron_right
        </span>
      </button>
      
      <div className='flex-grow flex' style={{ position: 'absolute', right: 500 }}>
        <h2 className='text-xl text-gray-500 font-bold'>
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </div>
      
    </header>
  );
}