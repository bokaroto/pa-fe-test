import { aspergit } from '@/fonts';
import Button from '../components/Button';
import LatestNewsCard from '../components/cards/LatestNewsCard';
import SlideBottomAnimation from '../components/SlideBottomAnimation';
import SlideLeftAnimation from '../components/SlideLeftAnimation';
import SlideRightAnimation from '../components/SlideRightAnimation';
import SlideTopAnimation from '../components/SlideTopAnimation';

export default function LatestNewsSection() {
  return (
    <div className="w-full text-left mb-16  md:mb-32">
      <SlideTopAnimation>
        <div className="w-full lg:w-2/3 break-all xl:break-normal mb-10 md:mb-20">
          <h2
            className={`${aspergit.className}  text-white uppercase h2-xs sm:h2-sm md:h2-md xl:h2-xl mb-5 md:mb-5`}
          >
            Latest news
          </h2>
        </div>
      </SlideTopAnimation>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full">
        <SlideRightAnimation>
          <LatestNewsCard
            title="Eu hac a ridiculus velit, ma... "
            content="Vel arcu, cras eget turpis tortor tristique egestas. Volutpat semper proin quisque arcu, cras eget turpis tortor tristique egestas quisqu... "
            date="21.11.2003."
            imageName="lastNews"
          />
        </SlideRightAnimation>
        <SlideLeftAnimation>
          <LatestNewsCard
            title="Eu hac a ridiculus velit, ma... "
            content="Vel arcu, cras eget turpis tortor tristique egestas. Volutpat semper proin quisque arcu, cras eget turpis tortor tristique egestas quisqu... "
            date="21.11.2003."
            imageName="lastNews"
          />
        </SlideLeftAnimation>
      </div>
      <SlideBottomAnimation>
        <div className="py-10 text-center sm:text-left">
          <Button content="view all news" href="#" />
        </div>
      </SlideBottomAnimation>
    </div>
  );
}
