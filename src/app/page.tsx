import Services from "@/components/ui/CardService";
import CarouselSlide from "../components/ui/Carousel ";
import WhyChooseUs from "@/components/ui/why-choose-us";
import FreeEvaluation from "@/components/ui/free-evaluation";
import FooterPage from "@/components/ui/footer";


const HomePage = () => {


  return (
    <div>
      <CarouselSlide />
      <Services />
      <WhyChooseUs />
      <FreeEvaluation />
      <FooterPage />
    </div>
  );
};

export default HomePage;