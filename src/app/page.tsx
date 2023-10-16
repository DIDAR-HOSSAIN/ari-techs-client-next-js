import Services from "@/components/ui/Card";
import CarouselSlide from "./home/Carousel ";


const HomePage = () => {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop:"20px" }}>
      <CarouselSlide />
      <Services />
    </div>
  );
};

export default HomePage;