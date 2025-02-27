import { Box, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { ROUTES, UI_TEXTS } from "../../config/constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MotionBox = motion.create(Box);

const ServiceCTA = () => {
  const theme = useTheme();

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        position: "relative",
        p: { xs: 4, md: 8 },
        borderRadius: "30px",
        overflow: "hidden",
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
    >
      {/* Background Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}1A, ${theme.palette.secondary.main}1A)`,
          zIndex: -1,
        }}
      />

      {/* Animated Decorative Elements */}
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
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "200px",
          height: "200px",
          background: `radial-gradient(circle, ${theme.palette.primary.light}40 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(40px)",
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
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "150px",
          height: "150px",
          background: `radial-gradient(circle, ${theme.palette.secondary.main}40 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(30px)",
          zIndex: -1,
        }}
      />

      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 3,
          background: `linear-gradient(90deg, ${theme.palette.common.white}, ${theme.palette.primary.light})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {UI_TEXTS.sections.servicesPage.cta.title}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          color: theme.palette.text.secondary,
          mb: 6,
          maxWidth: "800px",
          mx: "auto",
          lineHeight: 1.8,
        }}
      >
        {UI_TEXTS.sections.servicesPage.cta.description}
      </Typography>

      <Button
        variant="contained"
        component={RouterLink}
        to={ROUTES.CONTACT}
        endIcon={<ArrowForwardIcon />}
        sx={{
          py: 2,
          px: 6,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          borderRadius: theme.shape.borderRadius * 4,
          fontSize: "1.1rem",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: theme.shadows[4],
          background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
          border: "none",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: theme.shadows[8],
            background: `linear-gradient(45deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          },
          transition: "all 0.3s ease",
        }}
      >
        Contactar Ahora
      </Button>
    </MotionBox>
  );
};

export default ServiceCTA;
