import { aspergit, futura } from '@/fonts';
import Image from 'next/image';
import dolor from '@/public/assets/images/dolor.png';
import SlideRightAnimation from '../components/SlideRightAnimation';
import SlideLeftAnimation from '../components/SlideLeftAnimation';

export default function TextBellowImageSection() {
  return (
    <div className="w-full text-left mb-16  md:mb-32 ">
      <div className=" w-full md:w-2/3 text-left">
        <SlideRightAnimation>
          <h2
            className={`${aspergit.className}  text-white uppercase h2-xs sm:h2-sm md:h2-md xl:h2-xl mb-10 md:mb-20`}
          >
            <span
              className={`${aspergit.className}  text-lemonGreen uppercase h2-xs sm:h2-sm md:h2-md xl:h2-xl`}
            >
              ipsump
            </span>{' '}
            Dolor sit
          </h2>
        </SlideRightAnimation>
        <SlideLeftAnimation>
          <article
            className={`${futura.className} body-sm md:body-lg text-white mb-6 text-left`}
          >
            Lorem ipsum dolor sit amet consectetur. Ultrices in justo sit
            tincidunt lacinia id auctor eros dignissim. In id nec netus sagittis
            ornare duis turpis. Enim pellentesque suscipit ante nec vestibulum
            proin eget viverra. Eget vehicula massa urna tristique rhoncus ut.
            Cursus non pretium aliquet ipsum gravida fames aliquet. Egestas eget
            in congue augue. Sed arcu condimentum varius vitae cursus. Quis non
            tellus id faucibus. Augue nec aliquam varius mauris mauris tortor.
            Mauris odio a ultrices porttitor amet at.
            <br />
            <br /> Eget vehicula massa urna tristique rhoncus ut. Cursus non
            pretium aliquet ipsum gravida fames aliquet. Egestas eget in congue
            augue.
          </article>
        </SlideLeftAnimation>
      </div>
      <div>
        <SlideRightAnimation>
          <Image
            className="object-cover w-full h-full "
            src={dolor}
            alt="dolor"
          />
        </SlideRightAnimation>
      </div>
    </div>
  );
}
