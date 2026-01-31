import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { CircleAlert } from 'lucide-react';

function LineDetailsTable() {
  const tableData = Array(6).fill(null).map((_, index) => ({
    id: index + 1,
    advertisor: 'Hepmil',
    lineItem: 'Lactezin 15s (Male)',
    order: 'Hepmil/PH/2022/De...',
    group: '-',
    ytChannelIdKepid: 'UChMoFQr8tEisoGXOh...',
    ytChannelId: 'slytheminer',
    rate: '3.5',
    impressions: '5,021'
  }));

  return (
    <div className="bg-white rounded-sm overflow-hidden border border-gray">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray border-gray h-[40px] w-full">
            <tr>
                <th></th>
              <th className="px-2 py-2 text-left text-dark font-[500] font-[Poppins] text-[12px]  h-[18px] uppercase tracking-wider whitespace-nowrap border-r border-[#0000001F]">
                ADVERTISOR
              </th>
              <th className="px-2 py-2 text-left text-dark font-[500] font-[Poppins] text-[12px]  h-[18px] uppercase tracking-wider whitespace-nowrap">
                LINE ITEM
              </th>
              <th className="px-2 py-2 text-left text-dark font-[500] font-[Poppins] text-[12px]  h-[18px] uppercase tracking-wider whitespace-nowrap">
                ORDER
              </th>
              <th className="px-2 py-2 text-left text-dark font-[500] font-[Poppins] text-[12px]  h-[18px] uppercase tracking-wider whitespace-nowrap">
                GROUP
              </th>
              <th className="px-2 py-2 text-left text-dark font-[500] font-[Poppins] text-[12px]  h-[18px] uppercase tracking-wider whitespace-nowrap">
                YT CHANNEL ID (KEPID)
              </th>
              <th className="px-2 py-2 text-left text-dark font-[500] font-[Poppins] text-[12px]  h-[18px] uppercase tracking-wider whitespace-nowrap">
                YT CHANNEL ID
              </th>
              <th className="px-2 py-2 text-left text-dark font-[500] font-[Poppins] text-[12px]  h-[18px] uppercase tracking-wider whitespace-nowrap">
                RATE (US$)
              </th>
              <th className="px-2 py-2 text-left text-dark font-[500] font-[Poppins] text-[12px]  h-[18px] uppercase tracking-wider whitespace-nowrap">
                IMPRESSIONS
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tableData.map((row) => (
              <tr key={row.id} className="hover:bg-[#0A2AE714] transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center justify-center">
                  <CircleAlert className='w-4 h-4 text-red-500'/>
                  </div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-[12px] text-dark font-[400] font-[Poppins] border-r border-[#0000001F]">
                  {row.advertisor}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-[12px] text-dark font-[400] font-[Poppins]">
                  {row.lineItem}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-[12px] text-dark font-[400] font-[Poppins]">
                  {row.order}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-[12px] text-dark font-[400] font-[Poppins]">
                  {row.group}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-[12px] text-dark font-[400] font-[Poppins]">
                  {row.ytChannelIdKepid}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-[12px] text-dark font-[400] font-[Poppins]">
                  {row.ytChannelId}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-[12px] text-dark font-[400] font-[Poppins]">
                  {row.rate}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-[12px] text-dark font-[400] font-[Poppins]">
                  {row.impressions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LineDetailsTable;
