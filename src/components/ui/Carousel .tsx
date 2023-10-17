import { Carousel } from 'antd';
import slide from "@/assets/images/resource-images/background.jpg";
import Image from 'next/image';

// const contentStyle: React.CSSProperties = {
//   marginTop:"20px",
//     textAlign: 'center',
//     // justifyItems:"center",
//     alignItems:"center",
//     width:"70%",
//     maxHeight:"50%",
//     borderRadius: "10px", // Set your desired border radius value
//     overflow: "hidden"
//     // background: '#364d79'
// };

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
            src={slide}
            alt="Image 2"
          />
        </div>
        <div>
          <Image
            width={1600}
            height={500}
            src={slide}
            alt="Image 3"
          />
        </div>
        {/* Add more div elements for additional images */}
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
