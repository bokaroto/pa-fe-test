import React from 'react';
import { aspergit, futura } from '@/fonts';
import ImageHoveringAnimation from '../components/ImageHoveringAnimation';
import Button from '../components/Button';

import hexagonNut from '@/public/assets/shapes/hexagonNut.svg';
import hexagonLineNut from '@/public/assets/shapes/hexagonLineNut.svg';
import nonagonNut from '@/public/assets/shapes/nonagonNut.svg';
import SlideTopAnimation from '../components/SlideTopAnimation';
import SlideLeftAnimation from '../components/SlideLeftAnimation';
import SlideRightAnimation from '../components/SlideRightAnimation';
import SlideBottomAnimation from '../components/SlideBottomAnimation';

export default function HeaderSection() {
  return (
    <div className=" w-full flex justify-center items-center flex-col overflow-hidden mb-8  md:mb-32">
      <div className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] mb-28 md:mb-10">
        <SlideTopAnimation>
          <ImageHoveringAnimation src={hexagonNut} alt="hexagonNut" />
        </SlideTopAnimation>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full break-all xl:break-normal text-left">
          <h1
            className={`${aspergit.className}  text-white uppercase h1-xs sm:h1-sm md:h1-md xl:h1-xl`}
          >
            Lorem ipsum dolor sit amet{' '}
            <SlideLeftAnimation>
              <span
                className={`${aspergit.className}  text-lemonGreen uppercase h1-xs sm:h1-sm md:h1-md xl:h1-xl`}
              >
                consectetur.
              </span>
            </SlideLeftAnimation>
          </h1>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center  w-full mt-10 md:mt-2">
          <div className="flex justify-center items-center w-full md:w-1/2">
            <div className="w-[64px] h-[50px] md:w-[114px] md:h-[100px] mb-10 md:mb-2">
              <ImageHoveringAnimation
                src={hexagonLineNut}
                alt="hexagonLineNut"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-full  md:w-1/2 mb-10 md:mb-2 ">
            <SlideRightAnimation>
              <p
                className={`${futura.className} body-sm md:body-lg text-white mb-6 text-left`}
              >
                Lorem ipsum dolor sit amet consectetur. Vestibulum enim aenean
                purus nam quis.
              </p>
            </SlideRightAnimation>
            <SlideBottomAnimation>
              <Button href="#" content="join" />
            </SlideBottomAnimation>
            <div className="w-[32px] h-[32px] md:w-[76px] md:h-[75px] ml-32">
              <ImageHoveringAnimation src={nonagonNut} alt="nonagonNut" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
