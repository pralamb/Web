import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { SERVICES } from "../../config/constants";
import { useInView } from "react-intersection-observer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const ServicesSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 16 },
        position: "relative",
        background: "linear-gradient(135deg, #1a2f38 0%, #0f1922 100%)",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background: "url('/leaf-pattern.png')",
          opacity: 0.05,
          zIndex: 1,
        },
      }}
    >
      {/* Animated Background Elements */}
      <Box
        component={motion.div}
        style={{ y }}
        sx={{
          position: "absolute",
          top: "-50%",
          left: "-20%",
          width: "140%",
          height: "200%",
          background:
            "radial-gradient(circle, rgba(139, 195, 74, 0.1) 0%, transparent 60%)",
          transform: "rotate(-45deg)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          sx={{ mb: { xs: 8, md: 12 }, textAlign: "center" }}
        >
          <Typography
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
            NUESTRAS SOLUCIONES
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 800,
              color: "white",
              mb: 3,
              background: "linear-gradient(90deg, #ffffff 0%, #8BC34A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Servicios Ambientales
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: "800px",
              mx: "auto",
              mb: 8,
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.8,
            }}
          >
            Soluciones innovadoras y sostenibles para proteger nuestro planeta y
            construir un futuro más verde
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {SERVICES.slice(0, 3).map((service, index) => (
            <Grid item xs={12} md={4} key={service.id}>
              <MotionCard
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="image-hover"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    "& .card-media": {
                      transform: "scale(1.1)",
                    },
                    "& .overlay": {
                      opacity: 0.7,
                    },
                  },
                }}
              >
                <Box sx={{ position: "relative", paddingTop: "60%" }}>
                  <CardMedia
                    className="card-media"
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(to top, rgba(26, 47, 56, 0.9), transparent)",
                      height: "100%",
                      opacity: 0.5,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    p: 4,
                    flexGrow: 1,
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "white",
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      mb: 3,
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Button
                    variant="text"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      color: "#8BC34A",
                      fontWeight: 600,
                      p: 0,
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#9CCC65",
                        "& .MuiSvgIcon-root": {
                          transform: "translateX(5px)",
                        },
                      },
                      "& .MuiSvgIcon-root": {
                        transition: "transform 0.3s ease",
                      },
                    }}
                  >
                    Explorar Servicio
                  </Button>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        {/* Decorative Elements */}
        <Box
          component={motion.div}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, #8BC34A 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(40px)",
            opacity: 0.3,
            pointerEvents: "none",
          }}
        />

        <Box
          component={motion.div}
          animate={{
            y: [0, 10, 0],
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
            left: "5%",
            width: "150px",
            height: "150px",
            background: "radial-gradient(circle, #4CAF50 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(30px)",
            opacity: 0.2,
            pointerEvents: "none",
          }}
        />
      </Container>
    </Box>
  );
};

export default ServicesSection;
