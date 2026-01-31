import React, { useState, useEffect, useRef } from 'react';
import { CalendarIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { Select } from '@material-tailwind/react';

function EarningsHeader() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('July 2025');
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState('July');
  const mobileCalendarRef = useRef(null);
  const desktopCalendarRef = useRef(null);
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const handleMonthSelect = (month) => {
    const monthIndex = months.indexOf(month);
    const fullMonth = fullMonths[monthIndex];
    setSelectedDate(`${fullMonth} ${currentYear}`);
    setCurrentMonth(fullMonth);
    setShowDatePicker(false);
  };
  
  const handlePrevYear = () => {
    setCurrentYear(currentYear - 1);
  };
  
  const handleNextYear = () => {
    setCurrentYear(currentYear + 1);
  };
  
  const getCurrentMonthAbbr = () => {
    const monthIndex = fullMonths.indexOf(currentMonth);
    return months[monthIndex] || 'Jul';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isInsideMobile = mobileCalendarRef.current?.contains(event.target);
      const isInsideDesktop = desktopCalendarRef.current?.contains(event.target);
      
      if (!isInsideMobile && !isInsideDesktop) {
        setShowDatePicker(false);
      }
    };

    if (showDatePicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDatePicker]);

  return (
    <header className="bg-white px-3 md:px-6 py-4 shadow-sm">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-4">
        <h1 className="text-xl font-[500] font-[Poppins] text-dark">Earnings</h1>
        <div className="flex flex-row sm:flex-col gap-3">
          <div className="relative" ref={mobileCalendarRef}>
            {/* FLOATING LABEL */}
            <span className="absolute -top-2 left-4 bg-white px-2 text-[12px] text-[#20272E99] z-10">
              Date range
            </span>

            {/* TRIGGER */}
            <button
              onClick={() => setShowDatePicker((p) => !p)}
              className="relative flex w-full items-center justify-between gap-2 rounded-md border border-gray-300 px-4 py-2.5 text-[16px] text-[#20272E] bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-gray-500" />
                <span>{selectedDate}</span>
              </div>
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </button>

            {/* DROPDOWN - Mobile */}
            {showDatePicker && (
              <div className="absolute left-0 mt-2 w-[280px] rounded-sm border border-[#0000001F] bg-white p-4 shadow-lg z-50">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-[16px] font-[500] text-[#20272E]">
                      {currentYear}
                    </span>
                    <button
                      onClick={() => setCurrentYear((y) => y + 1)}
                      className="w-6 h-6 flex items-center justify-center hover:bg-gray-100"
                    >
                      <ChevronDownIcon className="w-4 h-4 font-bold" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setCurrentYear((y) => y - 1)}
                      className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-gray-100"
                    >
                      <ChevronLeftIcon className="w-4 h-4 font-bold" />
                    </button>
                    <button
                      onClick={() => setCurrentYear((y) => y + 1)}
                      className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-gray-100"
                    >
                      <ChevronRightIcon className="w-4 h-4 font-bold" />
                    </button>
                  </div>
                </div>

                {/* MONTH GRID */}
                <div className="grid grid-cols-4 gap-2">
                  {months.map((month) => {
                    const isSelected =
                      currentMonth === month &&
                      selectedDate.includes(currentYear);

                    return (
                      <button
                        key={month}
                        onClick={() => handleMonthSelect(month)}
                        className={`rounded-full px-3 py-2 text-[14px] transition-colors
                          ${
                            isSelected
                              ? "bg-primary text-white"
                              : "text-[#20272E] hover:bg-primary hover:text-white"
                          }`}
                      >
                        {month}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          <button className="flex flex-col items-center justify-center gap-2 px-4 py-2.5 bg-white text-primary border border-primary text-[14px] font-[400] rounded-md focus:outline-none">
            <ArrowDownTrayIcon className=" w-4 h-4 text-primary" />
            <span className="lowercase white text-primary 
             w-[204px] whitespace-nowrap">csv</span>
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Earnings</h1>
        <div className="flex items-center gap-4">
          <div className="relative w-[204px]" ref={desktopCalendarRef}>
            {/* FLOATING LABEL */}
            <span className="absolute -top-2 left-4 bg-white px-2 text-[12px] text-[#20272E99] z-10 bg-transparent">
              Date Range
            </span>

            {/* TRIGGER */}
            <button
              onClick={() => setShowDatePicker((p) => !p)}
              className="relative flex w-full items-center justify-between gap-2 rounded-sm border border-gray px-4 py-1.5 text-[16px] text-[#20272E] bg-white hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-[#20272E]" />
                <span>{selectedDate}</span>
              </div>
              <ChevronDownIcon className="w-4 h-4 text-[#20272E]" />
            </button>

            {/* DROPDOWN - Desktop */}
            {showDatePicker && (
              <div className="absolute right-0 mt-2 w-[280px] rounded-sm border border-[#0000001F] bg-white p-4 shadow-lg z-50">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-[16px] font-[500] text-[#20272E]">
                      {currentYear}
                    </span>
                    <button
                      onClick={() => setCurrentYear((y) => y + 1)}
                      className="w-6 h-6 flex items-center justify-center hover:bg-gray-100"
                    >
                      <ChevronDownIcon className="w-4 h-4 font-bold" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setCurrentYear((y) => y - 1)}
                      className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-gray-100"
                    >
                      <ChevronLeftIcon className="w-4 h-4 font-bold" />
                    </button>
                    <button
                      onClick={() => setCurrentYear((y) => y + 1)}
                      className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-gray-100"
                    >
                      <ChevronRightIcon className="w-4 h-4 font-bold" />
                    </button>
                  </div>
                </div>

                {/* MONTH GRID */}
                <div className="grid grid-cols-4 gap-2">
                  {months.map((month) => {
                    const isSelected =
                      currentMonth === month &&
                      selectedDate.includes(currentYear);

                    return (
                      <button
                        key={month}
                        onClick={() => handleMonthSelect(month)}
                        className={`rounded-full px-3 py-2 text-[14px] transition-colors
                          ${
                            isSelected
                              ? "bg-primary text-white"
                              : "text-[#20272E] hover:bg-primary hover:text-white"
                          }`}
                      >
                        {month}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <button className="px-4 py-2 bg-white text-primary border border-primary text-[14px] font-[400] rounded-sm focus:outline-none w-[204px] whitespace-nowrap">
            DOWNLOAD CSV
          </button>
        </div>
      </div>
    </header>
  );
}

export default EarningsHeader;
