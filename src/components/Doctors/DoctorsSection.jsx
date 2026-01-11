import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import MainNavbar from '../Navbar/MainNavbar';
import BannerCarousel from '../Banner/BannerCarousel';
import Footer from '../footer/footer';

function DoctorsSection() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
  };

  const doctors = [
    {
      id: 1,
      name: 'د. أحمد محمد',
      specialty: 'طب الأسنان',
      image: '1.png',
      alt: 'د. أحمد محمد - طب الأسنان'
    },
    {
      id: 2,
      name: 'د. فاطمة علي',
      specialty: 'الجلدية والتجميل',
      image: '/Image.png',
      alt: 'د. فاطمة علي - الجلدية والتجميل'
    },
    {
      id: 3,
      name: 'د. خالد حسن',
      specialty: 'طب العيون',
      image: '/Rectangle 4.png',
      alt: 'د. خالد حسن - طب العيون'
    },
    {
      id: 4,
      name: 'د. سارة محمود',
      specialty: 'طب الأطفال',
      image: '/Rectangle 5.png',
      alt: 'د. سارة محمود - طب الأطفال'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="ltr">
      {/* Navbar */}
      <Navbar />
      <MainNavbar />

      {/* Banner Section */}
      <section className="w-full">
        <BannerCarousel />
      </section>

      <div className="container mx-auto px-4 pt-8 md:pt-12 pb-12 md:pb-16" dir="rtl">
        {/* العنوان والعنوان الفرعي */}
        <div className="mb-8 md:mb-12 text-right">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900"
            style={{
              fontFamily: 'Almarai',
              fontWeight: 700
            }}
          >
            أطباؤنا
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-600"
            style={{
              fontFamily: 'Almarai',
              fontWeight: 400
            }}
          >
            فريق طبي متخصص ومتقدم لخدمتكم بأفضل الطرق العلاجية
          </p>
        </div>

        {/* البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{
                height: '500px'
              }}
            >
              {/* الصورة */}
              <div className="relative w-full h-80 overflow-hidden bg-gray-100 rounded-t-xl">
                <img
                  src={doctor.image}
                  alt={doctor.alt}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* المعلومات والزر */}
              <div className="p-4 sm:p-5 text-center">
                <h3
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                  style={{
                    fontFamily: 'Almarai',
                    fontWeight: 700
                  }}
                >
                  {doctor.name}
                </h3>
                <p
                  className="text-sm sm:text-base text-gray-600 mb-4"
                  style={{
                    fontFamily: 'Almarai',
                    fontWeight: 400
                  }}
                >
                  {doctor.specialty}
                </p>
                <button
                  onClick={handleBookingClick}
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#0171bd] to-[#015a99] text-white rounded-2xl font-bold text-lg hover:from-[#015a99] hover:to-[#013d73] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-auto relative z-10 cursor-pointer"
                  style={{ fontFamily: 'Almarai' }}
                >
                  احجز الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default DoctorsSection;
