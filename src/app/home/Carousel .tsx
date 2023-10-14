import { Carousel, Image } from 'antd';
import slide from "../../../public/images/resource-images/background.jpg";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselSlide = () => {
  return (
    <Carousel autoplay>
      <div>
        <Image
          width={200}
          src={slide}
          alt="Image 1"
        />
      </div>
      <div>
        <Image
          width={200}
          src={slide}
          alt="Image 2"
        />
      </div>
      <div>
        <Image
          width={200}
          height={200}
          src=""
          alt="Image 3"
        />
      </div>
      {/* Add more div elements for additional images */}
    </Carousel>
  );
};

export default CarouselSlide;
