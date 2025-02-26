import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { UI_TEXTS } from "../../config/constants";

const MotionBox = motion(Box);

const ContactHeader = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ mb: 6 }}
    >
      <Typography variant="h2" color="primary" gutterBottom>
        {UI_TEXTS.sections.contact.title}
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        {UI_TEXTS.sections.contact.subtitle}
      </Typography>
    </MotionBox>
  );
};

export default ContactHeader;
