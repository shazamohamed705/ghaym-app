import React from 'react';

function ServicesSection() {
  const clinics = [
    {
      id: 1,
      title: 'ليزر النساء',
      image: '/1.png',
      alt: 'ليزر النساء'
    },
    {
      id: 2,
      title: 'ليزر الرجال',
      image: '/2.png',
      alt: 'ليزر الرجال'
    },
    {
      id: 3,
      title: 'عيادة الجلدية',
      image: '/3.png',
      alt: 'عيادة الجلدية'
    },
    {
      id: 4,
      title: 'عيادة الأسنان',
      image: '/Group 4.png',
      alt: 'عيادة الأسنان'
    }
  ];

  return (
    <section className="relative w-full pt-8 md:pt-12 pb-12 md:pb-16" dir="rtl">
  {/* الخلفية فقط */}
  <div 
  className="absolute inset-x-0 -top-20 h-[500px] bg-gradient-to-r from-[#0171bd]/10 via-[#a6c80d]/20 to-[#a6c80d]/5 -z-10" 
/>

      <div className="container mx-auto px-4">
        {/* العنوان والعنوان الفرعي */}
        <div className="mb-8 md:mb-12 text-center md:text-right">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900"
            style={{
              fontFamily: 'Almarai',
              fontWeight: 700
            }}
          >
            عياداتنا
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600"
            style={{
              fontFamily: 'Almarai',
              fontWeight: 400
            }}
          >
            حلول طبية وجمالية متكاملة لراحة مرضانا
          </p>
        </div>

        {/* البطاقات */}
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:place-items-start lg:grid-cols-4 gap-4 sm:gap-6">
          {clinics.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mx-auto md:mx-0"
              style={{
                width: '337.16px',
                height: '482.20px',
                maxWidth: '100%'
              }}
            >
              {/* الصورة */}
              <div className="relative w-full h-[calc(482.20px-80px)] overflow-hidden bg-gray-100 rounded-t-xl">
                <img
                  src={clinic.image}
                  alt={clinic.alt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* العنوان */}
              <div className="p-4 sm:p-5 text-center h-20 flex items-center justify-center">
                <h3 
                  className="text-lg sm:text-xl font-bold text-gray-900"
                  style={{
                    fontFamily: 'Almarai',
                    fontWeight: 700
                  }}
                >
                  {clinic.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

