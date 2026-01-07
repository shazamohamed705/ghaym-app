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
      icon: <FaTooth size={40} />,
      value: '45',
      label: 'غرف العيادات'
    },
    {
      icon: <FaUserMd size={40} />,
      value: '200',
      label: 'أطباؤنا المؤهلين'
    },
    {
      icon: <FaUsers size={40} />,
      value: '+212545',
      label: 'عملاء مميزين'
    },
    {
      icon: <FaSmile size={40} />,
      value: '+212545',
      label: 'عملاء سعداء'
    }
  ];

  return (
    <section className="relative w-full pt-8 md:pt-12 pb-12 md:pb-16" dir="rtl">
      {/* الخلفية */}
      <div className="absolute inset-x-0 -bottom 20 h-[50px] bg-gradient-to-r from-[#0171bd]/10 via-[#a6c80d]/10 to-[#a6c80d]/5 -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 -mt-20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="max-w-[200px] aspect-[200/220] w-full bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition hover:-translate-y-1 flex flex-col justify-center items-center h-full"
            >
              <div className="flex justify-center mb-4 text-[#0171bd]">
                {item.icon}
              </div>

              <div
                className="text-3xl font-bold text-[#a6c80d] mb-2"
                style={{
                  fontFamily: 'AbdoMaster-Black',
                  fontWeight: 400,
                  fontSize: '48px',
                  lineHeight: '100%',
                  textAlign: 'center',
                  verticalAlign: 'middle'
                }}
              >
                {item.value}
              </div>

              <p
                className="text-gray-600 text-center"
                style={{
                  fontFamily: 'Almarai',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '18.2px',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  verticalAlign: 'middle'
                }}
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
