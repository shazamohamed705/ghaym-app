import React, { useState } from 'react';
import { FaFilter, FaMapMarker, FaBuilding, FaUser, FaUserMd, FaStar, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";

function BookingFilter({
  selectedCity,
  setSelectedCity,
  selectedSalon,
  setSelectedSalon,
  selectedDoctor,
  setSelectedDoctor,
  selectedCategory,
  setSelectedCategory,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedDate,
  setSelectedDate,
  setCurrentPage,
  uniqueCities,
  salons,
  categories,
  doctorNames
}) {
  // Helper functions for date filters
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getNextWeekDate = () => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    return nextWeek.toISOString().split('T')[0];
  };

  // Reset all filters
  const resetAllFilters = () => {
    setSelectedCity('');
    setSelectedSalon(null);
    setSelectedDoctor('');
    setSelectedCategory('');
    setSelectedPriceRange('');
    setSelectedDate('');
    setCurrentPage(1);
  };

  return (
    <div className="bg-white rounded-xl p-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 w-[450px]" dir="rtl">
      <div className="flex flex-col items-center gap-3 mb-5 pb-4 border-b-2 border-gray-200">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:rotate-12">
          <FaFilter className="text-white text-lg" />
        </div>
        <h3 className="text-xl text-blue-700 font-semibold text-center">تصفية النتائج</h3>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <FaMapMarker className="text-blue-700 text-sm" />
            <label className="font-semibold text-gray-700 text-sm">المدينة</label>
          </div>
          <div className="relative w-full">
            <select
              className="w-full pr-8 pl-2 py-2 border border-gray-200 rounded-lg text-sm bg-white text-gray-600 appearance-none hover:border-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700 transition-all duration-200 cursor-pointer"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">جميع المدن</option>
              {uniqueCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none">▼</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <FaBuilding className="text-blue-700 text-sm" />
            <label className="font-semibold text-gray-700 text-sm">المركز الطبي</label>
          </div>
          <div className="relative w-full">
            <select
              className="w-full pr-8 pl-2 py-2 border border-gray-200 rounded-lg text-sm bg-white text-gray-600 appearance-none hover:border-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700 transition-all duration-200 cursor-pointer"
              value={selectedSalon || ''}
              onChange={(e) => {
                setSelectedSalon(e.target.value ? parseInt(e.target.value) : null);
                setCurrentPage(1);
              }}
            >
              <option value="">جميع المراكز الطبية</option>
              {salons.map(salon => (
                <option key={salon.id} value={salon.id}>
                  {salon.salon_name}
                </option>
              ))}
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none">▼</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <FaUser className="text-blue-700 text-sm" />
            <label className="font-semibold text-gray-700 text-sm">التخصص</label>
          </div>
          <div className="relative w-full">
            <select
              className="w-full pr-8 pl-2 py-2 border border-gray-200 rounded-lg text-sm bg-white text-gray-600 appearance-none hover:border-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700 transition-all duration-200 cursor-pointer"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">جميع التخصصات</option>
              {categories.map(category => (
                <option key={category.id} value={category.id.toString()}>
                  {category.title_ar || category.title}
                </option>
              ))}
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none">▼</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <FaUserMd className="text-blue-700 text-sm" />
            <label className="font-semibold text-gray-700 text-sm">الطبيب</label>
          </div>
          <div className="relative w-full">
            <select
              className="w-full pr-8 pl-2 py-2 border border-gray-200 rounded-lg text-sm bg-white text-gray-600 appearance-none hover:border-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700 transition-all duration-200 cursor-pointer"
              value={selectedDoctor}
              onChange={(e) => {
                setSelectedDoctor(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">جميع الأطباء</option>
              {doctorNames.map((doctorName, index) => (
                <option key={index} value={doctorName}>
                  {doctorName}
                </option>
              ))}
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none">▼</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <FaStar className="text-blue-700 text-sm" />
            <label className="font-semibold text-gray-700 text-sm">التصنيف</label>
          </div>
          <div className="relative w-full">
            <select className="w-full pr-8 pl-2 py-2 border-2 border-blue-700 rounded-lg text-sm bg-white text-gray-600 appearance-none hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200 cursor-pointer">
              <option>اختر التصنيف</option>
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none">▼</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <FaCalendarAlt className="text-blue-700 text-sm" />
            <label className="font-semibold text-gray-700 text-sm">التاريخ</label>
          </div>
          <div className="relative w-full">
            <input
              type="date"
              className="w-full pr-8 pl-2 py-2 border border-gray-200 rounded-lg text-sm bg-white text-gray-600 hover:border-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700 transition-all duration-200"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              placeholder="yyyy-mm-dd"
            />
          </div>
          <div className="flex gap-1 mt-2 flex-wrap justify-start">
            <button
              className={`inline-block px-1 py-0.5 text-sm font-normal text-center whitespace-nowrap align-middle cursor-pointer border border-gray-600 rounded-md text-gray-600 bg-transparent hover:text-white hover:bg-gray-600 hover:border-gray-600 transition-all duration-150 ${selectedDate === getTodayDate() ? 'text-gray-600 bg-transparent border-gray-600' : ''}`}
              onClick={() => setSelectedDate(getTodayDate())}
            >
              اليوم
            </button>
            <button
              className={`inline-block px-1 py-0.5 text-sm font-normal text-center whitespace-nowrap align-middle cursor-pointer border border-gray-600 rounded-md text-gray-600 bg-transparent hover:text-white hover:bg-gray-600 hover:border-gray-600 transition-all duration-150 ${selectedDate === getTomorrowDate() ? 'text-gray-600 bg-transparent border-gray-600' : ''}`}
              onClick={() => setSelectedDate(getTomorrowDate())}
            >
              غداً
            </button>
            <button
              className={`inline-block px-1 py-0.5 text-sm font-normal text-center whitespace-nowrap align-middle cursor-pointer border border-gray-600 rounded-md text-gray-600 bg-transparent hover:text-white hover:bg-gray-600 hover:border-gray-600 transition-all duration-150 ${selectedDate === getNextWeekDate() ? 'text-gray-600 bg-transparent border-gray-600' : ''}`}
              onClick={() => setSelectedDate(getNextWeekDate())}
            >
              الأسبوع
            </button>
            <button
              className="inline-block px-1 py-0.5 text-sm font-normal text-center whitespace-nowrap align-middle cursor-pointer border border-gray-600 rounded-md text-gray-600 bg-transparent hover:text-white hover:bg-gray-600 hover:border-gray-600 transition-all duration-150"
              onClick={() => setSelectedDate('')}
            >
              إزالة
            </button>
            <button
              className="inline-block px-1 py-0.5 text-sm font-normal text-center whitespace-nowrap align-middle cursor-pointer border border-gray-600 rounded-md text-gray-600 bg-transparent hover:text-white hover:bg-gray-600 hover:border-gray-600 transition-all duration-150"
              onClick={resetAllFilters}
            >
              الكل
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-2">
            <FaMoneyBillWave className="text-blue-700 text-base" />
            <label className="font-semibold text-gray-700 text-base">نطاق السعر</label>
          </div>
          <div className="flex flex-col gap-3">
            <label className="flex items-center justify-between text-sm text-gray-700 cursor-pointer hover:text-blue-700 transition-colors duration-200 py-2">
              <span className="font-medium">أقل من 100 ر.س</span>
              <input
                type="radio"
                name="price"
                value="under100"
                checked={selectedPriceRange === 'under100'}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="accent-blue-700 w-4 h-4"
              />
            </label>
            <label className="flex items-center justify-between text-sm text-gray-700 cursor-pointer hover:text-blue-700 transition-colors duration-200 py-2">
              <span className="font-medium">100 - 300 ر.س</span>
              <input
                type="radio"
                name="price"
                value="100-300"
                checked={selectedPriceRange === '100-300'}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="accent-blue-700 w-4 h-4"
              />
            </label>
            <label className="flex items-center justify-between text-sm text-gray-700 cursor-pointer hover:text-blue-700 transition-colors duration-200 py-2">
              <span className="font-medium">300 - 500 ر.س</span>
              <input
                type="radio"
                name="price"
                value="300-500"
                checked={selectedPriceRange === '300-500'}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="accent-blue-700 w-4 h-4"
              />
            </label>
            <label className="flex items-center justify-between text-sm text-gray-700 cursor-pointer hover:text-blue-700 transition-colors duration-200 py-2">
              <span className="font-medium">أكثر من 500 ر.س</span>
              <input
                type="radio"
                name="price"
                value="over500"
                checked={selectedPriceRange === 'over500'}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="accent-blue-700 w-4 h-4"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingFilter;