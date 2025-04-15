import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SpeedIcon from "@mui/icons-material/Speed";
import { useInView } from "react-intersection-observer";

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

// Definición de los otros servicios
const otherServices = [
  {
    id: "interdisciplinary",
    title: "Articulación Interdisciplinaria",
    description: "Contamos con una amplia red de profesionales especializados en distintas áreas ambientales que permiten abordar proyectos complejos desde múltiples perspectivas.",
    icon: <LayersIcon fontSize="large" />,
  },
  {
    id: "projects",
    title: "Gestión de Proyectos Ambientales",
    description: "Ofrecemos un servicio completo de gestión de proyectos ambientales que abarca desde la fase inicial de planificación y diseño, hasta la implementación, monitoreo y evaluación de resultados.",
    icon: <AssignmentIcon fontSize="large" />,
  },
  {
    id: "measurements",
    title: "Mediciones Ambientales",
    description: "Realizamos mediciones técnicas especializadas de parámetros ambientales críticos incluyendo calidad del aire, niveles de ruido, análisis de vertimientos, monitoreo de emisiones atmosféricas, caracterización de suelos y evaluación de calidad de aguas superficiales y subterráneas.",
    icon: <SpeedIcon fontSize="large" />,
  },
];

const OtherServices = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
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
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}
        >
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
            Otros Servicios
          </Typography>
          
          <Divider
            sx={{
              width: "80px",
              height: "4px",
              mx: "auto",
              mb: 4,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: "2px",
            }}
          />
        </MotionBox>

        <Grid container spacing={4} justifyContent="center">
          {otherServices.map((service, index) => (
            <Grid item xs={12} md={4} key={service.id}>
              <MotionCard
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                sx={{
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                    "& .service-icon": {
                      transform: "scale(1.1) rotate(5deg)",
                      color: theme.palette.primary.light,
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 4,
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      mb: 3,
                      background: "rgba(255, 255, 255, 0.05)",
                      color: theme.palette.common.white,
                      transition: "all 0.4s ease",
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.common.white,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                     textAlign:"justify"

                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OtherServices; 