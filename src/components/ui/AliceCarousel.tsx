import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useState } from "react";
// const handleDragStart = (e) => e.preventDefault();

interface Images {
  id: number;
  image: string;
}
interface ChildProps {
  images: Images[];
}
const MyCarousel = ({ images }: ChildProps) => {
  // const items = images.map((image) => {
  //   <img
  //     src={image.image}
  //     key={image.id}
  //     alt={`Image ${image.id}`}
  //     // onDragStart={handleDragStart}
  //   />;
  // });
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
      {images ? (
        <div className="opacity-1 hover:scale-105 transition-all  cursor-pointer">
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
              <img src={image.image} key={image.id} className="" />
            ))}
          </AliceCarousel>
        </div>
      ) : (
        <AliceCarousel
          autoPlayInterval={2000}
          autoPlay
          infinite
          mouseTracking
          disableButtonsControls
          disableDotsControls
        >
          <img
            src={
              "https://static3.depositphotos.com/1006009/206/i/450/depositphotos_2061693-stock-photo-no-image-available-text-on.jpg"
            }
            key={1}
            className="opacity-0"
          />
        </AliceCarousel>
      )}
    </>
  );
};

export default MyCarousel;
