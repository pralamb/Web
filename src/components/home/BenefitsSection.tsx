import { Box, Container, Grid, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ForestIcon from "@mui/icons-material/Forest";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import RecyclingIcon from "@mui/icons-material/Recycling";

const MotionBox = motion(Box);

const benefits = [
  {
    icon: <ForestIcon sx={{ fontSize: 40 }} />,
    title: "Conservación Ambiental",
    description:
      "Desarrollamos estrategias efectivas para la preservación de ecosistemas y recursos naturales.",
    color: "#4CAF50",
    gradient: "linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)",
  },
  {
    icon: <WaterDropIcon sx={{ fontSize: 40 }} />,
    title: "Gestión del Agua",
    description:
      "Implementamos soluciones innovadoras para el tratamiento y conservación del agua.",
    color: "#2196F3",
    gradient: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
  },
  {
    icon: <RecyclingIcon sx={{ fontSize: 40 }} />,
    title: "Economía Circular",
    description:
      "Promovemos prácticas sostenibles y la reutilización eficiente de recursos.",
    color: "#8BC34A",
    gradient: "linear-gradient(135deg, #8BC34A 0%, #7CB342 100%)",
  },
];

const BenefitsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(135deg, #1a2f38 0%, #0f1922 100%)",
        position: "relative",
        overflow: "hidden",
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
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
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
                NUESTRO COMPROMISO
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 800,
                  color: "white",
                  mb: 3,
                  background:
                    "linear-gradient(90deg, #ffffff 0%, #8BC34A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Comprometidos con el Medio Ambiente
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: { xs: 4, md: 0 },
                }}
              >
                Nuestro compromiso es crear un impacto positivo en el medio
                ambiente a través de soluciones innovadoras y sostenibles que
                beneficien tanto a la naturaleza como a la sociedad.
              </Typography>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    sx={{
                      p: 4,
                      height: "100%",
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "20px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                      transition: "all 0.3s ease-in-out",
                      overflow: "hidden",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: benefit.gradient,
                      },
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        "& .icon-wrapper": {
                          transform: "scale(1.1) rotate(10deg)",
                          background: benefit.gradient,
                        },
                      },
                    }}
                  >
                    <Box
                      className="icon-wrapper"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: `${benefit.color}15`,
                        color: "white",
                        mb: 3,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {benefit.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: "white",
                        mb: 2,
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.7,
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </Grid>
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

export default BenefitsSection;
