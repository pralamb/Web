import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import SpaIcon from "@mui/icons-material/Spa";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ParkIcon from "@mui/icons-material/Park";

const MotionCard = motion(Card);

const benefits = [
  {
    icon: <SpaIcon sx={{ fontSize: 40 }} />,
    title: "Impacto Ambiental Positivo",
    description:
      "Nuestras soluciones están diseñadas para minimizar la huella de carbono y maximizar la conservación de recursos naturales.",
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 40 }} />,
    title: "Compromiso Social",
    description:
      "Trabajamos en conjunto con comunidades locales para crear soluciones sostenibles que beneficien a todos.",
  },
  {
    icon: <ParkIcon sx={{ fontSize: 40 }} />,
    title: "Innovación Sostenible",
    description:
      "Implementamos tecnologías de vanguardia para crear soluciones ambientales eficientes y duraderas.",
  },
];

const BenefitsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(180deg, #FFFFFF 0%, rgba(249,246,243,0.5) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            color="primary"
            gutterBottom
            sx={{
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 80,
                height: 4,
                bgcolor: "secondary.main",
                borderRadius: 2,
              },
            }}
          >
            Nuestro Impacto
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mt: 3, maxWidth: 800, mx: "auto" }}
          >
            Creamos soluciones que benefician tanto al medio ambiente como a la
            sociedad
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                sx={{
                  height: "100%",
                  background:
                    "linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.9) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(74,93,75,0.1)",
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
                    sx={{
                      color: "primary.main",
                      mb: 3,
                      p: 2,
                      borderRadius: "50%",
                      bgcolor: "rgba(74,93,75,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mt: 2, lineHeight: 1.8 }}
                  >
                    {benefit.description}
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

export default BenefitsSection;
