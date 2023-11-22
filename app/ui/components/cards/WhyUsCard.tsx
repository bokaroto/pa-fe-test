import { aspergit, futura } from '@/fonts';

interface WhyUsCardProps {
  title: string;
  content: string;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ title, content }) => {
  return (
    <div className="box sm:w-[260px] md:w-[290px] xl:w-[320px]">
      <span></span>
      <div className="content">
        <h4
          className={`${aspergit.className}  text-white uppercase h4-xs sm:h4-sm md:h4-md xl:h4-xl mb-8`}
        >
          {title}
        </h4>
        <p
          className={`${futura.className} body-sm md:body-lg text-white mt-auto flex-grow  `}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
