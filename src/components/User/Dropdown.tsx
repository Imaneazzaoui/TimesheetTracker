import React, { useState } from 'react';
import './Dropdown.css';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  options: Option[];
}

const DropdownComponent: React.FC<DropdownProps> = ({ label, options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2 ">
      <select
        id="select"
        className="border rounded p-1 selectItem"
        value={selectedOption}
        onChange={handleOptionChange}
        style={{ width: '500px', height: '50px' }}
      >
        <option value="" disabled>
          {label || 'Select'}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
