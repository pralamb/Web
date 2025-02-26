import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import SpaIcon from "@mui/icons-material/Spa";
import ParkIcon from "@mui/icons-material/Park";
import OpacityIcon from "@mui/icons-material/Opacity";
import RecyclingIcon from "@mui/icons-material/Recycling";

const MotionBox = motion(Box);

const stats = [
  {
    icon: <SpaIcon sx={{ fontSize: 40 }} />,
    value: 150,
    suffix: "+",
    label: "Proyectos Completados",
    description: "Soluciones ambientales implementadas",
  },
  {
    icon: <ParkIcon sx={{ fontSize: 40 }} />,
    value: 1000,
    suffix: "ha",
    label: "Áreas Protegidas",
    description: "Conservación y restauración",
  },
  {
    icon: <OpacityIcon sx={{ fontSize: 40 }} />,
    value: 85,
    suffix: "%",
    label: "Eficiencia",
    description: "En gestión de recursos hídricos",
  },
  {
    icon: <RecyclingIcon sx={{ fontSize: 40 }} />,
    value: 2500,
    suffix: "ton",
    label: "Residuos Gestionados",
    description: "Anualmente de forma sostenible",
  },
];

const StatsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(180deg, rgba(74,93,75,0.08) 0%, rgba(74,93,75,0) 100%)",
        borderRadius: "2rem",
        my: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                sx={{
                  textAlign: "center",
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <MotionBox
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  sx={{
                    color: "primary.main",
                    mb: 2,
                    p: 2,
                    borderRadius: "50%",
                    bgcolor: "background.paper",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  {stat.icon}
                </MotionBox>
                <Typography
                  variant="h3"
                  color="primary"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                </Typography>
                <Typography
                  variant="h6"
                  color="text.primary"
                  gutterBottom
                  sx={{ fontWeight: "medium" }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {stat.description}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
