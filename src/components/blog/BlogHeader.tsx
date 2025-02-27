import { Box, Container, Typography, TextField, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { UI_TEXTS } from "../../config/constants";

const MotionBox = motion.create(Box);

interface BlogHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const BlogHeader = ({ searchTerm, onSearchChange }: BlogHeaderProps) => {
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
          textTransform: "uppercase",
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        {UI_TEXTS.sections.blog.title}
      </Typography>

      <Typography
        variant="h1"
        component={motion.h1}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        sx={{
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
          fontWeight: 800,
          lineHeight: 1.1,
          mb: 3,
          background: `linear-gradient(135deg, ${theme.palette.common.white}, ${theme.palette.primary.light})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        {UI_TEXTS.sections.blog.subtitle}
      </Typography>

      <Typography
        variant="h4"
        component={motion.h4}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
          fontWeight: 400,
          color: theme.palette.text.secondary,
          mb: 6,
          maxWidth: "800px",
          mx: "auto",
          lineHeight: 1.6,
        }}
      >
        {UI_TEXTS.sections.blog.description}
      </Typography>

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
          mb: 6,
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          borderRadius: "2px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      />

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        sx={{ maxWidth: "600px", mx: "auto" }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder={UI_TEXTS.sections.blog.search.placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.1)",
              },
              "&:hover fieldset": {
                borderColor: theme.palette.primary.light,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
            "& .MuiInputBase-input": {
              color: theme.palette.text.primary,
              padding: "16px 20px",
            },
          }}
        />
      </Box>
    </MotionBox>
  );
};

export default BlogHeader;
