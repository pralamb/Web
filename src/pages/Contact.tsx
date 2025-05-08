import { Box, Container, useTheme } from "@mui/material";
import { UI_TEXTS } from "../config/constants";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import { useState, useEffect } from "react";
import { Alert, Snackbar, Grid } from "@mui/material";
import { IMAGES } from "../config/constants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const theme = useTheme();
  const PUBLIC_KEY = "lwFwAD2iVdVd1YRwo";

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_bfvgtye", // Reemplaza con tu Service ID de EmailJS
        "template_dtiz73d", // Reemplaza con tu Template ID de EmailJS
        {
          to_email: "proyectos@pralamb.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        PUBLIC_KEY
      );

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
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error al enviar el mensaje. Por favor, intente nuevamente.",
        severity: "error",
      });
    }
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
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: "500px",
          opacity: 0.03,
          zIndex: -1,
        },
      }}
    >
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
