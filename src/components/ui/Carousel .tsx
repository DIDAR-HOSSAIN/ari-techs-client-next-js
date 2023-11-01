import React from 'react';
import { Carousel } from 'antd';
import slide from "@/assets/images/resource-images/slider-image/ladies.jpg";
import slide1 from "@/assets/images/resource-images/slider-image/office.jpg";
import slide2 from "@/assets/images/resource-images/slider-image/background.jpg";
import Image from 'next/image';

const CarouselSlide = () => {
  return (
    <div style={{ marginTop: "20px", borderRadius: "20px" }}>
      <Carousel autoplay>
        <div>
          <ImageSlide image={slide} height={500} width={1400} />
        </div>
        <div>
          <ImageSlide image={slide1} height={500} width={1400} />
        </div>
        <div>
          <ImageSlide image={slide2} height={500} width={1400} />
        </div>
        {/* Add more div elements for additional images */}
      </Carousel>
    </div>
  );
};

const ImageSlide = ({ image, height, width }:any) => {
  const imageStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: `${height}px`,
  };

  return (
    <div>
      <div style={imageStyle}>
        <Image
          width={width}
          height={height}
          src={image}
          alt="Image"
        />
      </div>
    </div>
  );
};

export default CarouselSlide;
