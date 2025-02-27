import { Box, Container, useTheme } from "@mui/material";
import ServiceHeader from "../components/services/ServiceHeader";
import ServiceGrid from "../components/services/ServiceGrid";
import ServiceCTA from "../components/services/ServiceCTA";
import { motion, useScroll, useTransform } from "framer-motion";

const Services = () => {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.colors.background}E6, ${theme.palette.primary.dark}80)`,
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
      {/* Decorative Elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "fixed",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, ${theme.palette.primary.light}40 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: -1,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        sx={{
          position: "fixed",
          bottom: "20%",
          left: "5%",
          width: "250px",
          height: "250px",
          background: `radial-gradient(circle, ${theme.palette.secondary.main}40 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: -1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <ServiceHeader />
        <ServiceGrid />
        <ServiceCTA />
      </Container>
    </Box>
  );
};

export default Services;
