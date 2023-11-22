import { aspergit, futura } from '@/fonts';
import Image from 'next/image';
import GlitchImage from '../components/GlitchImage';
import ColoredText from '../components/ColoredText';

import quotationMarks from '@/public/assets/shapes/quotationMarks.svg';
import SlideRightAnimation from '../components/SlideRightAnimation';
import SlideLeftAnimation from '../components/SlideLeftAnimation';

export default function CtoSection() {
  return (
    <div className="w-full p-5 flex flex-col md:flex-row md:justify-between justify-center items-center mb-16  md:mb-32">
      <SlideRightAnimation>
        <div className="w-full md:w-96 h-auto">
          <GlitchImage />
        </div>
      </SlideRightAnimation>
      <SlideLeftAnimation>
        <div>
          <ColoredText text="Name Lastname PhD" />
          <p
            className={`${aspergit.className} body-sm md:body-lg text-white mb-6 text-left`}
          >
            Our Founder
          </p>
          <div className="w-full flex justify-start items-start">
            <Image
              className="object-cover w-full h-full "
              src={quotationMarks}
              alt="quotationMarks"
            />
            <article
              className={`${futura.className} small-sm md:small-lg text-white mb-6 text-left pl-2`}
            >
              Lorem ipsum dolor sit amet consectetur. Ultrices in justo sit
              tincidunt lacinia id auctor eros dignissim. In id nec netus
              sagittis ornare duis turpis. Enim pellentesque suscipit ante nec
              vestibulum proin eget viverra. Eget vehicula massa urna tristique
              rhoncus ut. Cursus non pretium aliquet ipsum gravida fames
              aliquet. Egestas eget in congue augue. Sed arcu condimentum varius
              vitae cursus. Quis non tellus id faucibus. Augue nec aliquam
              varius mauris mauris tortor. Mauris odio a ultrices porttitor amet
              at. Eget vehicula massa urna tristique rhoncus ut. Cursus non
              pretium aliquet ipsum gravida fames aliquet. Egestas eget in
              congue augue.
            </article>
          </div>
        </div>
      </SlideLeftAnimation>
    </div>
  );
}
