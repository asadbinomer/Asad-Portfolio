import React, { useState } from 'react';
import img1 from '../../../assets/Dribbble.png';
import img2 from '../../../assets/Dribbble2.png';
import img3 from '../../../assets/Dribbble3.png';
import img4 from '../../../assets/Dribbble4.png';

function Section6() {
  const originalImages = [img1, img2, img3, img4];
  const images = Array(200)
    .fill(null)
    .flatMap(() => originalImages); // Repeat images 200 times

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col gap-[60px] max-[450px]:px-[20px] max-[640px]:px-[50px] mb-[100px] items-center">
      <div className="w-full flex items-center justify-between max-w-[1100px] max-[640px]:px-[50px] max-[450px]:px-[20px]">
        <h1 className="text-[48px] font-semibold max-[450px]:text-[25px] max-[640px]:text-[35px]">
          Latest Dribbble Shots
        </h1>
        <div className="flex items-center gap-[24px]">
          <div
            onClick={prevSlide}
            className="w-[50px] h-[50px] cursor-pointer flex items-center justify-center border-2 border-[#222628] rounded-full"
          >
            <i className="ri-arrow-left-line text-[22px] text-[#1777E5]"></i>
          </div>
          <div
            onClick={nextSlide}
            className="w-[50px] h-[50px] cursor-pointer flex items-center justify-center border-2 border-[#222628] rounded-full"
          >
            <i className="ri-arrow-right-line text-[22px] text-[#1777E5]"></i>
          </div>
        </div>
      </div>

      <div className="overflow-hidden w-full max-w-[1100px] max-[450px]:ml-[0px]">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-[24px]"
          style={{
            transform: `translateX(-${currentIndex * (350 + 24)}px)`,
            width: `${images.length * (350 + 24)}px`,
          }}
        >
          {images.map((image, index) => {
            let opacityClass = 'opacity-100';

            if (index === currentIndex + 3 || (index === 0 && currentIndex === images.length - 3)) {
              opacityClass = 'opacity-30';
            }

            return (
              <img
                key={index}
                src={image}
                alt={`Dribbble Shot ${index + 1}`}
                className={`w-[350px] h-[250px] flex-shrink-0 transition-opacity duration-300 ${opacityClass} max-[640px]:w-[250px] max-[450px]:w-[200px] max-[640px]:h-[180px] max-[450px]:h-[150px]`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Section6;
