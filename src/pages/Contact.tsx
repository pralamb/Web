import { useState } from "react";
import { Container, Grid, Alert, Snackbar } from "@mui/material";
import { UI_TEXTS } from "../config/constants";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
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
    <Container maxWidth="lg">
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
  );
};

export default Contact;
