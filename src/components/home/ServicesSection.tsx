import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { SERVICES, UI_TEXTS } from "../../config/constants";

const MotionBox = motion(Box);

const ServicesSection = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" color="primary" align="center" gutterBottom>
        {UI_TEXTS.sections.services.title}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        align="center"
        paragraph
        sx={{ mb: 6 }}
      >
        {UI_TEXTS.sections.services.subtitle}
      </Typography>

      <Grid container spacing={4}>
        {SERVICES.map((service, index) => (
          <Grid item key={service.id} xs={12} sm={6} md={3}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              >
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    mb: 2,
                    objectFit: "cover",
                  }}
                />
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
