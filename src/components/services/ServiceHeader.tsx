import { Box, Typography, useTheme, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { UI_TEXTS } from "../../config/constants";

const MotionBox = motion.create(Box);

const ServiceHeader = () => {
  const theme = useTheme();

  return (
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
        {UI_TEXTS.sections.servicesPage.overline}
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
          fontWeight: 800,
          lineHeight: 1.1,
          mb: 3,
          background: `linear-gradient(90deg, ${theme.palette.common.white}, ${theme.palette.primary.light})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        Servicios de Gestión Ambiental
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.text.secondary,
          maxWidth: "800px",
          mx: "auto",
          mb: 4,
          fontSize: { xs: "1.1rem", md: "1.3rem" },
          lineHeight: 1.8,
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Ofrecemos soluciones profesionales para la gestión ambiental empresarial
        con más de 13 años de experiencia. Nuestro equipo multidisciplinario
        brinda servicios especializados en coordinación con autoridades
        ambientales, rurales y agropecuarias a nivel nacional y regional,
        garantizando el cumplimiento normativo y la optimización de recursos
        desde una visión ambiental moderna.
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        flexWrap="wrap"
        sx={{ mb: 6 }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
          }}
        >
          <Chip
            label="Sistemas SGA"
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              color: theme.palette.primary.light,
              mb: 1,
            }}
          />
          <Chip
            label="Residuos"
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              color: theme.palette.primary.light,
              mb: 1,
            }}
          />
          <Chip
            label="Instrumentos Ambientales"
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              color: theme.palette.primary.light,
              mb: 1,
            }}
          />
          <Chip
            label="Trámites"
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              color: theme.palette.primary.light,
              mb: 1,
            }}
          />
          <Chip
            label="Reportes"
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              color: theme.palette.primary.light,
              mb: 1,
            }}
          />
          <Chip
            label="Beneficios Tributarios"
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              color: theme.palette.primary.light,
              mb: 1,
            }}
          />
        </Box>
      </Stack>

      {/* Decorative Line */}
      <Box
        component={motion.div}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        sx={{
          width: "100px",
          height: "4px",
          mx: "auto",
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          borderRadius: "2px",
        }}
      />
    </MotionBox>
  );
};

export default ServiceHeader;
