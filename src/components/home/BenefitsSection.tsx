import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ForestIcon from "@mui/icons-material/Forest";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import RecyclingIcon from "@mui/icons-material/Recycling";

const MotionBox = motion.create(Box);

const benefits = [
  {
    icon: <ForestIcon sx={{ fontSize: 40 }} />,
    title: "Conservación Ambiental",
    description:
      "Desarrollamos estrategias efectivas para la preservación de ecosistemas y recursos naturales.",
  },
  {
    icon: <WaterDropIcon sx={{ fontSize: 40 }} />,
    title: "Gestión del Agua",
    description:
      "Implementamos soluciones innovadoras para el tratamiento y conservación del agua.",
  },
  {
    icon: <RecyclingIcon sx={{ fontSize: 40 }} />,
    title: "Economía Circular",
    description:
      "Promovemos prácticas sostenibles y la reutilización eficiente de recursos.",
  },
];

const BenefitsSection = () => {
  const theme = useTheme();
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
          background: `radial-gradient(circle, ${theme.palette.primary.light}1A 0%, transparent 60%)`,
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
                  color: theme.palette.primary.light,
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
                  mb: 3,
                  background: `linear-gradient(90deg, ${theme.palette.common.white}, ${theme.palette.primary.light})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Comprometidos con el Medio Ambiente
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
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
                        background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
                      },
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        "& .icon-wrapper": {
                          transform: "scale(1.1) rotate(10deg)",
                          background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
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
                        backgroundColor: `${theme.palette.primary.light}15`,
                        color: theme.palette.common.white,
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
                        color: theme.palette.common.white,
                        mb: 2,
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
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
            background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, transparent 70%)`,
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
            background: `radial-gradient(circle, ${theme.palette.secondary.main} 0%, transparent 70%)`,
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
