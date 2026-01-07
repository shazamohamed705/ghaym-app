
import React, { useState } from 'react';

function WelcomeSection() {
  const [formData, setFormData] = useState({
    specialization: '',
    doctor: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching with:', formData);
  };

  return (
    <>
      <section className="w-full bg-gradient-to-r from-[#0171bd]/10 to-[#a6c80d]/10 py-20 relative">
        {/* المحتوى */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 py-10">
          {/* الجزء الأيسر - الصور الدائرية (Ellipse 3 / Ellipse 4) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* الدائرة الكبيرة */}
              <div className="absolute top-0 left-2 w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/Ellipse 4.png"
                  alt="خدمات مجمع غيم الطبي"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* الدائرة الصغيرة المتداخلة */}
              <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="/Ellipse 3.png"
                  alt="ابتسامة وراحة المراجعين"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* دوائر ديكورية صغيرة - زرقاء */}
              <span className="absolute top-5 right-20 w-3.5 h-3.5 rounded-full bg-[#0171bd]" />
              <span className="absolute bottom-1 right-8 w-3 h-3 rounded-full bg-[#0171bd]" />
              <span className="hidden sm:block absolute bottom-10 right-48 w-4 h-4 rounded-full bg-[#9bc115]" />
              <span className="hidden sm:block absolute top-8 left-12 w-3 h-3 rounded-full bg-[#0171bd]" />
              
              {/* دوائر ديكورية صغيرة - خضراء */}
              <span className="absolute bottom-5 right-3 w-6 h-6 rounded-full bg-[#9bc115]" />
              {/* الدائرة الخضراء الأكبر */}
              <span className="absolute top-8 right-16 w-6 h-6 rounded-full bg-[#9bc115]" />
              <span className="hidden sm:block absolute bottom-8 right-40 w-6 h-6 rounded-full bg-[#0171bd]" />
              <span className="hidden sm:block absolute top-40 left-5 w-6 h-6 rounded-full bg-[#0171bd]" />
              <span className="hidden sm:block absolute bottom-40 right-0 w-3 h-3 rounded-full bg-[#0171bd]" />
            </div>
          </div>

          {/* الجزء الأيمن - النص */}
          <div className="w-full md:w-1/2 text-center md:text-right" dir="rtl" style={{ marginRight: '4rem' }}>
            <h2 
              className="mb-3 text-gray-900"
              style={{
                fontFamily: 'Almarai',
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '140%',
                textAlign: 'right'
              }}
            >
              مجمع <span className="text-[#9bc115]">غيم الطبي</span>
            </h2>
            <h3 
              className="mb-4 text-gray-800"
              style={{
                fontFamily: 'Almarai',
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '140%',
                textAlign: 'right'
              }}
            >
              رعاية متكاملة لجمالك وصحتك
            </h3>
            <p 
              className="text-gray-600 max-w-4xl mx-auto md:mx-0"
              style={{
                fontFamily: 'Almarai',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '140%',
                textAlign: 'justify'
              }}
            >
              يُعد مجمع غيم الطبي أحد المراكز الطبية المتميزة في مدينة جدة، يقدم خدمات شاملة في طب الأسنان، الجلدية، والتجميل، على يد فريق من الأطباء المتخصصين ذوي الكفاءة العالية والخبرة الطويلة. نهدف إلى توفير رعاية طبية متكاملة تعتمد على أحدث التقنيات والأجهزة، مع الالتزام بأعلى معايير التعقيم والجودة لضمان سلامة ورضا كل مراجع. في مجمع غيم الطبي، نؤمن بأن العناية بالابتسامة والبشرة ليست رفاهية، بل جزء من الصحة العامة وثقة الإنسان بنفسه، لذلك نحرص على تقديم حلول علاجية وتجميلية تناسب احتياجات كل عميل وتحقق نتائج طبيعية ومرضية.
            </p>

            <button
              className="mt-6 inline-flex items-center justify-center px-8 py-2.5 text-sm sm:text-base font-semibold rounded-lg border border-[#0171bd] text-[#0171bd] bg-white hover:bg-[#0171bd] hover:text-white transition-colors shadow-sm"
            >
              احجز الآن
            </button>
          </div>
        </div>
      </section>

      {/* نموذج حجز الموعد - منفصل ومركب على السكشن */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="rounded-lg p-6 md:p-8 bg-white shadow-xl" dir="rtl">
          {/* العنوان */}
          <h2 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-right"
            style={{
              fontFamily: 'Almarai',
              fontWeight: 700
            }}
          >
            إحجز موعدك الآن
          </h2>

          {/* النموذج */}
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-end">
            {/* حقل التخصص */}
            <div className="flex-1 relative">
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
                <svg className="w-5 h-5 text-[#0171bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full pr-12 pl-4 py-3 border border-[#0171bd] rounded-lg text-right appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#0171bd] focus:border-transparent"
                style={{ fontFamily: 'Almarai' }}
                required
              >
                <option value="">اختر التخصص</option>
                <option value="dentistry">طب الأسنان</option>
                <option value="dermatology">الجلدية</option>
                <option value="cosmetic">التجميل</option>
              </select>
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* حقل الطبيب */}
            <div className="flex-1 relative">
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
                <svg className="w-5 h-5 text-[#0171bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full pr-12 pl-4 py-3 border border-[#0171bd] rounded-lg text-right appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#0171bd] focus:border-transparent"
                style={{ fontFamily: 'Almarai' }}
                required
              >
                <option value="">إختر الطبيب</option>
                <option value="doctor1">د. أحمد محمد</option>
                <option value="doctor2">د. فاطمة علي</option>
                <option value="doctor3">د. خالد حسن</option>
              </select>
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* حقل التاريخ */}
            <div className="flex-1 relative">
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
                <svg className="w-5 h-5 text-[#0171bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <select
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full pr-12 pl-4 py-3 border border-[#0171bd] rounded-lg text-right appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#0171bd] focus:border-transparent"
                style={{ fontFamily: 'Almarai' }}
                required
              >
                <option value="">اختر التاريخ</option>
                <option value="today">اليوم</option>
                <option value="tomorrow">غداً</option>
                <option value="week">هذا الأسبوع</option>
              </select>
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* زر البحث */}
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#0171bd] text-white rounded-lg font-semibold hover:bg-[#015a99] transition-colors shadow-md"
              style={{ fontFamily: 'Almarai' }}
            >
              بحث
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default WelcomeSection;
