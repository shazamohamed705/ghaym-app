import React, { useState } from 'react';

const offers = [
  {
    id: 1,
    image: '/1.png', // استبدلي بالمسار الصحيح للصورة
    title: '4 جلسات فل بدي بدون ظهر وبطن',
    category: 'ليزر النساء',
    price: '898 ريال'
  },
  {
    id: 2,
    image: '/1.png',
    title: '4 جلسات فل بدي بدون ظهر وبطن',
    category: 'ليزر النساء',
    price: '898 ريال'
  },
  {
    id: 3,
    image: '/1.png',
    title: '4 جلسات فل بدي بدون ظهر وبطن',
    category: 'ليزر النساء',
    price: '898 ريال'
  },
  {
    id: 4,
    image: '/1.png',
    title: '4 جلسات فل بدي بدون ظهر وبطن',
    category: 'ليزر النساء',
    price: '898 ريال'
  },
  {
    id: 5,
    image: '/1.png',
    title: '4 جلسات فل بدي بدون ظهر وبطن',
    category: 'ليزر النساء',
    price: '898 ريال'
  }
];

function OffersSection() {
  const [activeFilter, setActiveFilter] = useState('الكل');

  const filters = ['الكل', 'قسم الجلدية', 'قسم الأسنان', 'ليزر النساء', 'ليزر الرجال'];

  const filteredOffers = activeFilter === 'الكل'
    ? offers
    : offers.filter(offer => offer.category === activeFilter);

  return (
    <section className="py-12 bg-white" dir="rtl">

      <div className="container mx-auto px-4">
        {/* عنوان القسم */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2
              className="text-2xl font-bold text-gray-900"
              style={{
                fontFamily: 'Almarai',
                fontWeight: 700
              }}
            >
              أحدث <span className="text-[#9bc115]">عروض</span> مجمع غيم الطبي
            </h2>
            <p
              className="text-gray-600 text-sm mt-2"
              style={{
                fontFamily: 'Almarai',
                fontWeight: 400
              }}
            >
              خصومات مميزة على خدمات طبية مختارة لفترة محدودة
            </p>

            {/* الفلاتر */}
            <div className="flex flex-wrap gap-3 mt-6" dir="rtl">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-[#9bc115] text-white shadow-md'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-[#9bc115] hover:text-white hover:border-[#9bc115]'
                  }`}
                  style={{
                    fontFamily: 'Almarai',
                    fontWeight: 400
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <button
            className="text-sm text-blue-500 border border-blue-200 px-3 py-1 rounded"
            style={{
              fontFamily: 'Almarai',
              fontWeight: 400
            }}
          >
            تعرف على المزيد
          </button>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* الصورة */}
              <div className="w-full h-40 overflow-hidden">
                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover object-center" />
              </div>

              {/* محتوى الكارت */}
              <div className="p-4 text-center">
                <div className="flex justify-between items-start">
                  <h3
                    className="text-gray-900 font-bold mt-1 flex-1 text-right"
                    style={{
                      fontFamily: 'Almarai',
                      fontWeight: 700
                    }}
                  >
                    {offer.title}
                  </h3>
                  <span
                    className="text-gray-500 text-xs mt-2 mr-2"
                    style={{
                      fontFamily: 'Almarai',
                      fontWeight: 400
                    }}
                  >
                    جلسات
                  </span>
                </div>
                <div className="mt-2">
                  <p
                    className="text-gray-700 text-sm mb-1 text-right"
                    style={{
                      fontFamily: 'Almarai',
                      fontWeight: 500
                    }}
                  >
                    ليز نساء
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className="text-[#9bc115] font-bold"
                      style={{
                        fontFamily: 'Almarai',
                        fontWeight: 700
                      }}
                    >
                      {offer.price.replace('ريال', '')}
                      <svg className="inline w-4 h-4 mx-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 12h8"/>
                        <path d="M8 9h8"/>
                      </svg>
                    </span>
                    <button
                      className="text-blue-500 border border-blue-200 px-2 py-1 rounded text-xs flex items-center gap-1"
                      style={{
                        fontFamily: 'Almarai',
                        fontWeight: 400
                      }}
                    >
                      احجز الآن
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OffersSection;
