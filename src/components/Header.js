import React, { useState } from 'react';
import { Select, Option } from '@material-tailwind/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import profile from '../assets/avater.png';

function Header({ isEarningsPage = false, onMenuClick }) {
  const [selectedDate, setSelectedDate] = useState('July 2023');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  
  const dateOptions = [];
  years.forEach(year => {
    months.forEach(month => {
      dateOptions.push(`${month} ${year}`);
    });
  });

  return (
    <header className="bg-primary text-white px-6 py-3 h-[64px] flex items-center justify-between shadow-md">
      {isEarningsPage ? (
        // Earnings page: Show only hamburger menu (mobile only)
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-white/20 focus:outline-none"
          aria-label="Open menu"
        >
          <Bars3Icon className="w-6 h-6 text-white" />
        </button>
      ) : (
        // Dashboard page: Show calendar and avatar
        <>
          <div className="flex items-center">
            <Select
              value={selectedDate}
              onChange={(val) => setSelectedDate(val)}
              className="!bg-light !w-52 !h-[40px] !text-[#20272E] !text-[16px] !font-[400] !border-none"
              containerProps={{
                className: "!min-w-[208px]",
              }}
              labelProps={{
                className: "hidden",
              }}
              menuProps={{
                className: "rounded-sm border border-gray shadow-lg !bg-light",
              }}
            >
              {dateOptions.map((date) => (
                <Option key={date} value={date} className="!text-[16px] !font-[400] !text-[#20272E]">
                  {date}
                </Option>
              ))}
            </Select>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white overflow-hidden border-2 border-white shadow-sm">
              <img 
                src={profile} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
