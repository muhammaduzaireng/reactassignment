import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  UserIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
  PowerIcon,
  ChevronRightIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

function EarningsSidebar({ onClose }) {
  const location = useLocation();
  
  const menuItems = [
    { icon: HomeIcon, label: 'Home', path: '/', active: location.pathname === '/', hasArrow: false },
    { icon: CurrencyDollarIcon, label: 'Earnings', path: '/earnings', active: location.pathname === '/earnings', hasArrow: true },
    { icon: ChartBarIcon, label: 'Creator Pay', path: '/', active: false, hasArrow: false },
    { icon: UserIcon, label: 'Profile', path: '/', active: false, hasArrow: false },
    { icon: Squares2X2Icon, label: 'Apps', path: '/', active: false, hasArrow: false },
    { icon: Cog6ToothIcon, label: 'Settings', path: '/', active: false, hasArrow: false },
    { icon: PowerIcon, label: 'Logout', path: '/', active: false, hasArrow: false },
  ];

  return (
    <aside className="w-full lg:w-64 h-screen lg:h-full flex flex-col lg:bg-[#0A2AE714] lg:shadow-lg lg:m-4 lg:rounded-sm">
      {/* Blue Navigation Section - Mobile */}
      <div className="lg:hidden flex-[2] bg-primary flex flex-col">
        {/* Close Button */}
        <div className="flex justify-start p-4 pt-6">
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-white/20 focus:outline-none"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        
        {/* Navigation Menu Items */}
        <nav className="flex-1 px-4 pb-4 overflow-y-auto">
          <ul className="space-y-0">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`w-full h-[56px] flex items-center justify-between px-4 py-3 rounded-[4px] transition-colors text-left ${
                      item.active
                        ? 'bg-white/20 text-white'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center">
                      <Icon className="w-5 h-5 mr-3 text-white" />
                      <span className="text-[14px] font-[400] text-white">{item.label}</span>
                    </div>
                    {item.hasArrow && (
                      <ChevronRightIcon className="w-4 h-4 text-white" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex lg:p-4 lg:bg-white">
        <ul className="space-y-0">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`w-[216px] h-[56px] flex items-center justify-between px-4 py-3 rounded-[4px] transition-colors text-left ${
                    item.active
                      ? 'bg-[#0A2AE714] text-primary w-[200px] h-[48px]'
                      : 'text-[#20272E] hover:bg-[#0A2AE714]'
                  }`}
                >
                  <div className="flex items-center">
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="text-[14px] font-[400]">{item.label}</span>
                  </div>
                  {item.hasArrow && (
                    <ChevronRightIcon className="w-4 h-4" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* White Contact Section */}
      <div className="lg:hidden flex-1 bg-white border-t border-[#0000001F] p-4 overflow-y-auto">
        <div className="mb-3">
          <h3 className="text-[12px] font-[500] text-[#6b7280] uppercase tracking-wider mb-2">
            TALENT MANAGER
          </h3>
          <div className="space-y-1 text-[14px]">
            <p className="font-[500] text-dark">Adam Hunter</p>
            <div className="text-[12px] text-[#6b7280] uppercase mb-1">EMAIL</div>
            <p className="text-dark">adam.hunter@email.com</p>
            <div className="text-[12px] text-[#6b7280] uppercase mb-1">PHONE</div>
            <p className="text-dark">+1 555 7932</p>
            <div className="flex items-center gap-1 text-dark">
              <span className="text-[12px] text-[#6b7280] uppercase">DISCORD</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span>@adam.hunter</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default EarningsSidebar;
