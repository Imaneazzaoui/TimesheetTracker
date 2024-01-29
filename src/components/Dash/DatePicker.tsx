import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker';

export default function DatePicker() {
    const [datevalue, setValue] = useState({ 
        startDate: new Date(), 
        endDate: new Date(),
        }); 
        
        const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
        } 
  return (

    <div style={{ width: '300px', border: '1px solid #ccc', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', borderRadius: '5px' }}>
          <Datepicker
              toggleClassName="absolute bg-[#364574] rounded-r text-white right-0 h-full px-3 text-gray-400 "
              separator={"to"}
              value={datevalue}
              onChange={handleValueChange} 
              />
      </div>
      
  )
}

