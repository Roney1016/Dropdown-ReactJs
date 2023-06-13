import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isHovered, setIsHovered] = useState(false);

  const handleOptionSelect = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(option => option.value === selectedValue);
    setSelectedOption(selectedOption);
    onSelect(selectedOption);
  };

  const handleButtonHover = () => {
    setIsHovered(true);
  };

  const handleButtonLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="row justify-content-center mt-4 mb-4">
      <div className="col-md-4">
        <div onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>
          <div className="row justify-content-center mt-2">
            <div className="col-md-5">
            <button className='btn btn-danger mb-4  btn-lg'>{selectedOption.label}</button>
            </div>
          </div>
         
          {isHovered && (
            <select value={selectedOption.value} onChange={handleOptionSelect} className="form-select form-select-lg">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </div>

  );
};

export default Dropdown;
