import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import MainNavbar from '../Navbar/MainNavbar';
import BannerCarousel from '../Banner/BannerCarousel';
import Footer from '../footer/footer';
import BookingFilter from './BookingFilter';

function Booking() {
  const [formData, setFormData] = useState({
    specialization: '',
    doctor: '',
    date: ''
  });

  const [showDoctors, setShowDoctors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Filter states
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data for filters
  const uniqueCities = ['الرياض', 'جدة', 'الدمام', 'الخبر', 'المدينة المنورة'];
  const salons = [
    { id: 1, salon_name: 'مركز الرياض الطبي' },
    { id: 2, salon_name: 'عيادة الدكتور أحمد' },
    { id: 3, salon_name: 'مستشفى الملك عبدالعزيز' }
  ];
  const categories = [
    { id: 1, title_ar: 'طب الأسنان', title: 'Dentistry' },
    { id: 2, title_ar: 'الجلدية', title: 'Dermatology' },
    { id: 3, title_ar: 'التجميل', title: 'Cosmetic' }
  ];
  const doctorNames = ['د. أحمد محمد', 'د. فاطمة علي', 'د. خالد حسن', 'د. سارة محمود'];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Show loading and simulate search delay
    setIsLoading(true);
    setShowDoctors(false);

    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      setShowDoctors(true);
      console.log('Searching with:', formData);
    }, 2000); // 2 seconds delay
  };

  // Mock doctors data - you can replace this with real data from API
  const doctors = [
    {
      id: 1,
      name: 'د. أحمد محمد',
      specialization: 'طب الأسنان',
      image: '/Ellipse 4.png', // You can add actual doctor images
      experience: '15 سنة',
      rating: 4.8,
      availableTimes: ['9:00 ص', '10:00 ص', '2:00 م', '4:00 م']
    },
    {
      id: 2,
      name: 'د. فاطمة علي',
      specialization: 'الجلدية',
      image: '/Ellipse 3.png',
      experience: '12 سنة',
      rating: 4.9,
      availableTimes: ['8:00 ص', '11:00 ص', '1:00 م', '3:00 م']
    },
    {
      id: 3,
      name: 'د. خالد حسن',
      specialization: 'التجميل',
      image: '/Ellipse 2.png',
      experience: '10 سنة',
      rating: 4.7,
      availableTimes: ['9:30 ص', '12:00 م', '2:30 م', '5:00 م']
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    if (formData.specialization) {
      // Map form values to doctor specializations
      const specializationMap = {
        'dentistry': 'طب الأسنان',
        'dermatology': 'الجلدية',
        'cosmetic': 'التجميل'
      };
      const mappedSpecialization = specializationMap[formData.specialization];
      return doctor.specialization === mappedSpecialization;
    }
    return true; // Show all if no specialization selected
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="ltr">
      {/* Navbar */}
      <Navbar />
      <MainNavbar />

      {/* Banner Section */}
      <section className="w-full ">
        <BannerCarousel />
      </section>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="rounded-lg p-6 md:p-8 bg-white shadow-2xl" dir="rtl"
             style={{
               boxShadow: '0 10px 25px rgba(0, 113, 189, 0.3), 0 4px 10px rgba(0, 113, 189, 0.2)'
             }}>
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
          <form onSubmit={handleSearch} className="flex flex-col gap-4 md:flex-row md:items-end">
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

      {/* Doctors Cards Section */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            style={{
              fontFamily: 'Almarai',
              fontWeight: 700
            }}
          >
            الأطباء المتاحون
          </h2>

          {/* Main Content Layout with Filter on Right */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Doctors Cards */}
            <div className="flex-1">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
                  </div>
                  <p className="mt-4 text-blue-600 font-semibold" style={{ fontFamily: 'Almarai' }}>
                    جاري البحث عن الأطباء...
                  </p>
                </div>
              ) : showDoctors ? (
                filteredDoctors.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-8">
                    {filteredDoctors.map((doctor) => (
                      <div
                        key={doctor.id}
                        className="bg-white rounded-2xl
                        shadow-2xl shadow-blue-200/40 hover:shadow-blue-300/60
                        transition-all duration-500
                        border border-gray-100
                        flex flex-col
                        w-64 flex-shrink-0
                        pb-4"
                      >
                        {/* Header + Image */}
                        <div className="relative h-44 bg-gradient-to-r from-[#0171bd]/10 to-[#a6c80d]/10 flex justify-center">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                          className="w-32 h-32 rounded-full object-contain
                          border-4 border-white
                          shadow-xl
                          -mt-8"
                          />
                        </div>

                      {/* Content */}
                      <div className="p-6 text-center flex flex-col h-full relative" dir="rtl">
                        {/* Subtle gradient overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50/30 to-transparent pointer-events-none"></div>
                          {/* Name */}
                          <h3
                            className="text-lg font-bold text-gray-900 mb-2"
                            style={{ fontFamily: 'Almarai' }}
                          >
                            {doctor.name}
                          </h3>

                          {/* Rating */}
                          <div className="flex justify-center mb-4 animate-pulse pb-2 border-b border-blue-100">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className="w-4 h-4 text-yellow-400 fill-current mx-0.5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>

                          {/* Specialization */}
                          <p
                            className="text-[#0171bd] font-semibold text-sm mb-3"
                            style={{ fontFamily: 'Almarai' }}
                          >
                            {doctor.specialization}
                          </p>

                          {/* Experience */}
                          <div className="text-xs text-gray-600 mb-4">
                            <span className="font-semibold">{doctor.experience}</span> سنوات خبرة
                          </div>

                          {/* Available Times */}
                          <div className="mb-4 flex-grow pt-3 border-t border-blue-100">
                            <h4 className="text-xs font-semibold text-gray-700 mb-2">الأوقات المتاحة:</h4>
                            <div className="flex flex-wrap gap-1 justify-center">
                              {doctor.availableTimes.slice(0, 3).map((time, index) => (
                                <button
                                  key={index}
                                  className="px-2 py-1 text-xs bg-[#0171bd]/10 text-[#0171bd] rounded-full hover:bg-[#0171bd] hover:text-white transition-colors"
                                  style={{ fontFamily: 'Almarai' }}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Book Button */}
                          <button
                            className="w-full py-3 px-6 bg-gradient-to-r from-[#0171bd] to-[#015a99] text-white rounded-2xl font-bold text-lg hover:from-[#015a99] hover:to-[#013d73] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-auto relative z-10"
                            style={{ fontFamily: 'Almarai' }}
                          >
                            احجز الآن
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p
                      className="text-gray-600 text-lg"
                      style={{ fontFamily: 'Almarai' }}
                    >
                      لا يوجد أطباء متاحون لهذا التخصص حالياً
                    </p>
                  </div>
                )
              ) : (
                <div className="text-center py-12">
                  <p
                    className="text-gray-600 text-lg"
                    style={{ fontFamily: 'Almarai' }}
                  >
                    اضغط على "بحث" لرؤية الأطباء المتاحين
                  </p>
                </div>
              )}
            </div>

            {/* Right Side - Filters */}
            <div className="lg:w-80 flex-shrink-0 sticky top-4">
              <BookingFilter
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                selectedSalon={selectedSalon}
                setSelectedSalon={setSelectedSalon}
                selectedDoctor={selectedDoctor}
                setSelectedDoctor={setSelectedDoctor}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedPriceRange={selectedPriceRange}
                setSelectedPriceRange={setSelectedPriceRange}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                setCurrentPage={setCurrentPage}
                uniqueCities={uniqueCities}
                salons={salons}
                categories={categories}
                doctorNames={doctorNames}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Booking;
