import { aspergit } from '@/fonts';
import SlideLeftAnimation from '../components/SlideLeftAnimation';
import SlideRightAnimation from '../components/SlideRightAnimation';
import VideoComponent from '../components/VideoComponent';

export default function IntroductionSection() {
  return (
    <div className="w-full text-left mb-16  md:mb-52">
      <SlideRightAnimation>
        <div className="w-full lg:w-2/3 break-all xl:break-normal mb-10 md:mb-20">
          <h2
            className={`${aspergit.className}  text-white uppercase h2-xs sm:h2-sm md:h2-md xl:h2-xl mb-5 md:mb-5`}
          >
            INTRODUCTION TO OUR WORKFLOW
          </h2>
        </div>
      </SlideRightAnimation>
      <SlideLeftAnimation>
        <VideoComponent videoId="-Evi9y74A0s" />
      </SlideLeftAnimation>
    </div>
  );
}
