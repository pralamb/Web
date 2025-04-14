import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { SERVICES, ROUTES } from "../../config/constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MotionCard = motion.create(Card);

const ServiceGrid = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={4} sx={{ mb: { xs: 8, md: 12 } }}>
      {SERVICES.map((service, index) => (
        <Grid item xs={12} md={6} key={service.id}>
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              overflow: "hidden",
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
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(to bottom, transparent, ${theme.colors.background}E6)`,
                  opacity: 0.5,
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
            </Box>
            <CardContent
              sx={{
                p: 4,
                flexGrow: 1,
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: `linear-gradient(90deg, ${theme.palette.common.white}, ${theme.palette.primary.light})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                {service.description}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.light,
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Características:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                {service.features.map((feature, i) => (
                  <Typography
                    component="li"
                    key={i}
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                component={RouterLink}
                to={ROUTES.CONTACT}
                sx={{
                  mt: "auto",
                  py: 1.5,
                  px: 4,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  borderRadius: theme.shape.borderRadius * 4,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: theme.shadows[4],
                  background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                  border: "none",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: theme.shadows[8],
                    background: `linear-gradient(45deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Solicitar Información
              </Button>
            </CardContent>
          </MotionCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServiceGrid;
