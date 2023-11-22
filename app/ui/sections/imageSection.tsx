import ImageHoveringAnimation from '../components/ImageHoveringAnimation';

import desctopCode from '@/public/assets/images/desctopCode.png';

export default function ImageSection() {
  return (
    <div className=" w-full flex justify-center items-center flex-col overflow-hidden mb-16  md:mb-32">
      <div className=" w-full overflow">
        <ImageHoveringAnimation src={desctopCode} alt="desctopCode" />
      </div>
    </div>
  );
}
