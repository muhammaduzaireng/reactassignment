import React, { useState } from 'react';
import EarningsSidebar from './Earnings/EarningsSidebar';
import EarningsHeader from './Earnings/EarningsHeader';
import EarningsMetrics from './Earnings/EarningsMetrics';
import EarningsBreakdown from './Earnings/EarningsBreakdown';
import RevenueDonutChart from './Earnings/RevenueDonutChart';
import NetYouTubeRevenueChart from './Earnings/NetYouTubeRevenueChart';
import ChannelEarningsTable from './Earnings/ChannelEarningsTable';
import TopBanner from './Earnings/TopBanner';
import Header from './Header';

function Earnings() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <> 
      <Header isEarningsPage={true} onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-col bg-[#0A2AE714] h-screen overflow-hidden">
        <TopBanner />
        <div className="flex flex-1 overflow-hidden relative">
          {/* Mobile Overlay */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
          
          {/* Sidebar */}
          <div className={`
            fixed lg:static inset-0 lg:inset-y-0 lg:left-0 z-50
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}>
            <EarningsSidebar onClose={() => setIsSidebarOpen(false)} />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden min-w-0 bg-[#0A2AE714]">
            <main className="flex flex-col gap-2 overflow-y-auto bg-gray-50 p-3 md:p-6">
              <EarningsHeader />
              <EarningsMetrics />
              <EarningsBreakdown />
              <RevenueDonutChart />
              <div className="rounded-sm bg-white p-2 md:p-4">
                <NetYouTubeRevenueChart />
                <ChannelEarningsTable />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Earnings;
