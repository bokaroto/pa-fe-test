import { aspergit } from '@/fonts';
import WhyUsCard from '../components/cards/WhyUsCard';
import SlideLeftAnimation from '../components/SlideLeftAnimation';
import SlideRightAnimation from '../components/SlideRightAnimation';

const cardData = [
  {
    title: 'Vivamus id erat',
    content:
      'Augue ut condimentum odio, nec ullamcorper justo. Vestibulum bibendum felis sit amet odio varius, nec blandit felis faucibus.',
  },
  {
    title: 'Aenean eget efficitur',
    content:
      'Turpis. Nullam vel metus vel velit vehicula hendrerit id non velit. Sed non arcu et dui bibendum fermentum.',
  },
  {
    title: 'Vivamus id erat',
    content:
      'Augue ut condimentum odio, nec ullamcorper justo. Vestibulum bibendum felis sit amet odio varius, nec blandit felis faucibus.',
  },
  {
    title: 'Cras vehicula mauris',
    content:
      'Euismod lacus vel, sodales ligula. Integer imperdiet orci ut sapien hendrerit, in eleifend ipsum cursus.',
  },
  {
    title: 'Quisque euismod ante',
    content:
      'Sit amet congue elit. Quisque pellentesque arcu vel velit blandit, ut hendrerit justo feugiat.',
  },
  {
    title: 'Aenean eget efficitur',
    content:
      'Turpis. Nullam vel metus vel velit vehicula hendrerit id non velit. Sed non arcu et dui bibendum fermentum.',
  },
];

export default function WhyUsSection() {
  return (
    <div className="w-full text-left mb-16  md:mb-32 relative">
      <SlideLeftAnimation>
        <h2
          className={`${aspergit.className}  text-white uppercase h2-xs sm:h2-sm md:h2-md xl:h2-xl mb-5 md:mb-5`}
        >
          <span
            className={`${aspergit.className}  text-lemonGreen uppercase h2-xs sm:h2-sm md:h2-md xl:h2-xl`}
          >
            why
          </span>{' '}
          us?
        </h2>
      </SlideLeftAnimation>
      <SlideRightAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-10 xl:gap-24 w-full container">
          {cardData.map((card, index) => (
            <WhyUsCard key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </SlideRightAnimation>
    </div>
  );
}
