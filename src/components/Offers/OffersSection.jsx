import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import MainNavbar from '../Navbar/MainNavbar';
import BannerCarousel from '../Banner/BannerCarousel';
import Footer from '../footer/footer';

function OffersSection() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
  };

  const offers = [
    {
      id: 1,
      service: 'تنظيف الوجه العميق',
      oldPrice: '150',
      newPrice: '99',
      image: '/1.png',
      discount: '34%'
    },
    {
      id: 2,
      service: 'تقشير الجسم الكامل',
      oldPrice: '200',
      newPrice: '129',
      image: '/2.png',
      discount: '35%'
    },
    {
      id: 3,
      service: 'حقن البوتوكس',
      oldPrice: '800',
      newPrice: '599',
      image: '/3.png',
      discount: '25%'
    },
    {
      id: 4,
      service: 'ليزر إزالة الشعر',
      oldPrice: '300',
      newPrice: '199',
      image: '/Rectangle 4.png',
      discount: '34%'
    },
    {
      id: 5,
      service: 'فيلر الشفايف',
      oldPrice: '600',
      newPrice: '449',
      image: '/Rectangle 5.png',
      discount: '25%'
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
            عروضنا
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-600"
            style={{
              fontFamily: 'Almarai',
              fontWeight: 400
            }}
          >
            استمتع بأفضل العروض والتخفيضات على خدماتنا الطبية والتجميلية
          </p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 place-items-center">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              style={{
                height: '420px',
                width: '320px',
                maxWidth: '100%'
              }}
            >
              {/* الصورة */}
              <div className="relative w-full h-80 overflow-hidden bg-gray-100 rounded-t-xl">
                <img
                  src={offer.image}
                  alt={offer.service}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                {/* خصم */}
                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-20">
                  -{offer.discount}
                </div>

                {/* زر الحجز المتحرك */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                  <button
                    onClick={handleBookingClick}
                    className="opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 delay-200 py-3 px-8 bg-gradient-to-r from-[#0171bd] to-[#015a99] text-white rounded-xl font-bold text-lg hover:from-[#015a99] hover:to-[#013d73] shadow-lg hover:shadow-xl cursor-pointer"
                    style={{ fontFamily: 'Almarai' }}
                  >
                    احجز الآن
                  </button>
                </div>
              </div>

              {/* المعلومات */}
              <div className="p-4 text-center">
                <h3
                  className="text-sm sm:text-base font-bold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'Almarai',
                    fontWeight: 700
                  }}
                >
                  {offer.service}
                </h3>

                {/* الأسعار */}
                <div className="flex items-center justify-center gap-2">
                  <span
                    className="text-red-500 line-through text-sm flex items-center gap-1"
                    style={{
                      fontFamily: 'Almarai',
                      fontWeight: 400
                    }}
                  >
                    {offer.oldPrice}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" width="10" height="11" aria-label="Saudi Riyal" title="Saudi Riyal" style={{display: 'inline-block', verticalAlign: 'middle'}}>
                      <path fill="currentColor" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path>
                      <path fill="currentColor" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path>
                    </svg>
                  </span>
                  <span
                    className="text-green-600 font-bold text-lg flex items-center gap-1"
                    style={{
                      fontFamily: 'Almarai',
                      fontWeight: 700
                    }}
                  >
                    {offer.newPrice}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" width="12" height="13" aria-label="Saudi Riyal" title="Saudi Riyal" style={{display: 'inline-block', verticalAlign: 'middle'}}>
                      <path fill="currentColor" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path>
                      <path fill="currentColor" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path>
                    </svg>
                  </span>
                </div>
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

export default OffersSection;
