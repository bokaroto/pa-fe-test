import { aspergit, futura } from '@/fonts';
import Image from 'next/image';

interface LatestNewsCardProps {
  title: string;
  content: string;
  date: string;
  imageName: string;
}

const LatestNewsCard: React.FC<LatestNewsCardProps> = ({
  title,
  content,
  date,
  imageName,
}) => {
  return (
    <div className="wrap animate pop h-[250px] sm:h-[300px] p-2 sm:p-4">
      <div className="absolute h-full top-0 z-50  w-full flex flex-col justify-between items-start px-1 sm:px-2 py-10">
        <h5
          className={`${aspergit.className} body-sm md:body-lg text-lemonGreen mt-auto flex-grow w-1/4 `}
        >
          {title}
        </h5>
        <p
          className={`${futura.className} small-sm md:small-lg text-white  flex-grow  `}
        >
          {date}
        </p>
      </div>
      <div className="overlay relative ">
        <div className="overlay-content animate slide-left delay-2"></div>
        <div
          className="image-content animate slide delay-5"
          style={{
            backgroundImage: `url(/../../../../assets/images/${imageName}.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="dots animate">
          <div className="dot animate slide-up delay-6"></div>
          <div className="dot animate slide-up delay-7"></div>
          <div className="dot animate slide-up delay-8"></div>
        </div>
      </div>
      <div className="text bg-purple">
        <Image
          src={`/../../../../assets/images/${imageName}.png`}
          alt="tree"
          width={400}
          height={500}
          className="inset w-full sm:w-1/2 mb-3 sm:mb-2  sm:mr-3"
        />
        <p
          className={`${futura.className} body-sm md:body-lg text-white flex-grow  `}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default LatestNewsCard;
