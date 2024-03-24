import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// const handleDragStart = (e) => e.preventDefault();

interface Images {
  id: number;
  image: string;
}
interface ChildProps {
  images: Images[];
}
const MyCarousel = ({ images }: ChildProps) => {
  const items = images.map((image) => {
    <img
      src={image.image}
      key={image.id}
      alt={`Image ${image.id}`}
      // onDragStart={handleDragStart}
    />;
  });
  const responsive = {
    200: {
      items: 10,
    },
    512: {
      items: 12,
    },
    1024: {
      items: 14,
    },
  };

  return (
    <>
      {images && (
        <div className="">
          &&{" "}
          <AliceCarousel
            autoPlayInterval={2000}
            autoPlay
            infinite
            // responsive={responsive}
            mouseTracking
            disableButtonsControls
            disableDotsControls
          >
            {images.map((image) => (
              <img src={image.image} key={image.id} />
            ))}
          </AliceCarousel>
        </div>
      )}
    </>
  );
};

export default MyCarousel;
