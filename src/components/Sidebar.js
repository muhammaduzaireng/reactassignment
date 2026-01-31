import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChartBarIcon,
  CurrencyDollarIcon, 
  VideoCameraIcon, 
  ChartBarSquareIcon
} from '@heroicons/react/24/outline';
import { CircleGauge, Banknote } from 'lucide-react';

function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { icon: CircleGauge, label: 'Dashboard', path: '/', active: location.pathname === '/' },
    { icon: CurrencyDollarIcon, label: 'Review Paid Media', path: '/', active: location.pathname === '/' && false },
    { icon: Banknote, label: 'YouTube Earnings', path: '/earnings', active: location.pathname === '/earnings' },
    { icon: ChartBarSquareIcon, label: 'Creator Summary', path: '/', active: false },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg h-full">
      <nav className="p-4">
        <ul className="space-y-2">
            {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`w-[216px] h-[56px] flex items-center px-4 py-3 rounded-[4px] transition-colors text-left ${
                    item.active
                      ? 'bg-[#0A2AE714] text-primary w-[200px] h-[48px]'
                      : 'text-[#20272E] hover:bg-[#0A2AE714] '
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="text-[14px] font-[Poppins] font-[400]">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
