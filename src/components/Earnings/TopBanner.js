import React from 'react';
import { XMarkIcon,ChevronRightIcon } from '@heroicons/react/24/outline';

function TopBanner() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#FFC107] min-h-[54px] px-3 md:px-6 py-2 md:py-3 flex items-center justify-between shadow-[0px_1px_2px_-1px_#00000033]">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span className="text-base md:text-lg">🏆</span>
        <span className="text-[10px] md:text-[12px] font-[400] font-[Poppins] text-dark truncate">
          <span className="hidden md:inline">You might be eligible for a $500K licensing deal</span>
          <span className="md:hidden">Eligible for $500K licensing deal</span>
        </span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="text-dark flex-shrink-0 ml-2"
        aria-label="Close banner"
      >
        <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  );
}

export default TopBanner;
