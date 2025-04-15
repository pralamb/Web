import { Box, Typography, Button, useTheme, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { ROUTES } from "../../config/constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const MotionBox = motion.create(Box);

const ServiceCTA = () => {
  const theme = useTheme();

  const benefits = [
    "Experiencia en normatividad ambiental",
    "Soluciones personalizadas para empresas",
    "Acompañamiento en todo el proceso",
    "Profesionales especializados",
    "Resultados medibles y efectivos",
    "Garantía de cumplimiento legal"
  ];

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
      }}
    >


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

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
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
            ¿Necesita asesoría ambiental profesional?
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            Nuestro equipo de expertos está listo para ayudarle a cumplir con la normatividad ambiental y optimizar sus procesos.
          </Typography>

          <Box sx={{ mb: 5 }}>
            <Grid container spacing={2}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CheckCircleOutlineIcon sx={{ color: theme.palette.primary.light, mr: 1 }} />
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                      {benefit}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

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
        </Grid>
        
        <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            sx={{
              backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              height: "400px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              position: "relative",
              overflow: "hidden",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.2)",
                backdropFilter: "blur(2px)",
              }
            }}
          />
        </Grid>
      </Grid>
    </MotionBox>
  );
};

export default ServiceCTA;
