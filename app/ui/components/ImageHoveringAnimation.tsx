import { Tilt } from 'react-tilt';
import Image from 'next/image';

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 10000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
};

interface ImageHoveringAnimationProps {
  alt: string;
  src: string | any;
}

const ImageHoveringAnimation: React.FC<ImageHoveringAnimationProps> = ({
  alt,
  src,
}) => {
  return (
    <div className="bg-purple p-2">
      <Tilt options={defaultOptions} className="w-full bg-purple">
        <Image className="object-cover w-full h-full " src={src} alt={alt} />
      </Tilt>
    </div>
  );
};

export default ImageHoveringAnimation;
