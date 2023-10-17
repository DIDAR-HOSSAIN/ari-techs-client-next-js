import { Carousel } from 'antd';
import slide from "@/assets/images/resource-images/slider-image/ladies.jpg";
import slide1 from "@/assets/images/resource-images/slider-image/office.jpg";
import slide2 from "@/assets/images/resource-images/slider-image/background.jpg";
import Image from 'next/image';


const CarouselSlide = () => {
  return (
    <div style={{marginTop:"20px"}}>
      <Carousel autoplay>
        <div>
          <Image
            width={1600}
            height={500}
            src={slide}
            alt="Image 1"
          />
        </div>
        <div>
          <Image
            width={1600}
            height={500}
            src={slide1}
            alt="Image 2"
          />
        </div>
        <div>
          <Image
            width={1600}
            height={500}
            src={slide2}
            alt="Image 3"
          />
        </div>
        {/* Add more div elements for additional images */}
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
