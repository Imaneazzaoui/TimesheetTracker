import dayjs from 'dayjs';

function getMonth(year: number, monthIndex: number) {
  const firstDayOfMonth = dayjs().year(year).month(monthIndex).date(1);
  const daysInMonth = firstDayOfMonth.daysInMonth();

  const monthArray = [];
  let currentDay = firstDayOfMonth.startOf('week').add(1, 'day'); 

  for (let i = 0; i < 5; i++) { 
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (currentDay.month() === monthIndex) {
        week.push(currentDay);
      } else {
        week.push(null);
      }
      currentDay = currentDay.add(1, 'day');
    }
    monthArray.push(week);
  }

  return monthArray;
}

export default getMonth;