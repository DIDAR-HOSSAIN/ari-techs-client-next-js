import Services from "@/components/ui/Card";
import CarouselSlide from "./home/Carousel ";
import WhyChooseUs from "@/components/ui/why-choose-us";


const HomePage = () => {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop:"20px" }}>
      <CarouselSlide />
      <Services />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;