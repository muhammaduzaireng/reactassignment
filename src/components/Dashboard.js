import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('line-details');

  return (
    <> <Header isEarningsPage={false} />
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0 bg-[#0A2AE714] ">
       
        <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
    </>
  );
}

export default Dashboard;
