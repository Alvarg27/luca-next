import EvntCarousel from './EvntCarousel';
import ExpCarousel from './ExpCarousel';

const CarouselWithContent = () => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <ExpCarousel />
      <EvntCarousel />
    </div>
  );
};
export default CarouselWithContent;
