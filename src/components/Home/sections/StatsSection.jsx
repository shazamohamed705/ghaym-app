import React from 'react';
import {
  FaTooth,
  FaUserMd,
  FaUsers,
  FaSmile
} from 'react-icons/fa';

function StatsSection() {
  const stats = [
    {
      icon: <FaTooth size={30} className="md:w-10 md:h-10" />,
      value: '45',
      label: 'غرف العيادات'
    },
    {
      icon: <FaUserMd size={30} className="md:w-10 md:h-10" />,
      value: '200',
      label: 'أطباؤنا المؤهلين'
    },
    {
      icon: <FaUsers size={30} className="md:w-10 md:h-10" />,
      value: '+212545',
      label: 'عملاء مميزين'
    },
    {
      icon: <FaSmile size={30} className="md:w-10 md:h-10" />,
      value: '+212545',
      label: 'عملاء سعداء'
    }
  ];

  return (
    <section className="relative w-full pt-12 pb-16" dir="rtl">
      {/* الخلفية */}
      <div className="absolute inset-x-0 -bottom 20 h-[50px] bg-gradient-to-r from-[#0171bd]/10 via-[#a6c80d]/10 to-[#a6c80d]/5 -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 -mt-20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="max-w-[160px] md:max-w-[200px] aspect-[160/180] md:aspect-[200/220] w-full bg-white rounded-lg shadow-md p-3 md:p-4 text-center hover:shadow-lg transition hover:-translate-y-1 flex flex-col justify-center items-center h-full"
            >
              <div className="flex justify-center mb-4 text-[#0171bd]">
                {item.icon}
              </div>

              <div
                className="text-2xl md:text-3xl font-bold text-[#a6c80d] mb-1 md:mb-2"
              >
                {item.value}
              </div>

              <p
                className="text-gray-600 text-center text-sm md:text-base font-medium"
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
