import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function RevenueDonutChart() {
  const revenueData = [
    { label: 'Net YouTube Revenue', value: '$58,062.21', color: '#7dd3fc', percentage: 48 },
    { label: 'Net UGC, Rights Mgmt.', value: '$20,984.00', color: '#ef4444', percentage: 17 },
    { label: 'Branded Revenue', value: '$10,940.34', color: '#f97316', percentage: 9 },
    { label: 'Reserved Media Revenue', value: '$30,094.22', color: '#22c55e', percentage: 25 },
  ];

  const data = {
    labels: revenueData.map(item => item.label),
    datasets: [
      {
        data: revenueData.map(item => item.percentage),
        backgroundColor: revenueData.map(item => item.color),
        borderWidth: 0,
        borderRadius: 2,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: -90,
    circumference: 180,
    cutout: '80%',
    interaction: {
      intersect: false,
      mode: 'index'
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        position: 'nearest',
        xAlign: 'center',
        yAlign: 'bottom',
        backgroundColor: '#616161E5',
        padding: 12,
        titleFont: {
          size: 12,
          weight: 'normal'
        },
        bodyFont: {
          size: 12
        },
        displayColors: true,
        callbacks: {
          title: function(context) {
            return context[0].label || '';
          },
          label: function(context) {
            const value = revenueData[context.dataIndex]?.value || '';
            return value;
          }
        }
      }
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 h-auto md:h-[200px]'>
      <div className="rounded-2xl flex-1 p-3 md:p-4 flex flex-col min-h-[160px] md:min-h-0">
        <div className="flex items-center justify-center flex-1">
          <div className="relative w-full h-[120px] md:h-[140px]">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center pt-6 md:pt-8 mt-1 pointer-events-none">
              <div className="text-center">
                <p className="text-[8px] md:text-[10px] text-gray-500">TOTAL EARNINGS</p>
                <p className="text-[18px] md:text-[24px] font-[Poppins] font-[600] text-dark">$2,503,487.23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-sm p-3 md:p-4 h-auto md:h-[180px] flex flex-col justify-center">
        {revenueData.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between py-1.5 md:py-2">
              <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                <span className="text-[12px] md:text-[14px] font-[400] text-[#20272E] truncate">{item.label}</span>
              </div>
              <span className="text-[12px] md:text-[14px] font-[400] text-[#20272E] flex-shrink-0 ml-2">{item.value}</span>
            </div>
            {index < revenueData.length - 1 && (
              <div className="border-t border-[#0000001F]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RevenueDonutChart;
