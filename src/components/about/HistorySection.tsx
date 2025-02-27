import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import { UI_TEXTS } from "../../config/constants";

const { about } = UI_TEXTS.sections;

export default function HistorySection() {
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
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="overline"
            color="primary"
            align="center"
            sx={{ display: "block", mb: 2 }}
          >
            {about.overline}
          </Typography>
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 4,
              background: (theme) => theme.palette.primary.main,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {about.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
          >
            {about.history.description}
          </Typography>
        </Box>

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
