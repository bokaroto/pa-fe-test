import Image from 'next/image';

import discord from '@/public/assets/shapes/nutD.svg';
import github from '@/public/assets/shapes/nutG.svg';
import stack from '@/public/assets/shapes/nutS.svg';
import q from '@/public/assets/shapes/nutQ.svg';
import redit from '@/public/assets/shapes/nutR.svg';
import youtube from '@/public/assets/shapes/nutY.svg';
import SlideTopAnimation from './SlideTopAnimation';
import SlideBottomAnimation from './SlideBottomAnimation';

export default function NutsAnimation() {
  return (
    <div className="w-full flex mt-10 md:mt-20 mx-auto justify-center">
      <SlideTopAnimation>
        <Image
          className="object-cover 
        w-16 h-14 
        sm:w-32 sm:h-28
        lg:w-48 lg:h-48 animate-spin-reverse-48s"
          src={discord}
          alt="quotationMarks"
        />
      </SlideTopAnimation>
      <SlideBottomAnimation>
        <Image
          className="object-cover
        w-16 h-16
        sm:w-28 sm:h-28
        lg:w-56 lg:h-56 animate-spin-regular-54s"
          src={github}
          alt="quotationMarks"
        />
      </SlideBottomAnimation>
      <SlideTopAnimation>
        <Image
          className="object-cover 
        w-8 h-8 
        sm:w-20 sm:h-20
        lg:w-32 lg:h-32 animate-spin-reverse-58s"
          src={stack}
          alt="quotationMarks"
        />
      </SlideTopAnimation>
      <SlideBottomAnimation>
        <Image
          className="object-cover 
        w-12 h-12 
        sm:w-24 sm:h-24
        lg:w-40 lg:h-40 animate-spin-regular-54s "
          src={q}
          alt="quotationMarks"
        />
      </SlideBottomAnimation>
      <SlideTopAnimation>
        <Image
          className="object-cover 
        w-8 h-8 
        sm:w-20 sm:h-20
        lg:w-32 lg:h-32 animate-spin-reverse-6s"
          src={redit}
          alt="quotationMarks"
        />
      </SlideTopAnimation>
      <SlideBottomAnimation>
        <Image
          className="object-cover 
        w-10 h-10 
        sm:w-16 sm:h-16
        lg:w-48 lg:h-48 animate-spin-regular-54s"
          src={youtube}
          alt="quotationMarks"
        />
      </SlideBottomAnimation>
    </div>
  );
}
