import React from 'react';
import { 
  FunnelIcon, 
  MagnifyingGlassIcon, 
  ArrowPathIcon,
  ViewColumnsIcon,
  ListBulletIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Select, Option } from '@material-tailwind/react';
import LineDetailsTable from './LineDetailsTable';

function MainContent({ activeTab, setActiveTab }) {
  const tabs = [
    { label: 'LINE DETAILS', value: 'line-details' },
    { label: 'SUMMARY', value: 'summary' },
    { label: 'MODIFICATION LOGS', value: 'modification-logs' },
  ];

  return (
    <main className="flex-1/4 overflow-y-auto bg-white m-6">
      {/* Title Section */}
      <div className="pb-4">
        <div className="flex items-center gap-3 px-6 pt-6 pb-4">
          <h5 className="text-[24px] font-[400] font-[Poppins] text-[#20272E]">Paid Media Earnings</h5>
          <span className="px-3 py-1 bg-white text-success border border-success text-[12px] w-[134px] h-[30px] font-[600] font-[Poppins] rounded-md flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4" />
            PROCESSED
          </span>
        </div>

        {/* Tabs */}
        <div className="w-full border-b border-[#0000001F]">
          <div className="flex px-6">
            {tabs.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveTab(value)}
                className={`px-6 py-2 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === value
                    ? 'text-primary border-primary bg-[#0A2AE714]'
                    : 'text-[#20272E] border-transparent hover:text-primary hover:bg-[#0A2AE714]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex items-center justify-between gap-4 py-4 px-6 flex-nowrap">
        <div className="flex items-center gap-3 flex-nowrap flex-shrink-0">
          <Select
            label=""
            value="Order title"
            className="!min-w-[140px] !rounded-full !border-gray !bg-white !text-[13px] !font-[Poppins] !font-[400]"
            containerProps={{
              className: "!min-w-[140px]",
            }}
            labelProps={{
              className: "hidden",
            }}
            menuProps={{
              className: "rounded-sm border border-gray shadow-lg !text-[13px] !font-[Poppins] !font-[400]",
            }}
          >
            <Option value="Order title" className="!text-[13px] !font-[Poppins] !font-[400]">Order title</Option>
            <Option value="Order 1" className="!text-[13px] !font-[Poppins] !font-[400]">Order 1</Option>
            <Option value="Order 2" className="!text-[13px] !font-[Poppins] !font-[400]">Order 2</Option>
          </Select>
          <Select
            label=""
            value="KPE ID"
            className="!min-w-[140px] !rounded-full !border-gray !bg-white !text-[13px] !font-[Poppins] !font-[400]"
            containerProps={{
              className: "!min-w-[140px]",
            }}
            labelProps={{
              className: "hidden",
            }}
            menuProps={{
              className: "rounded-sm border border-gray shadow-lg !text-[13px] !font-[Poppins] !font-[400]",
            }}
          >
            <Option value="KPE ID" className="!text-[13px] !font-[Poppins] !font-[400]">KPE ID</Option>
            <Option value="KPE 001" className="!text-[13px] !font-[Poppins] !font-[400]">KPE 001</Option>
            <Option value="KPE 002" className="!text-[13px] !font-[Poppins] !font-[400]">KPE 002</Option>
          </Select>
          <Select
            label=""
            value="Type"
            className="!min-w-[140px] !rounded-full !border-gray !bg-white !text-[13px] !font-[Poppins] !font-[400]"
            containerProps={{
              className: "!min-w-[140px]",
            }}
            labelProps={{
              className: "hidden",
            }}
            menuProps={{
              className: "rounded-sm border border-gray shadow-lg !text-[13px] !font-[Poppins] !font-[400]",
            }}
          >
            <Option value="Type" className="!text-[13px] !font-[Poppins] !font-[400]">Type</Option>
            <Option value="Type 1" className="!text-[13px] !font-[Poppins] !font-[400]">Type 1</Option>
            <Option value="Type 2" className="!text-[13px] !font-[Poppins] !font-[400]">Type 2</Option>
          </Select>
          <Select
            label=""
            value="Message"
            className="!min-w-[140px] !rounded-full !border-gray !bg-white !text-[13px] !font-[Poppins] !font-[400]"
            containerProps={{
              className: "!min-w-[140px]",
            }}
            labelProps={{
              className: "hidden",
            }}
            menuProps={{
              className: "rounded-sm border border-gray shadow-lg !text-[13px] !font-[Poppins] !font-[400]",
            }}
          >
            <Option value="Message" className="!text-[13px] !font-[Poppins] !font-[400]">Message</Option>
            <Option value="Message 1" className="!text-[13px] !font-[Poppins] !font-[400]">Message 1</Option>
            <Option value="Message 2" className="!text-[13px] !font-[Poppins] !font-[400]">Message 2</Option>
          </Select>
          <span className="text-[10px] text-[#20272E99] font-medium whitespace-nowrap">1,000 Total Records</span>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className='flex items-center gap-1 text-primary'>
            <button className="p-2 rounded-sm transition-colors" title="Grid view">
              <ViewColumnsIcon className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-sm transition-colors" title="List view">
              <ListBulletIcon className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-sm transition-colors" title="Filter">
              <FunnelIcon className="w-5 h-5" />
            </button>
            </div>
            <div className='flex items-center gap-1 text-primary'>
            <button className="border border-transparent hover:border hover:border-primary rounded-sm transition-colors w-[52px] h-[30px] flex items-center justify-center" title="Search">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            <button className="border border-transparent hover:border hover:border-primary rounded-sm transition-colors w-[52px] h-[30px] flex items-center justify-center" title="Refresh">
              <ArrowPathIcon className="w-5 h-5" />
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 pb-6">
        {activeTab === 'line-details' && <LineDetailsTable />}
        {activeTab === 'summary' && (
          <div className="text-center py-12 text-gray-500">Summary content coming soon</div>
        )}
        {activeTab === 'modification-logs' && (
          <div className="text-center py-12 text-gray-500">Modification logs content coming soon</div>
        )}
      </div>
    </main>
  );
}

export default MainContent;
