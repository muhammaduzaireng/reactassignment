import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

function EarningsMetrics() {
  const metrics = [
    {
      label: 'NEXT PAYDAY IS MARCH 26',
      value: '$2,587.23',
      change: '+34.6%',
      hasChange: true
    },
    {
      label: 'LAST PAYDAY WAS MAY 26',
      value: '$1,924.82',
      change: null,
      hasChange: false
    },
    {
      label: 'TOTAL EARNINGS THIS YEAR',
      value: '$100,099',
      change: '+34.6%',
      hasChange: true
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="p-3 md:p-4">
          <p className="font-poppins text-[10px] md:text-xs text-[#20272E99] font-[400] leading-none tracking-wider uppercase">{metric.label}</p>
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-poppins text-[18px] md:text-[20px] font-[500] leading-[160%] tracking-[0.15px] text-[#20272E]">{metric.value}</span>
            {metric.hasChange && metric.change && (
              <span className="flex items-center gap-1 text-xs md:text-sm font-medium text-success border border-success rounded-sm px-2 py-1">
                {metric.change}
                <ArrowUpIcon className="w-3 h-3 md:w-4 md:h-4 rotate-[30deg]" />
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EarningsMetrics;
