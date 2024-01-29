import React, { useState } from 'react';

interface TextInputProps {
  placeholder?: string; // Define a prop for placeholder text
}

const TextInputComponent: React.FC<TextInputProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        id="input"
        className="border rounded p-1"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder} // Use the provided placeholder
        style={{
          width: '500px',
          height: '50px',
        }}
      />
    </div>
  );
};

export default TextInputComponent;
