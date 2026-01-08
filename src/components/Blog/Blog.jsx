import React from 'react';
import { Link } from 'react-router-dom';
import MainNavbar from '../Navbar/MainNavbar';
import BannerCarousel from '../Banner/BannerCarousel';
import Footer from '../footer/footer';

function Blog() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navbar */}
      <MainNavbar />

      {/* Banner */}
      <BannerCarousel />


      {/* Blog Content */}
      <section className="w-full py-16 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-[1500px] mx-auto">
            {/* العنوان الرئيسي */}
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#a6c80d]"
                style={{
                  fontFamily: 'Almarai',
                  fontWeight: 700,
                  lineHeight: '28.8px',
                  textAlign: 'right'
                }}
              >
                مدونتنا
              </h2>
            </div>

            {/* محتوى المقالة */}
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* النص */}
                <div className="w-full lg:w-1/2 text-right" style={{ marginTop: '-220px' }}>
                  <h3
                    className="text-3xl font-bold text-gray-900 mb-3"
                    style={{
                      fontFamily: 'Almarai',
                      fontWeight: 700,
                      lineHeight: '57.6px',
                      textAlign: 'right'
                    }}
                  >
                    افضل نوع بوتوكس , دليلك لاختيار الأنسب لك
                  </h3>

                  <p
                    className="text-gray-600 text-base leading-relaxed"
                    style={{
                      fontFamily: 'Almarai',
                      fontWeight: 400,
                      lineHeight: '24px',
                      textAlign: 'right'
                    }}
                  >
                    يُعد البوتوكس من أشهر العلاجات التجميلية المستخدمة لمكافحة التجاعيد وعلامات التقدم في العمر، حيث يعمل على إرخاء العضلات المسببة للتجاعيد، مما يمنح البشرة مظهرًا أكثر شبابًا ونضارة. ومع توفر عدة أنواع من البوتوكس في الأسواق، قد يتساءل الكثيرون عن افضل نوع بوتوكس لضمان الحصول على نتائج فعالة وآمنة تدوم لفترة طويلة.
                  </p>

                </div>

                {/* الصور جنب بعض */}
                <div className="flex gap-4 w-full lg:w-1/2 justify-center">
                  <img
                    src="/Rectangle 4.png"
                    alt="Blog Image 1"
                    className="rounded-lg"
                    style={{
                      width: '300px',
                      height: '400px',
                      opacity: 1,
                      objectFit: 'cover',
                      zIndex: 20,
                      boxShadow: '0 35px 70px -12px rgba(0, 0, 0, 0.35), 0 20px 40px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2)',
                      filter: 'brightness(1.08) contrast(1.15) saturate(1.1)',
                      transform: 'translateY(-8px) scale(1.05)'
                    }}
                  />

                  <img
                    src="/Rectangle 5.png"
                    alt="Blog Image 2"
                    className="rounded-lg shadow-lg"
                    style={{
                      width: '250px',
                      height: '320px',
                      opacity: 1,
                      objectFit: 'cover',
                      transform: 'translateX(-10px)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Blog;
