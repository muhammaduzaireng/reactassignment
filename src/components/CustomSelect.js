import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function CustomSelect({ options, placeholder, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || placeholder || options[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="pl-4 pr-10 py-2 border border-gray rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer w-full text-left flex items-center justify-between min-w-[120px] hover:border-primary transition-colors"
      >
        <span className="text-sm text-gray-700 truncate">{selectedValue}</span>
        <ChevronDownIcon 
          className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray rounded-sm shadow-xl max-h-60 overflow-auto">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#0A2AE714] transition-colors first:rounded-t-lg last:rounded-b-lg ${
                selectedValue === option ? 'bg-[#0A2AE714] text-primary font-medium' : 'text-gray-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
