import React from 'react';

function Navbar() {
  return (
    <nav className="text-white py-2" style={{ backgroundColor: '#005b99' }} dir="rtl">
      <div className="container mx-auto px-2 sm:px-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 py-1 relative">
        {/* Right Section - Language and Contact (moved to left) */}
        <div className="flex flex-row-reverse sm:space-x-reverse sm:space-x-3 flex-wrap justify-center sm:justify-start items-center text-xs sm:text-sm gap-1.5 sm:gap-0" style={{ color: '#FFFFFF' }}>
          <span className="text-lime-400 font-medium">+1800900122</span>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <span>للاستفسار:</span>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <span>العربية</span>
        </div>

        {/* Center Section - Promotional Message (centered absolutely) */}
        <div className="font-medium text-xs sm:text-sm whitespace-nowrap text-center sm:absolute sm:left-[48%] sm:transform sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2" style={{ color: '#9bc115' }}>
          عروض وخصومات تصل الى 50% لفترة محدودة
        </div>

        {/* Left Section - Navigation Links (moved to right) */}
        <div className="flex flex-row-reverse sm:space-x-reverse flex-wrap justify-center sm:justify-end items-center text-xs sm:text-sm gap-1.5 sm:gap-0 sm:ml-auto" style={{ color: '#FFFFFF', transform: 'translateX(-50rem)' }}>
          <span className="hover:opacity-80 cursor-pointer transition-opacity sm:px-2">حسابي</span>
          <span className="text-gray-400 hidden sm:inline px-2">|</span>
          <span className="hover:opacity-80 cursor-pointer transition-opacity sm:px-2">الحجوزات</span>
          <span className="text-gray-400 hidden sm:inline px-2">|</span>
          <span className="hover:opacity-80 cursor-pointer transition-opacity sm:px-2">من نحن</span>
          <span className="text-gray-400 hidden sm:inline px-2">|</span>
          <span className="hover:opacity-80 cursor-pointer transition-opacity sm:px-2">تواصل معنا</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
