 
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import MainNavbar from '../Navbar/MainNavbar';
import BannerCarousel from '../Banner/BannerCarousel';
import Footer from '../footer/footer';
 function About() {
    return (
        <div className="min-h-screen  bg-gradient-to-r from-[#0171bd]/10 to-[#a6c80d]/10" dir="ltr">
          {/* Navbar */}
          <Navbar />
          <MainNavbar />
    
          {/* Banner */}
          <BannerCarousel />
    
    
          {/* Blog Content */}
          <section className="w-full ">
        {/* المحتوى */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 py-10">
          {/* الجزء الأيسر - الصور الدائرية (Ellipse 3 / Ellipse 4) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start md:transform md:translate-x-20">
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
          <div className="w-full md:w-1/2 text-center md:text-right md:mr-16" dir="rtl">
            <h2 className="mb-3 font-bold text-2xl sm:text-3xl md:text-[40px] text-center md:text-right">
              مجمع <span className="text-[#9bc115]">غيم الطبي</span>
            </h2>
            <h3 className="mb-4 font-bold text-2xl sm:text-3xl md:text-[40px] text-center md:text-right">
              رعاية متكاملة لجمالك وصحتك
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto md:mx-0 text-sm sm:text-base md:text-[20px] text-center md:text-justify">
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

          {/* Footer */}
          <Footer />
        </div>
      );
    }
  
  export default About;