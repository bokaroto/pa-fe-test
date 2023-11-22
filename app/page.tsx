'use client';

import HeaderSection from './ui/sections/headerSection';
import ImageSection from './ui/sections/imageSection';
import TextBellowImageSection from './ui/sections/textBellowImageSection';
import WhyUsSection from './ui/sections/whyUsSection';
import CtoSection from './ui/sections/ctoSection';
import ContributorsSection from './ui/sections/contributorsSection';
import StartTodaySection from './ui/sections/startTodaySection';
import IntroductionSection from './ui/sections/introductionSection';
import LatestNewsSection from './ui/sections/latestNewsSection';
import SlideRightAnimation from './ui/components/SlideRightAnimation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 overflow-hidden md:p-10 mx-auto lg:p-24 relative z-20">
      <HeaderSection />
      <SlideRightAnimation>
        <ImageSection />
      </SlideRightAnimation>
      <TextBellowImageSection />
      <WhyUsSection />
      <CtoSection />
      <ContributorsSection />
      <StartTodaySection />
      <IntroductionSection />
      <LatestNewsSection />
    </main>
  );
}
