import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  Divider,
  Chip,
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
        <Grid item xs={12} md={6} lg={4} key={service.id} id={service.id}>
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
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
            }}
          >
            <Box sx={{ position: "relative", paddingTop: "55%" }}>
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
              <Chip
                label={index < 4 ? "Popular" : ""}
                sx={{
                  display: index < 4 ? "flex" : "none",
                  position: "absolute",
                  top: 16,
                  right: 16,
                  bgcolor: theme.palette.primary.main,
                  color: "white",
                  fontWeight: "bold",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              />
            </Box>
            <CardContent
              sx={{
                p: 3,
                flexGrow: 1,
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <Typography
                variant="h5"
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
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: "0.95rem",
                }}
              >
                {service.description}
              </Typography>

              <Divider sx={{ mb: 2, opacity: 0.1 }} />

              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.primary.light,
                  mb: 1.5,
                  fontWeight: 600,
                }}
              >
                Incluye:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 3, mt: 0 }}>
                {service.features.map((feature, i) => (
                  <Typography
                    component="li"
                    key={i}
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 0.5,
                      lineHeight: 1.6,
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
                to={`${ROUTES.CONTACT}?service=${service.id}`}
                sx={{
                  mt: "auto",
                  py: 1,
                  px: 3,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  borderRadius: theme.shape.borderRadius * 4,
                  fontSize: "0.9rem",
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
