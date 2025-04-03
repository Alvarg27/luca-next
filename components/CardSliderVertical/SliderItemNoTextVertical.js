// Example update for SliderItemNoText component
const SliderItemNoTextVertical = ({ item }) => {
    return (
      <div className="h-full w-full rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative aspect-[3/4] w-full">
          <img 
            src={item.imageUrl} 
            alt={item.title || "Carousel item"} 
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
      </div>
    );
  };

export default SliderItemNoTextVertical;