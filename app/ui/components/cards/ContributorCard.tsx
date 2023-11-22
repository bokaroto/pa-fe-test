import { aspergit, futura } from '@/fonts';
import Image from 'next/image';
import desctopCode from '@/public/assets/images/desctopCode.png';
import Button from '../Button';

interface ContributorCardProps {
  name: string;
  titule: string;
  imageName: string;
}

const ContributorCard: React.FC<ContributorCardProps> = ({
  name,
  titule,
  imageName,
}) => {
  return (
    <div className="wrapper">
      <div className="card " data-effect="zoom">
        <figure className="card__image">
          <Image
            src={desctopCode}
            alt="Short description"
            width={400}
            height={500}
          />
        </figure>
        <div className="card__header">
          <figure className="card__profile">
            <Image
              src={`/../../../../assets/images/contributors/${imageName}.png`}
              alt="Short description"
              width={80}
              height={80}
            />
          </figure>
        </div>
        <div className="card__body">
          <h5
            className={`${aspergit.className}   text-lemonGreen h5-xs sm:h5-sm md:h5-md xl:h5-xl`}
          >
            {name}
          </h5>
          {titule !== 'joinTheCommunity' && (
            <p
              className={`${futura.className} card__job small-sm md:small-lg text-white text-center`}
            >
              {titule}
            </p>
          )}
          {titule === 'joinTheCommunity' && (
            <Button content="join the community" href="#" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
