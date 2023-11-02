import React from 'react';
import { Carousel } from 'antd';
import slide from "@/assets/images/resource-images/slider-image/ladies.jpg";
import slide1 from "@/assets/images/resource-images/slider-image/office.jpg";
import slide2 from "@/assets/images/resource-images/slider-image/background.jpg";
import Image from 'next/image';
import "@/app/carousel.module.css"; // Import styles for small devices

const CarouselSlide = () => {
  return (
    <div style={{ marginTop: "20px", borderRadius: "20px" }}>
      <Carousel autoplay>
        <div>
          <ImageSlide image={slide} />
        </div>
        <div>
          <ImageSlide image={slide1} />
        </div>
        <div>
          <ImageSlide image={slide2} />
        </div>
        {/* Add more div elements for additional images */}
      </Carousel>
    </div>
  );
};

const ImageSlide = ({ image }: any) => {
  return (
    <div className="image-container">
      <div className="image">
        <Image
          src={image}
          alt="Image"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default CarouselSlide;
