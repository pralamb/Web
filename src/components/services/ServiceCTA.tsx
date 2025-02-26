import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { ROUTES, UI_TEXTS } from "../../config/constants";

const MotionBox = motion.create(Box);

const ServiceCTA = () => {
  return (
    <MotionBox
      sx={{
        mt: 8,
        p: 4,
        bgcolor: "background.paper",
        borderRadius: 2,
        textAlign: "center",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        {UI_TEXTS.sections.servicesPage.cta.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        {UI_TEXTS.sections.servicesPage.cta.description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={RouterLink}
        to={ROUTES.CONTACT}
        sx={{ mt: 2 }}
      >
        {UI_TEXTS.buttons.contact}
      </Button>
    </MotionBox>
  );
};

export default ServiceCTA;
