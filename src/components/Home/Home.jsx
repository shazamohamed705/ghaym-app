import React from 'react';
import MainLayout from '../../layouts/mainlayouts';
import WelcomeSection from './sections/WelcomeSection';
import ServicesSection from './sections/ServicesSection';
import FeaturesSection from './sections/FeaturesSection';
import CTASection from './sections/CTASection';
import StatsSection from './sections/StatsSection';
import WhyChooseSection from './sections/WhyChooseSection';
import TestimonialsSection from './sections/TestimonialsSection';
function Home() {
  return (
    <MainLayout>
<WelcomeSection/>
<ServicesSection/>
<FeaturesSection/>
<CTASection/>
<StatsSection />
<WhyChooseSection />
<TestimonialsSection/>
    </MainLayout>
  );
}

export default Home;
