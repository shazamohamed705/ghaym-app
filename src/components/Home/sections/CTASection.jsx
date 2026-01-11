import React from 'react';
import { Link } from 'react-router-dom';

function CTASection() {
  return (
<section className="relative w-full pt-20 md:pt-24 pb-12 md:pb-16" dir="rtl">
  {/* الخلفية */}
  <div className="absolute inset-x-0 top-16 h-[350px] bg-gradient-to-r from-[#0171bd]/10 via-[#a6c80d]/20 to-[#a6c80d]/5 -z-10" />
    
      <div className="container mx-auto px-4 relative min-h-[400px]">

        {/* النص -   */}
        <div className="absolute right-20 top-8 z-20 text-right max-w-md">
          <h2
            className="text-2xl md:text-3xl mb-4 text-gray-900"
            style={{
              fontFamily: 'Almarai',
              fontWeight: 700
            }}
          >
            فريقنا الطبي
          </h2>
          <p
            className="text-base md:text-3xl mb-6 text-gray-600 leading-relaxed"
            style={{
              fontFamily: 'Almarai',
              fontWeight: 400,
              fontSize: '19px',
              lineHeight: '27px',
              letterSpacing: '0%',
              textAlign: 'right',
              verticalAlign: 'middle'
            }}
          >
            لدينا نخبة من الأطباء والاستشاريين ذوي الخبرة لضمان أفضل رعاية صحية!
            احجز الآن استشارتك مع طبيبنا المختار من فريقنا الطبي المتميز
          </p>
          <Link
            to="/booking"
            className="inline-block px-8 py-3 bg-white text-[#0171bd] border-2 border-[#0171bd] rounded-lg font-semibold hover:bg-[#0171bd] hover:text-white transition-colors shadow-md"
            style={{
              fontFamily: 'Almarai',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            احجز استشارتك الآن
          </Link>
        </div>

        <div
          className="
            absolute
            hidden md:block
            right-4 md:right-[420px] lg:right-[750px]
            top-1/2
            -translate-y-1/2
            z-10
          "
        >
          <img
            src="/Image.png"
            alt="دكتور"
            className="
              w-[220px]
              sm:w-[260px]
              md:w-[320px]
              lg:w-[450px]
              rounded-lg
            "
            style={{
              transform: 'translateY(-100px)'
            }}
          />
        </div>
      </div>
</section>
  );
}

export default CTASection;

