import { aspergit } from '@/fonts';
import ContributorCard from '../components/cards/ContributorCard';
import ColoredText from '../components/ColoredText';
import SlideLeftAnimation from '../components/SlideLeftAnimation';
import SlideRightAnimation from '../components/SlideRightAnimation';

const contributors = [
  {
    name: 'John Doe',
    title: 'Software Engineer',
    imageName: 'dejan',
  },
  {
    name: 'Jane Smith',
    title: 'UX Designer',
    imageName: 'andrea',
  },
  {
    name: 'Bob Johnson',
    title: 'Data Scientist',
    imageName: 'kozomora',
  },
  {
    name: 'Alice Williams',
    title: 'Frontend Developer',
    imageName: 'stefan',
  },
  {
    name: 'Charlie Brown',
    title: 'Graphic Designer',
    imageName: 'tim',
  },
  {
    name: 'Enim adifesli',
    title: 'joinTheCommunity',
    imageName: 'nncontributor',
  },
];

export default function ContributorsSection() {
  return (
    <div className="w-full mb-16  md:mb-32">
      <SlideLeftAnimation>
        <h2
          className={`${aspergit.className}  text-white uppercase h2-xs sm:h2-sm md:h2-md xl:h2-xl mb-10 md:mb-20 text-left`}
        >
          Contributors
        </h2>
      </SlideLeftAnimation>
      <SlideRightAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-10 xl:gap-24 w-full mb-10 md:mb-20">
          {contributors.map((member, index) => (
            <ContributorCard
              key={index}
              name={member.name}
              titule={member.title}
              imageName={member.imageName}
            />
          ))}
        </div>
      </SlideRightAnimation>
      <SlideLeftAnimation>
        <div className="flex">
          <h3
            className={`${aspergit.className}  text-white h3-xs sm:h3-sm md:h3-md xl:h3-xl text-left pr-2`}
          >
            . . .and{'  '}
          </h3>
          <ColoredText text="20+ people" />
          <h3
            className={`${aspergit.className}  text-white h3-xs sm:h3-sm md:h3-md xl:h3-xl text-left pl-2`}
          >
            {' '}
            designing
          </h3>
        </div>
        <div className="flex">
          <h3
            className={`${aspergit.className}  text-white h3-xs sm:h3-sm md:h3-md xl:h3-xl text-left pr-2`}
          >
            the{''}
          </h3>
          <ColoredText text="future." />
        </div>
      </SlideLeftAnimation>
    </div>
  );
}
