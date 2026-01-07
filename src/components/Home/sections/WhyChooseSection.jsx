import React from 'react';
import { FaCheck } from 'react-icons/fa';

function WhyChooseSection() {
  return (
    <section
      className="relative w-full py-16 bg-gradient-to-r from-[#0171bd]/10 via-[#a6c80d]/20 to-[#a6c80d]/5 -z-10"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* المحتوى */}
          <div className="text-right">
            <h3
              className="mb-2"
              style={{
                fontFamily: 'Almarai',
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: '41.6px',
                letterSpacing: '0%',
                textAlign: 'right',
                verticalAlign: 'middle'
              }}
            >
              <span className="text-gray-900">لماذا تختار</span> <span className="text-[#a6c80d]">مجمع غيم الطبي؟</span>
            </h3>

            <p
              className="text-gray-600 mb-6"
              style={{
                fontFamily: 'Almarai',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '27px',
                letterSpacing: '0%',
                textAlign: 'right',
                verticalAlign: 'middle'
              }}
            >
              رعاية طبية متكاملة بجودة عالية وخدمات تناسب جميع احتياجاتك
            </p>

            <div className="space-y-3">
              {[
                'مجمع طبي متكامل يضم نخبة من المختصين والاستشاريين',
                'كل ما تحتاجه من تخصصات الأسنان والجلدية في مكان واحد',
                'أحدث الأجهزة والتقنيات الطبية المتطورة',
                'عروض وخصومات دورية على الخدمات',
                'إمكانية الدفع بالتقسيط عبر بنوك مختارة'
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center gap-3 bg-white rounded-xl px-4 py-2 shadow-sm overflow-hidden"
                  style={{
                    width: '550px',
                    height: '65px',
                    borderRightWidth: '8px',
                    borderRightColor: '#0171bd',
                    maxWidth: '100%'
                  }}
                >
                  <span className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-[#0171bd] text-xs">
                    <FaCheck />
                  </span>
                  <span
                    style={{
                      color: '#292929',
                      fontFamily: 'Almarai',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '0%',
                      textAlign: 'right',
                      verticalAlign: 'middle'
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* الصور */}
          <div className="relative w-full flex justify-center md:justify-end">

            {/* الصورة الكبيرة */}
            <div className="relative w-[300px] h-[380px] rounded-2xl shadow-lg p-2">
              <img
                src="/Rectangle 4.png"
                alt="clinic"
                className="w-full h-full object-cover"
              />

              {/* الشكل الأخضر مثلث الشكل مفرغ */}
              {/* الشكل الأخضر في اليمين العلوي */}
              <span
                className="absolute border-r-8 border-t-8 border-[#a6c80d]"
                style={{
                  zIndex: -1,
                  width: '150px',
                  height: '120px',
                  right: '0px',
                  top: '0px',
                  borderRadius: '16px'
                }}
              />

              {/* الشكل الأزرق في اليسار السفلي */}
              <span
                className="absolute border-l-8 border-b-8 border-[#0171bd]"
                style={{
                  zIndex: -2,

                  width: '120px',
                  height: '100px',
                  left: '0px',
                  bottom: '0px',
                  borderRadius: '16px'
                }}
              />
            </div>

            {/* الصورة الصغيرة */}
            <div className="absolute -bottom-10 -left-40 w-[200px] h-[240px] rounded-2xl overflow-hidden shadow-lg p-2" style={{ zIndex: -3 }}>
              <img
                src="/Rectangle 5.png"
                alt="smile"
                className="w-full h-full object-cover"
              />

              {/* الشكل الأزرق على الصورة الصغيرة */}
              <span
                className="absolute border-l-8 border-t-8 border-[#0171bd]"
                style={{

                  zIndex: -1.5,

                  width: '100px',
                  height: '70px',
                  left: '0px',
                  top: '0px',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
