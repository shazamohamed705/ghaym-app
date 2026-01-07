import React, { useState } from 'react';

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-t border-blue-200 relative" dir="rtl">
      {/* ===== Mobile Header ===== */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        {/* Menu Button - الشمال */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo - اليمين */}
        <img src="/logoo.png" alt="Logo" className="h-12" />
      </div>

      {/* ===== Mobile Menu ===== */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-4">
          {/* Search */}
          <div className="relative" dir="rtl">
            <input
              type="text"
              placeholder="ادخل كلمة البحث"
              className="w-full border border-blue-300 px-3 py-2 rounded pr-16"
              dir="rtl"
            />
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded text-xs"
              style={{ backgroundColor: '#0171bd' }}
            >
              بحث
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 text-sm">
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">الرئيسية</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">عروضنا</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">أطباؤنا</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">حجز موعد</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">من نحن</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">المدونة</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">تواصل معنا</a>
          </div>

          {/* Account / Cart */}
          <div className="flex gap-4 pt-3 border-t text-sm">
            <span className="text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">الحساب</span>
            <span className="text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">الحجوزات</span>
            <span className="text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">🛒</span>
          </div>

          {/* Departments */}
          <button 
            className="w-full text-white py-2 rounded flex items-center justify-center gap-2"
            style={{ backgroundColor: '#0171bd' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>أقسام مجمع غيم الطبي</span>
          </button>
        </div>
      )}

      {/* ===== Desktop View ===== */}
      <div className="hidden lg:block">
        {/* Logo - Separate div, positioned absolutely */}
        <div className="absolute top-0 right-0 z-10" style={{ marginTop: '3.5rem', paddingRight: '10rem' }}>
          <img 
            src="/logoo.png" 
            alt="Ghaym Medical Center Logo" 
            className="h-24 w-auto object-contain"
          />
        </div>

        {/* Top Section */}
      <div className="container mx-auto px-4 pt-2 pb-3 flex flex-col lg:flex-row items-center gap-4 lg:gap-6" style={{ marginBottom: '1rem' }}>

        {/* Search Bar - Moved to left */}
        <div className="flex order-5 lg:order-2 relative" dir="rtl" style={{ width: '500px', transform: 'translateX(-40rem)', marginTop: '1.5rem' }}>
          <input
            type="text"
            placeholder="ادخل كلمة البحث"
            className="w-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            dir="rtl"
            style={{ 
              width: '450px',
              height: '40px',
              borderRadius: '4px',
              borderWidth: '2px',
              padding: '2px',
              paddingRight: '70px',
              paddingLeft: '12px'
            }}
          />
          <button 
            className="absolute text-white px-4 rounded-r transition-colors text-xs font-medium flex items-center justify-center"
            style={{ 
              top: '5px',
              right: '5px',
              height: '30px',
              borderTopRightRadius: '2px',
              borderBottomRightRadius: '2px',
              backgroundColor: '#0171bd'
            }}
          >
            بحث
          </button>
        </div>

        {/* Left Side - Cart, Reservations, Account (moved to right, after search) */}
        <div className="flex items-center gap-4 order-3 lg:order-2" style={{ transform: 'translateX(-35rem)', marginRight: '0.5rem', marginTop: '2.5rem', alignSelf: 'flex-start' }}>
          {/* Cart Icon */}
      
          {/* Account Icon */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-gray-700 text-sm">الحساب</span>
          </div>
          <div className="relative cursor-pointer">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </div>
          
          <span className="text-gray-700 text-sm cursor-pointer hover:text-blue-600 transition-colors">الحجوزات</span>
          
        </div>
      </div>

        {/* Bottom Section - Navigation */}
        <div>
        <div className="container mx-auto px-4 py-3 flex flex-col lg:flex-row items-center gap-4" style={{ transform: 'translateX(-17rem)' }}>
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-6 order-1 lg:order-1">
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium">الرئيسية</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium">عروضنا</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium">أطباؤنا</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium">حجز موعد</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium">من نحن</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium">المدونة</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium">تواصل معنا</a>
          </div>

          {/* Departments Button */}
          <button className="text-white px-6 py-2 rounded flex items-center gap-2 transition-colors text-sm font-medium order-2 lg:order-2 lg:ml-auto" style={{ backgroundColor: '#0171bd' }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>أقسام مجمع غيم الطبي</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default MainNavbar;

