import { Box, useTheme } from "@mui/material";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import BenefitsSection from "../components/home/BenefitsSection";
import ServicesSection from "../components/home/ServicesSection";

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.palette.primary.dark}40 100%)`,
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "url('https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg')",
          backgroundSize: "500px",
          opacity: 0.03,
          zIndex: -1,
        },
      }}
    >
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <ServicesSection />
    </Box>
  );
};

export default Home;
