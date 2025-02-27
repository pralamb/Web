import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { UI_TEXTS } from "../../config/constants";

const { about } = UI_TEXTS.sections;
const MotionBox = motion.create(Box);

export default function HistorySection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
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
            {about.overline}
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
            {about.title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: "800px",
              mx: "auto",
              mb: 6,
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              lineHeight: 1.8,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {about.history.description}
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
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: "2px",
            }}
          />
        </MotionBox>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <List sx={{ maxWidth: "800px", mx: "auto" }}>
            {about.history.achievements.map((achievement, index) => (
              <ListItem
                key={index}
                component={motion.li}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  mb: 2,
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: 2,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <ListItemText
                  primary={achievement}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "text.primary",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}
