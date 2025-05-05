import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { UI_TEXTS } from "../../config/constants";

const stats = [
  {
    value: 13,
    suffix: "+",
    label: "Años de Experiencia",
    description:
      "Nuestro equipo cuenta con más de una década de experiencia en consultoría ambiental",
  },
  {
    value: 4,
    suffix: "",
    label: "Sectores Principales",
    description:
      "Experiencia en sectores industrial, minero, agropecuario y empresarial",
  },
  {
    value: 7,
    suffix: "",
    label: "Servicios Especializados",
    description:
      "Desde gestión ambiental hasta sistemas ISO 14001 y análisis geográfico",
  },
  {
    value: 100,
    suffix: "%",
    label: "Compromiso Ambiental",
    description:
      "Dedicados a generar valor ambiental, social y económico sostenible",
  },
];

const MotionBox = motion.create(Box);

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export default function StatsSection() {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <Box
      component="section"
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
          background:
            "radial-gradient(circle, rgba(139, 195, 74, 0.1) 0%, transparent 60%)",
          transform: "rotate(-45deg)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        {/* Title and Description Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
              color: theme.palette.primary.light,
              fontSize: "1.1rem",
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: "block",
            }}
          >
            {UI_TEXTS.sections.stats.overline}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 800,
              mb: 3,
              background: `linear-gradient(90deg, ${theme.palette.common.white}, ${theme.palette.primary.light})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {UI_TEXTS.sections.stats.title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.8,
            }}
          >
            {UI_TEXTS.sections.stats.description}
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {stats.map((stat: StatItem, index: number) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    minHeight: { xs: "auto", md: "280px" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    textAlign: "center",
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
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      color: theme.palette.primary.light,
                      mb: 2,
                      background: `linear-gradient(135deg, ${theme.palette.common.white}, ${theme.palette.primary.light})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      width: "100%",
                    }}
                  >
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "white",
                      mb: 2,
                      width: "100%",
                    }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.7,
                      width: "100%",
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Box>
              </motion.div>
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
}
