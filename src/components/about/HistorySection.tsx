import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { COMPANY_INFO, UI_TEXTS } from "../../config/constants";

const MotionBox = motion(Box);

const HistorySection = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h2" color="primary" gutterBottom>
        {UI_TEXTS.sections.about.title}
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        {COMPANY_INFO.slogan}
      </Typography>
      <Typography variant="body1" paragraph>
        {UI_TEXTS.sections.about.description}
      </Typography>
    </MotionBox>
  );
};

export default HistorySection;
