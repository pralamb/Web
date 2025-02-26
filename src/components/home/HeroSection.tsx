import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { COMPANY_INFO, ROUTES, IMAGES, UI_TEXTS } from "../../config/constants";

const MotionBox = motion(Box);

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #4A5D4B 0%, #2C3E2D 100%)",
        color: "white",
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 14 },
        mb: 8,
        borderRadius: { xs: "0 0 2rem 2rem", md: "0 0 4rem 4rem" },
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
                  mb: 2,
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #E0E0E0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {COMPANY_INFO.name}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: "rgba(255,255,255,0.9)",
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  lineHeight: 1.6,
                }}
              >
                {COMPANY_INFO.slogan}
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to={ROUTES.CONTACT}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: "2rem",
                    fontSize: "1.1rem",
                    backgroundColor: "#ffffff",
                    color: "#4A5D4B",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.9)",
                    },
                  }}
                >
                  {UI_TEXTS.buttons.contact}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={RouterLink}
                  to={ROUTES.SERVICES}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: "2rem",
                    fontSize: "1.1rem",
                    borderColor: "rgba(255,255,255,0.5)",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  {UI_TEXTS.buttons.ourServices}
                </Button>
              </Box>
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Box
                component="img"
                src={IMAGES.hero}
                alt="Servicios ambientales"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "2rem",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  transform: "perspective(1000px) rotateY(-5deg)",
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          width: "50%",
          height: "140%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default HeroSection;
