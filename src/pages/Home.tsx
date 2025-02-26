import { Box } from "@mui/material";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import StatsSection from "../components/home/StatsSection";
import BenefitsSection from "../components/home/BenefitsSection";

const Home = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <ServicesSection />
    </Box>
  );
};

export default Home;
