import { Carousel } from 'antd';
import slide from "@/assets/images/resource-images/slider-image/ladies.jpg";
import slide1 from "@/assets/images/resource-images/slider-image/office.jpg";
import slide2 from "@/assets/images/resource-images/slider-image/background.jpg";
import Image from 'next/image';

const CarouselSlide = () => {
  const imageStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "500px", // Set the desired height of your Carousel
  };

  return (
    <div style={{ marginTop: "20px", borderRadius:"20px" }}>
      <Carousel autoplay>
        <div>
          <div style={imageStyle}>
            <Image
              width={1600}
              height={500}
              src={slide}
              alt="Image 1"
            />
          </div>
        </div>
        <div>
          <div style={imageStyle}>
            <Image
              width={1600}
              height={500}
              src={slide1}
              alt="Image 2"
            />
          </div>
        </div>
        <div>
          <div style={imageStyle}>
            <Image
              width={1600}
              height={500}
              src={slide2}
              alt="Image 3"
            />
          </div>
        </div>
        {/* Add more div elements for additional images */}
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
