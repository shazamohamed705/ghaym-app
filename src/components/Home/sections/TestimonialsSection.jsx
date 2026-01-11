import React from 'react';

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Mohamed',
      image: '/Ellipse 1.png',
      rating: 5,
      text: 'جئت إلى هذا المستشفى بسبب السمعة الطيبة للدكتورة جهاد، ولم أندم على ذلك. طبيبة واثقة وهادئة وذات أخلاق عالية، ولم أجد التشخيص الصحيح إلا لديها. الحمد لله ثم لها، كل شيء أصبح أفضل الآن، وإن كان المستشفى يستحق خمس نجوم فذلك بفضلها.'
    },
    {
      id: 2,
      name: 'Fatima Ali',
      image: '/Ellipse 2.png',
      rating: 5,
      text: 'جئت إلى هذا المستشفى بسبب السمعة الطيبة للدكتورة جهاد، ولم أندم على ذلك. طبيبة واثقة وهادئة وذات أخلاق عالية، ولم أجد التشخيص الصحيح إلا لديها. الحمد لله ثم لها، كل شيء أصبح أفضل الآن، وإن كان المستشفى يستحق خمس نجوم فذلك بفضلها.'
    },
    {
      id: 3,
      name: 'Khaled Hassan',
      image: '/Ellipse 6.png',
      rating: 5,
      text: 'جئت إلى هذا المستشفى بسبب السمعة الطيبة للدكتورة جهاد، ولم أندم على ذلك. طبيبة واثقة وهادئة وذات أخلاق عالية، ولم أجد التشخيص الصحيح إلا لديها. الحمد لله ثم لها، كل شيء أصبح أفضل الآن، وإن كان المستشفى يستحق خمس نجوم فذلك بفضلها.'
    },
    {
      id: 4,
      name: 'Sara Mahmoud',
      image: '/Ellipse 5.png',
      rating: 5,
      text: 'جئت إلى هذا المستشفى بسبب السمعة الطيبة للدكتورة جهاد، ولم أندم على ذلك. طبيبة واثقة وهادئة وذات أخلاق عالية، ولم أجد التشخيص الصحيح إلا لديها. الحمد لله ثم لها، كل شيء أصبح أفضل الآن، وإن كان المستشفى يستحق خمس نجوم فذلك بفضلها.'
    }
  ];

  return (
    <section className="w-full py-16 bg-white" dir="rtl">

      <div className="container mx-auto px-4">
        <div className="max-w-[1500px] mx-auto">
          {/* العنوان */}
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{
                fontFamily: 'Almarai',
                fontWeight: 700
              }}
            >
              آراء <span className="text-[#a6c80d]">عملائنا</span>
            </h2>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: 'Almarai',
                fontWeight: 400
              }}
            >
              ما يقوله عملاؤنا عن تجربتهم معنا
            </p>
          </div>

          {/* البوكس */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">

            {testimonials.map((testimonial) => (
             <div
             key={testimonial.id}
             className="
               bg-white rounded-xl shadow-lg text-center
               hover:shadow-2xl transition-all duration-300
               w-full max-w-[550px] h-[250px]
               flex flex-col
               p-6
               relative
             "
             style={{
               boxShadow: '0 10px 25px rgba(0, 113, 189, 0.3), 0 4px 10px rgba(0, 113, 189, 0.2)'
             }}
           >
           
            
                   
           {/* أيقونة علامة الاقتباس */}
           <img
             src={
               testimonial.id === 1 ? '/Vector 1.png' :
               testimonial.id === 2 ? '/Inverted Commas.png' :
               testimonial.id === 3 ? '/Vector.png' :
               '/Vector.png'
             }
             alt="Quote Icon"
             className="absolute"
             style={{
               width: '40.64px',
               height: '32.51px',
               top: '35px',
               left: '16px',
               opacity: 1
             }}
           />

                {/* الصورة الدائرية */}
                <div className="-mt-10 mb-4">
                  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* الاسم والرتبة */}
                <h3
                  className="text-base font-bold text-gray-900 mb-1"
                  style={{
                    fontFamily: 'Almarai',
                    fontWeight: 700
                  }}
                >
                  {testimonial.name}
                </h3>

                {/* التقييم */}
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* الوصف */}
                <p
  className="text-gray-600 text-sm leading-relaxed line-clamp-6"
  style={{ fontFamily: 'Almarai' }}
>
  "{testimonial.text}"
</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
