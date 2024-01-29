import React from 'react';
import '../../index.css';
import Day from './Day';
import dayjs, { Dayjs } from 'dayjs';

interface MonthProps {
  month: any[][];
  holidays: { name: string; date: string; }[];
}

export default function Month({ month, holidays }: MonthProps) {
  return (
    <div className='months-container flex-1 grid grid-cols-7 grid-rows-5'>
      {month.map((row: any[], i: React.Key | null | undefined) => (
        <React.Fragment key={i}>
          {row.map((day: any, idx: React.Key | null | undefined) => (
            <Day day={day} key={idx} rowIdx={i} jPlusOneDay={dayjs().add(0, 'day')} holidays={holidays} /> 
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
