import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { ROUTES } from "../../config/constants";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a2f38 0%, #0f1922 100%)",
        overflow: "hidden",
      }}
    >
      {/* Animated Background */}
      <Box
        component={motion.div}
        style={{ y, opacity }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "url('https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(26, 47, 56, 0.85), rgba(15, 25, 34, 0.95))",
          },
        }}
      />

      {/* Animated Particles */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(139, 195, 74, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          opacity: 0.3,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          y: [0, 10, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(76, 175, 80, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          opacity: 0.2,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "#8BC34A",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    letterSpacing: 2,
                    mb: 2,
                    display: "block",
                  }}
                >
                  SOLUCIONES SOSTENIBLES
                </Typography>
              </motion.div>

              <MotionTypography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 3,
                  background:
                    "linear-gradient(90deg, #ffffff 0%, #8BC34A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                Servicios <br />
                <span style={{ color: "#8BC34A" }}>Ambientales</span> Integrales
              </MotionTypography>

              <MotionTypography
                variant="h5"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  mb: 6,
                  maxWidth: "600px",
                  lineHeight: 1.8,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Comprometidos con el futuro de nuestro planeta, desarrollamos
                soluciones innovadoras para la conservación y gestión sostenible
                del medio ambiente.
              </MotionTypography>

              <MotionBox
                sx={{
                  display: "flex",
                  gap: 3,
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  component={RouterLink}
                  to={ROUTES.CONTACT}
                  className="button-hover"
                  sx={{
                    py: 2.5,
                    px: 6,
                    backgroundColor: "#8BC34A",
                    color: "white",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 10px 20px rgba(139, 195, 74, 0.3)",
                    background:
                      "linear-gradient(45deg, #8BC34A 0%, #7CB342 100%)",
                    border: "none",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 15px 30px rgba(139, 195, 74, 0.4)",
                      background:
                        "linear-gradient(45deg, #7CB342 0%, #689F38 100%)",
                    },
                    transition: "all 0.3s ease",
                    flex: { xs: "1 1 100%", sm: "0 1 auto" },
                  }}
                >
                  Conoce Nuestros Servicios
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={RouterLink}
                  to={ROUTES.ABOUT}
                  className="button-hover"
                  sx={{
                    py: 2.5,
                    px: 6,
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "white",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255,255,255,0.05)",
                    "&:hover": {
                      borderColor: "#8BC34A",
                      background: "rgba(255,255,255,0.1)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                    flex: { xs: "1 1 100%", sm: "0 1 auto" },
                  }}
                >
                  Sobre Nosotros
                </Button>
              </MotionBox>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll Indicator */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          zIndex: 2,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.9rem",
            letterSpacing: 1,
          }}
        >
          DESCUBRE MÁS
        </Typography>
        <Box
          sx={{
            width: "24px",
            height: "24px",
            borderLeft: "2px solid rgba(255,255,255,0.7)",
            borderBottom: "2px solid rgba(255,255,255,0.7)",
            transform: "rotate(-45deg)",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
