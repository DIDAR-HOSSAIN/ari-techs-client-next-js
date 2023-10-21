import Services from "@/components/ui/CardService";
import CarouselSlide from "../components/ui/Carousel ";
import WhyChooseUs from "@/components/ui/why-choose-us";
import FreeEvaluation from "@/components/ui/free-evaluation";
import FooterPage from "@/components/ui/footer";
import CustomService from "@/components/ui/customItService";
import OurNetwork from "@/components/ui/ourNetwork";
import ContactUs from "@/components/ui/contactUs";
import Navbar from "@/components/ui/navbar";
import Search from "@/components/ui/search";


const HomePage = () => {

  return (
    <div>
      <Navbar />
      <Search />
      <CarouselSlide />
      <Services />
      <WhyChooseUs />
      <FreeEvaluation />
      <CustomService />
      <OurNetwork />
      <ContactUs />
      <FooterPage />

    </div>
  );
};

export default HomePage;