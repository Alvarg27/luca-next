import Circles from '../commons/Circles';
import EvntCarousel from './EvntCarousel';
import ExpCarousel from './ExpCarousel';
import LargeCircle from '../commons/LargeCircle';
import MediumCircle from '../commons/MediumCircle';
import SmallCircle from '../commons/SmallCircle';

const CarouselWithContent = () => {
  return (
    <div className="relative min-h-[500px]"> 
      <div className="flex flex-col items-center md:flex-row mt-20">
        <ExpCarousel />
        <EvntCarousel />
      </div>
      <div className="absolute w-full h-full pointer-events-none animate-spin-slow-mobile md:animate-spin-slow md:top-0 top-[150px] z-[0] transition duration-300">

    </div>
    </div>
  );
};
export default CarouselWithContent;