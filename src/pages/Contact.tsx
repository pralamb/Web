import { Box, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { UI_TEXTS } from "../config/constants";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import { useState } from "react";
import { Alert, Snackbar, Grid } from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    setSnackbar({
      open: true,
      message: UI_TEXTS.sections.contact.formSuccess,
      severity: "success",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.colors.background}E6, ${theme.palette.primary.dark}80)`,
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "url('https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg')",
          backgroundSize: "500px",
          opacity: 0.03,
          zIndex: -1,
        },
      }}
    >
      {/* Decorative Elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "fixed",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, ${theme.palette.primary.light}40 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: -1,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        sx={{
          position: "fixed",
          bottom: "20%",
          left: "5%",
          width: "250px",
          height: "250px",
          background: `radial-gradient(circle, ${theme.palette.secondary.main}40 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: -1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <ContactHeader />
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <ContactForm
              formData={formData}
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactInfo />
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
