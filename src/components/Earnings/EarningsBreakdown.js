import React from 'react';

function EarningsBreakdown() {
  const earnings = [
    {
      label: 'BENT PIXELS EARNINGS',
      value: '$100,099'
    },
    {
      label: 'YOUTUBE ADSENSE EARNINGS',
      value: '$17,894'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
      {earnings.map((earning, index) => (
        <div key={index} className="bg-white rounded-sm p-3 md:p-4">
          <p className="text-[10px] md:text-xs text-gray-500 mb-2">{earning.label}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl md:text-2xl font-bold text-gray-900">{earning.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EarningsBreakdown;
