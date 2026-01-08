import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#0b6fb3] text-white pt-16" dir="rtl">
      <div className="container mx-auto px-6">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 border-b border-white/20 pb-12">

          {/* وصف المجمع */}
          <div>
            <img src="/fniOf3POWAeIz8DXX8oPcxjNgjUHvLeqHDdhtDAK (3) 2.png" />
            <p
              className="text-sm opacity-90 leading-relaxed mb-6"
              style={{ fontFamily: 'Almarai', fontWeight: 400 }}
            >
              مجمع غيم الطبي متكامل يضم نخبة من المختصين والاستشاريين في مجالي قسم الأسنان والجلدية والليزر والعلاج الطبيعي بأحدث الأجهزة والتقنيات الحديثة
            </p>

            {/* معلومات التواصل */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white-400" style={{ fontFamily: 'Almarai', fontWeight: 400 }}>
                <FaMapMarkerAlt className="text-base" />
                <span className="text-sm">شارع القاسم بن أمية، حي الحمدانية، جدة 23761، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-2 text-white-400" style={{ fontFamily: 'Almarai', fontWeight: 400 }}>
                <FaPhone className="text-base" />
                <span className="text-sm">(+91)-540-025-124553</span>
              </div>
              <div className="flex items-center gap-2 text-white-400" style={{ fontFamily: 'Almarai', fontWeight: 400 }}>
                <FaEnvelope className="text-base" />
                <span className="text-sm">sale@Nest.com</span>
              </div>
              <div className="flex items-center gap-2 text-white-400" style={{ fontFamily: 'Almarai', fontWeight: 400 }}>
                <FaClock className="text-base" />
                <span className="text-sm">ساعات العمل: 10:00 - 18:00, Mon - Sat</span>
              </div>
            </div>
          </div>

          {/* روابط مهمة */}
          <div>
            <h4 className="mb-4" style={{
              fontFamily: 'Almarai',
              fontWeight: 700,
              fontStyle: 'Bold',
              fontSize: '18px',
              lineHeight: '28.8px',
              letterSpacing: '0%',
              textAlign: 'right',
              verticalAlign: 'middle'
            }}>روابط مهمة</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>عن المجمع</li>
              <li>سياسة الخصوصية</li>
              <li>سياسة الإرجاع</li>
              <li>المدونة</li>
              <li>تواصل معنا</li>
              <li>الدعم</li>
            </ul>
          </div>

          {/* الحساب */}
          <div>
            <h4 className="mb-4" style={{
              fontFamily: 'Almarai',
              fontWeight: 700,
              fontStyle: 'Bold',
              fontSize: '18px',
              lineHeight: '28.8px',
              letterSpacing: '0%',
              textAlign: 'right',
              verticalAlign: 'middle'
            }}>الحساب</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>تسجيل الدخول</li>
              <li>حجوزاتي</li>
            </ul>
          </div>

          {/* عياداتنا */}
          <div>
            <h4 className="mb-4" style={{
              fontFamily: 'Almarai',
              fontWeight: 700,
              fontStyle: 'Bold',
              fontSize: '18px',
              lineHeight: '28.8px',
              letterSpacing: '0%',
              textAlign: 'right',
              verticalAlign: 'middle'
            }}>عياداتنا</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>عيادة الأسنان</li>
              <li>عيادة الجلدية</li>
              <li>زر الأسنان</li>
              <li>زر الرجال</li>
            </ul>
          </div>

          {/* طرق الدفع */}
          <div>
            <h4 className="mb-4" style={{
              fontFamily: 'Almarai',
              fontWeight: 700,
              fontStyle: 'Bold',
              fontSize: '18px',
              lineHeight: '28.8px',
              letterSpacing: '0%',
              textAlign: 'right',
              verticalAlign: 'middle'
            }}>طرق الدفع</h4>
            <p className="text-sm mb-4 opacity-80">
              يمكنك الدفع والتقسيط عبر
            </p>

            <div className="flex gap-3 mb-4">
              <img src="/3b87a60a8e30f980b67d1f4c8d87fb19e275cb93.png" className="h-8" alt="tamara" />
              <img src="/b76ba7212e0ac8087f112b48c9b5ab0dc3231828.png" className="h-8" alt="tabby" />
            </div>

            <p className="text-sm mb-2 opacity-80">أو عن طريق</p>

            <div className="flex gap-3">
              <img src="/abfde2069df20d065d424eb84b76f8b62e604c51.png" className="h-7" alt="mada" />
             
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#085c96] py-4" dir="ltr">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          <p className="opacity-80">
            © 2022 مجمع غيم الطبي – جميع الحقوق محفوظة
          </p>

          <div className="flex gap-6 font-bold text-[#9bc115]">
            <div className="flex items-center gap-2">
              <FaPhone className="text-sm" />
              <span>1900646666</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-sm" />
              <span>1900648888</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#9bc115] flex items-center justify-center text-white">
              <FaFacebookF className="text-sm" />
            </span>
            <span className="w-8 h-8 rounded-full bg-[#9bc115] flex items-center justify-center text-white">
              <FaInstagram className="text-sm" />
            </span>
            <span className="w-8 h-8 rounded-full bg-[#9bc115] flex items-center justify-center text-white">
              <FaTwitter className="text-sm" />
            </span>
            <span className="w-8 h-8 rounded-full bg-[#9bc115] flex items-center justify-center text-white">
              <FaYoutube className="text-sm" />
              

            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
