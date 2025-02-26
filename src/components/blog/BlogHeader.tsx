import { Box, Typography, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { UI_TEXTS } from "../../config/constants";

const MotionBox = motion(Box);

interface BlogHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const BlogHeader = ({ searchTerm, onSearchChange }: BlogHeaderProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ mb: 6 }}
    >
      <Typography variant="h2" color="primary" gutterBottom>
        {UI_TEXTS.sections.blog.title}
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        {UI_TEXTS.sections.blog.subtitle}
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder={UI_TEXTS.sections.blog.search.placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{ mt: 2 }}
      />
    </MotionBox>
  );
};

export default BlogHeader;
