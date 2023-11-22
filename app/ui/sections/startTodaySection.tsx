import { aspergit } from '@/fonts';
import NutsAnimation from '../components/NutsAnimation';
import SlideTopAnimation from '../components/SlideTopAnimation';

export default function StartTodaySection() {
  return (
    <div className=" w-full flex flex-col justify-center items-center  mb-16  md:mb-32 ">
      <SlideTopAnimation>
        <h2
          className={`${aspergit.className}  text-white uppercase h2-xs sm:h2-sm md:h2-md xl:h2-xl text-left mb-5 md:mb-10`}
        >
          <span
            className={`${aspergit.className}  text-lemonGreen uppercase h2-xs sm:h2-sm md:h2-md xl:h2-xl`}
          >
            Start today -
          </span>{' '}
          join the network
        </h2>
      </SlideTopAnimation>
      <NutsAnimation />
    </div>
  );
}
