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
            <img src="/logoo.png" />
            <p
              className="text-sm opacity-90 leading-relaxed mb-6"
              style={{
                fontFamily: 'Almarai',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '12px',
                leadingTrim: 'NONE',
                lineHeight: '18px',
                letterSpacing: '0%',
                textAlign: 'right',
                verticalAlign: 'middle'
              }}
            >
              مجمع غيم الطبي متكامل يضم نخبة من المختصين والاستشاريين في مجالي قسم الأسنان والجلدية والليزر والعلاج الطبيعي بأحدث الأجهزة والتقنيات الحديثة
            </p>

            {/* معلومات التواصل */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white mb-4" style={{ fontFamily: 'Almarai', fontWeight: 400 }}>
                <FaMapMarkerAlt className="text-green-400 text-lg flex-shrink-0" />
                <span className="text-white" style={{
                  fontFamily: 'Almarai',
                  fontWeight: 700,
                  fontStyle: 'Bold',
                  fontSize: '12px',
                  leadingTrim: 'NONE',
                  lineHeight: '26px',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  verticalAlign: 'middle'
                }}>العنوان:</span>
                <span className="text-white" style={{
                  fontFamily: 'Almarai',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  leadingTrim: 'NONE',
                  lineHeight: '26px',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  verticalAlign: 'middle',
                  whiteSpace: 'nowrap'
                }}>
                  شارع القاسم بن أمية، حي الحمدانية،<br />
                  <span style={{ paddingLeft: '50px' }}>
                    جدة 23761، المملكة العربية السعودية
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-white" style={{ fontFamily: 'Almarai', fontWeight: 400 }}>
                <FaPhone className="text-green-400 text-base" />
                <span className="text-white" style={{
                  fontFamily: 'Almarai',
                  fontWeight: 700,
                  fontStyle: 'Bold',
                  fontSize: '12px',
                  leadingTrim: 'NONE',
                  lineHeight: '26px',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  verticalAlign: 'middle'
                }}>الهاتف:</span>
                <span className="text-green-400" style={{
                  fontFamily: 'Almarai',
                  fontWeight: 700,
                  fontStyle: 'Bold',
                  fontSize: '12px',
                  lineHeight: '26px',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  verticalAlign: 'middle'
                }}>(+91)-540-025-124553</span>
              </div>
              <div className="flex items-center gap-2 text-white" style={{ fontFamily: 'Almarai', fontWeight: 400 }}>
                <FaEnvelope className="text-green-400 text-base" />
                <span className="text-white" style={{
                  fontFamily: 'Almarai',
                  fontWeight: 700,
                  fontStyle: 'Bold',
                  fontSize: '12px',
                  leadingTrim: 'NONE',
                  lineHeight: '26px',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  verticalAlign: 'middle'
                }}>الإيميل:</span>
                <span className="text-green-400" style={{
                  fontFamily: 'Almarai',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '26px',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  verticalAlign: 'middle'
                }}>sale@Nest.com</span>
              </div>
              <div className="flex items-center gap-2 text-white" style={{ fontFamily: 'Almarai', fontWeight: 400 }}>
                <FaClock className="text-green-400 text-base flex-shrink-0" />
                <span className="text-white" style={{
                  fontFamily: 'Almarai',
                  fontWeight: 700,
                  fontStyle: 'Bold',
                  fontSize: '12px',
                  leadingTrim: 'NONE',
                  lineHeight: '26px',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  verticalAlign: 'middle',
                  whiteSpace: 'nowrap'
                }}>ساعات العمل:</span>
                <span className="text-white" style={{
                  fontFamily: 'Almarai',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '26px',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  verticalAlign: 'middle',
                  whiteSpace: 'nowrap'
                }}>10:00 - 18:00, Mon - Sat</span>
              </div>
            </div>
          </div>

          {/* روابط مهمة */}
          <div className="hidden md:block mr-10">
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
              <li><a href="/about" className="hover:text-white transition-colors">عن المجمع</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="/return-policy" className="hover:text-white transition-colors">سياسة الإرجاع</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">المدونة</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">تواصل معنا</a></li>
              <li><a href="/support" className="hover:text-white transition-colors">الدعم</a></li>
            </ul>
          </div>

          {/* الحساب */}
          <div className="hidden md:block">
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
          <div className="hidden md:block">
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
      <div id="contact-section" className="bg-[#085c96] py-4" dir="ltr">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          <div className="opacity-80 text-center">
            <p style={{
              fontFamily: 'Almarai',
              fontWeight: 400,
              fontStyle: 'Regular',
              fontSize: '16px',
              leadingTrim: 'NONE',
              lineHeight: '28px',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}>© 2022, مجمع غيم الطبي</p>
            <p style={{
              fontFamily: 'Almarai',
              fontWeight: 400,
              fontStyle: 'Regular',
              fontSize: '16px',
              leadingTrim: 'NONE',
              lineHeight: '28px',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}>جميع الحقوق محفوظة</p>
          </div>

          <div className="flex gap-6 font-bold text-[#9bc115]">
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <span style={{
                  fontFamily: 'Quicksand',
                  fontWeight: 700,
                  fontStyle: 'Bold',
                  fontSize: '20px',
                  leadingTrim: 'NONE',
                  lineHeight: '26px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>1900646666</span>
                <FaPhone className="text-sm" />
              </div>
              <span className="text-xs text-white" style={{
                fontFamily: 'Almarai',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '10px',
                lineHeight: '16px',
                textAlign: 'center'
              }}>الدعم 24 ساعة</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <span style={{
                  fontFamily: 'Quicksand',
                  fontWeight: 700,
                  fontStyle: 'Bold',
                  fontSize: '20px',
                  leadingTrim: 'NONE',
                  lineHeight: '26px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>1900648888</span>
                <FaPhone className="text-sm" />
              </div>
              <span className="text-xs text-white" style={{
                fontFamily: 'Almarai',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '10px',
                lineHeight: '16px',
                textAlign: 'center'
              }}>ساعات العمل: 8:00 ص الى 10:00 م</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#9bc115] flex items-center justify-center text-white">
                <FaFacebookF className="text-sm" />
              </span>
              <span className="w-6 h-6 rounded-full bg-[#9bc115] flex items-center justify-center text-white">
                <FaInstagram className="text-sm" />
              </span>
              <span className="w-6 h-6 rounded-full bg-[#9bc115] flex items-center justify-center text-white">
                <FaTwitter className="text-sm" />
              </span>
              <span className="w-6 h-6 rounded-full bg-[#9bc115] flex items-center justify-center text-white">
                <FaYoutube className="text-sm" />
              </span>
              <span className="text-lg font-bold text-white ml-auto" style={{
                fontFamily: 'Almarai',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '14px',
                leadingTrim: 'NONE',
                lineHeight: '28px',
                letterSpacing: '0%',
                textAlign: 'right',
                verticalAlign: 'middle'
              }}>تواصل معانا</span>
            </div>
            <div className="text-center">
              <span style={{
                fontFamily: 'Almarai',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '14px',
                leadingTrim: 'NONE',
                lineHeight: '28px',
                letterSpacing: '0%',
                textAlign: 'right',
                verticalAlign: 'middle'
              }}>الرقم الضريبي: 310908705600003</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
