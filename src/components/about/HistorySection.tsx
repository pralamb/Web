import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
  ListItemIcon,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { UI_TEXTS } from "../../config/constants";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const { about } = UI_TEXTS.sections;
const MotionBox = motion.create(Box);

export default function HistorySection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
     
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ mb: { xs: 8, md: 12 }, textAlign: "center" }}
        >
          <Box sx={{ display: "inline-flex", alignItems: "center", mb: 2 }}>
            <Box
              component={motion.div}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              sx={{
                width: "30px",
                height: "2px",
                background: theme.palette.primary.light,
                mr: 2,
              }}
            />
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
                display: "inline-block",
              }}
            >
              {about.overline}
            </Typography>
            <Box
              component={motion.div}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              sx={{
                width: "30px",
                height: "2px",
                background: theme.palette.primary.light,
                ml: 2,
              }}
            />
          </Box>
          <Typography
            variant="h1"
            component={motion.h1}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
              position: "relative",
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: theme.palette.primary.main,
                opacity: 0.5,
              },
              "&::before": {
                top: "-10px",
                left: "10%",
              },
              "&::after": {
                bottom: "-10px",
                right: "10%",
              },
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {about.history.description}
          </Typography>

          {/* Decorative Line with enhanced animation */}
          <Box
            sx={{
              position: "relative",
              height: "4px",
              width: "100px",
              mx: "auto",
              mb: 8,
            }}
          >
            <Box
              component={motion.div}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "100%",
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: "2px",
              }}
            />
            <Box
              component={motion.div}
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              sx={{
                position: "absolute",
                top: "-2px",
                left: "-5px",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: theme.palette.primary.main,
                boxShadow: `0 0 10px ${theme.palette.primary.main}`,
              }}
            />
            <Box
              component={motion.div}
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              sx={{
                position: "absolute",
                top: "-2px",
                right: "-5px",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: theme.palette.secondary.main,
                boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
              }}
            />
          </Box>
        </MotionBox>

          <Paper
            elevation={0}
            sx={{
              maxWidth: "900px",
              mx: "auto",
              background: "rgba(255, 255, 255, 0.03)",
              borderRadius: 4,
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              p: { xs: 2, md: 4 },
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "4px",
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              },
            }}
          >
            <List sx={{ position: "relative", zIndex: 2 }}>
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
                    py: 1.5,
                    borderBottom: index !== about.history.achievements.length - 1 ? `1px solid rgba(255, 255, 255, 0.1)` : "none",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.02)",
                    },
                  }}
                >
                  <ListItemIcon>
                    <CheckCircleOutlineIcon 
                      sx={{ 
                        color: theme.palette.primary.main,
                        fontSize: 28
                      }} 
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={achievement}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: "text.primary",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
      </Container>
    </Box>
  );
}
