import Services from "@/components/ui/CardService";
import CarouselSlide from "../components/ui/Carousel ";
import WhyChooseUs from "@/components/ui/why-choose-us";
import FreeEvaluation from "@/components/ui/free-evaluation";
import FooterPage from "@/components/ui/footer";
import CustomService from "@/components/ui/customItService";
import YourNetwork from "@/components/ui/yourNetwork";
import ContactUs from "@/components/ui/contactUs";


const HomePage = () => {

  return (
    <div>
      <CarouselSlide />
      <Services />
      <WhyChooseUs />
      <FreeEvaluation />
      <CustomService />
      <YourNetwork />
      <ContactUs />
      <FooterPage />

    </div>
  );
};

export default HomePage;