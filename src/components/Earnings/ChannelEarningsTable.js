import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import avaterImage from '../../assets/avater.png';

function ChannelEarningsTable() {
  const tableData = [
    {
      id: 1,
      channel: '{Channel name 1}',
      channelId: 'UCilwZiBBfI9X6yiZRzWty8Q',
      netYouTube: '9,551.00',
      netUDC: '7,599.00',
      branded: '6,163.00',
      reserved: '4,040.00',
      total: '27,353.00',
      checked: true
    },
    {
      id: 2,
      channel: '{Channel name 2}',
      channelId: 'UCilwZiBBfI9X6yiZRzWty8Q',
      netYouTube: '764.00',
      netUDC: '3,317.00',
      branded: '4,345.00',
      reserved: '3,435.00',
      total: '11,861.00',
      checked: false
    },
    {
      id: 3,
      channel: '{Channel name 3}',
      channelId: 'UCilwZiBBfI9X6yiZRzWty8Q',
      netYouTube: '5,784.00',
      netUDC: '1,791.00',
      branded: '6,330.00',
      reserved: '9,280.00',
      total: '23,185.00',
      checked: false
    },
    {
      id: 4,
      channel: '{Channel name 4}',
      channelId: 'UCilwZiBBfI9X6yiZRzWty8Q',
      netYouTube: '3,039.00',
      netUDC: '5,125.00',
      branded: '8,815.00',
      reserved: '2,633.00',
      total: '19,612.00',
      checked: false
    },
    {
      id: 5,
      channel: '{Channel name 5}',
      channelId: 'UCilwZiBBfI9X6yiZRzWty8Q',
      netYouTube: '1,939.00',
      netUDC: '2,808.00',
      branded: '6,519.00',
      reserved: '2,154.00',
      total: '13,420.00',
      checked: false
    },
    {
      id: 6,
      channel: '{Channel name 6}',
      channelId: 'UCilwZiBBfI9X6yiZRzWty8Q',
      netYouTube: '8,275.00',
      netUDC: '3,564.00',
      branded: '5,772.00',
      reserved: '9,247.00',
      total: '26,858.00',
      checked: false
    },
  ];

  return (
    <div className="bg-white rounded-sm overflow-hidden border border-gray">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray border-gray h-[88px] w-full">
            <tr>
              <th className="px-1 md:px-2 py-2 text-left text-dark font-[500] font-[Poppins] text-[10px] md:text-[12px] h-[18px] uppercase tracking-wider whitespace-nowrap border-b border-[#0000001F]">
                <input type="checkbox" className="rounded border-gray-300" defaultChecked={true} />
              </th>
              <th className="px-1 md:px-2 py-2 text-left text-dark font-[500] min-w-[200px] md:w-[264px] font-[Poppins] text-[10px] md:text-[12px] h-[18px] uppercase tracking-wider whitespace-nowrap border-b border-[#0000001F]">
                CHANNEL
              </th>
              <th className="px-1 md:px-2 py-2 text-left text-dark font-[500] min-w-[80px] md:w-[88px] font-[Poppins] text-[10px] md:text-[12px] h-[18px] uppercase tracking-wider whitespace-nowrap border-b border-[#0000001F]">
                <span className="hidden md:inline">NET YOUTUBE REVENUE (US$)</span>
                <span className="md:hidden">NET YT (US$)</span>
              </th>
              <th className="px-1 md:px-2 py-2 text-left text-dark font-[500] min-w-[80px] md:w-[88px] font-[Poppins] text-[10px] md:text-[12px] h-[18px] uppercase tracking-wider whitespace-nowrap border-b border-[#0000001F]">
                <span className="hidden md:inline">NET UGC, RIGHTS MANAGEMENT (US$)</span>
                <span className="md:hidden">NET UGC (US$)</span>
              </th>
              <th className="px-1 md:px-2 py-2 text-left text-dark font-[500] min-w-[80px] md:w-[88px] font-[Poppins] text-[10px] md:text-[12px] h-[18px] uppercase tracking-wider whitespace-nowrap border-b border-[#0000001F]">
                <span className="hidden md:inline">BRANDED REVENUE (US$)</span>
                <span className="md:hidden">BRANDED (US$)</span>
              </th>
              <th className="px-1 md:px-2 py-2 text-left text-dark font-[500] min-w-[80px] md:w-[88px] font-[Poppins] text-[10px] md:text-[12px] h-[18px] uppercase tracking-wider whitespace-nowrap border-b border-[#0000001F]">
                <span className="hidden md:inline">RESERVED MEDIA REVENUE (US$)</span>
                <span className="md:hidden">RESERVED (US$)</span>
              </th>
              <th className="px-1 md:px-2 py-2 text-left text-dark font-[500] min-w-[80px] md:w-[88px] font-[Poppins] text-[10px] md:text-[12px] h-[18px] uppercase tracking-wider whitespace-nowrap border-b border-[#0000001F]">
                <span className="hidden md:inline">TOTAL EARNINGS (US$)</span>
                <span className="md:hidden">TOTAL (US$)</span>
              </th>
              <th className="px-1 md:px-2 py-2 text-left text-dark font-[500] font-[Poppins] text-[10px] md:text-[12px] h-[18px] uppercase tracking-wider whitespace-nowrap border-b border-[#0000001F]"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tableData.map((row) => (
              <tr key={row.id} className="hover:bg-[#0A2AE714] transition-colors border-b border-[#20272E]">
                <td className="px-2 whitespace-nowrap border-b border-[#0000001F]">
                  <input type="checkbox" className="rounded border-gray-300" defaultChecked={row.checked} />
                </td>
                <td className="px-2 whitespace-nowrap text-[12px] text-dark font-[400] font-[Poppins] border-b border-[#0000001F]">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <img 
                      src={avaterImage} 
                      alt={row.channel} 
                      className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-[11px] md:text-[12px] text-dark font-[400] font-[Poppins] truncate">{row.channel}</div>
                      <div className="text-[10px] md:text-[12px] text-[#20272E99] font-[400] font-[Poppins] truncate">{row.channelId}</div>
                    </div>
                  </div>
                </td>
                <td className="px-1 md:px-2 whitespace-nowrap text-[11px] md:text-[12px] text-dark font-[400] font-[Poppins] border-b border-[#0000001F]">
                  {row.netYouTube}
                </td>
                <td className="px-1 md:px-2 whitespace-nowrap text-[11px] md:text-[12px] text-dark font-[400] font-[Poppins] border-b border-[#0000001F]">
                  {row.netUDC}
                </td>
                <td className="px-1 md:px-2 whitespace-nowrap text-[11px] md:text-[12px] text-dark font-[400] font-[Poppins] border-b border-[#0000001F]">
                  {row.branded}
                </td>
                <td className="px-1 md:px-2 whitespace-nowrap text-[11px] md:text-[12px] text-dark font-[400] font-[Poppins] border-b border-[#0000001F]">
                  {row.reserved}
                </td>
                <td className="px-1 md:px-2 whitespace-nowrap text-[11px] md:text-[12px] text-dark font-[400] border-b border-[#0000001F] font-[Poppins]">
                  <div className="flex items-center gap-1 md:gap-2">
                    <span className="text-[11px] md:text-[12px] text-dark font-[400] font-[Poppins]">{row.total}</span>
                  </div>
                </td>
                <td className="px-1 md:px-2 whitespace-nowrap border-b border-[#0000001F]">
                  <ChevronRightIcon className="w-3 h-3 md:w-4 md:h-4 text-dark" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChannelEarningsTable;
