import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { UI_TEXTS, ROUTES, IMAGES } from "../../config/constants";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const HeroSection = () => {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: theme.colors.background,
        overflow: "hidden",
      }}
    >
      {/* Animated Background */}
      <Box
        component={motion.div}
        style={{ y, opacity }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(to bottom, ${theme.colors.background}B3, ${theme.colors.background}E6)`,
          },
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Typography
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
                  {UI_TEXTS.sections.hero.overline}
                </Typography>
              </motion.div>

              <MotionTypography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 3,
                  background: `linear-gradient(90deg, ${theme.palette.common.white} 0%, ${theme.palette.primary.light} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                {UI_TEXTS.sections.hero.title.part1} <br />
                <span style={{ color: theme.palette.primary.light }}>
                  {UI_TEXTS.sections.hero.title.part2}
                </span>{" "}
                {UI_TEXTS.sections.hero.title.part3}
              </MotionTypography>

              <MotionTypography
                variant="h5"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 6,
                  maxWidth: "600px",
                  lineHeight: 1.8,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {UI_TEXTS.sections.hero.description}
              </MotionTypography>

              <MotionBox
                sx={{
                  display: "flex",
                  gap: 3,
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  component={RouterLink}
                  to={ROUTES.SERVICES}
                  className="button-hover"
                  sx={{
                    py: 2.5,
                    px: 6,
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    borderRadius: theme.shape.borderRadius * 4,
                    fontSize: "1.1rem",
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
                    flex: { xs: "1 1 100%", sm: "0 1 auto" },
                  }}
                >
                  {UI_TEXTS.buttons.ourServices}
                </Button>
              </MotionBox>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
