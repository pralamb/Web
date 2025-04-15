import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { UI_TEXTS } from "../../config/constants";

const { values } = UI_TEXTS.sections.about;

// SVG Icons definidos directamente en el componente
const EcoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5z"/>
  </svg>
);

const LightbulbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
  </svg>
);

const BalanceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/>
  </svg>
);

const valueIcons = [
  <EcoIcon key="eco" />,
  <LightbulbIcon key="lightbulb" />,
  <BalanceIcon key="balance" />,
];

export default function ValuesSection() {
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
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Box
                component={motion.div}
                initial={{ width: 0 }}
                animate={{ width: "30px" }}
                transition={{ duration: 0.8 }}
                sx={{
                  height: "2px",
                  background: theme.palette.primary.main,
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
                {values.overline}
              </Typography>
              <Box
                component={motion.div}
                initial={{ width: 0 }}
                animate={{ width: "30px" }}
                transition={{ duration: 0.8 }}
                sx={{
                  height: "2px",
                  background: theme.palette.primary.main,
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
              {values.title}
            </Typography>
            <Typography
              variant="body1"
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              color="text.secondary"
              sx={{ 
                mb: 6, 
                maxWidth: "700px", 
                mx: "auto",
                fontSize: "1.1rem",
                lineHeight: 1.7,
              }}
            >
              {values.description}
            </Typography>
          </Box>

        <Grid container spacing={4}>
          {values.items.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
                <Card
                  component={motion.div}
                  whileHover={{ 
                    y: -10,
                    boxShadow: `0 15px 30px rgba(0,0,0,0.1), 0 0 20px ${value.gradientColors[0]}30`
                  }}
                  sx={{
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: `linear-gradient(90deg, ${value.gradientColors[0]}, ${value.gradientColors[1]})`,
                    },
                  }}
                >
               
                  
                  <CardContent sx={{ p: 4, position: "relative" }}>
                    <Box 
                      sx={{ 
                        mb: 3,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${value.gradientColors[0]}30, ${value.gradientColors[1]}10)`,
                        color: value.iconColor,
                        border: `1px solid ${value.iconColor}30`,
                      }}
                    >
                      {valueIcons[index]}
                    </Box>
                    <Typography
                      variant="h5"
                      component={motion.h5}
                      gutterBottom
                      sx={{ 
                        color: value.iconColor,
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
