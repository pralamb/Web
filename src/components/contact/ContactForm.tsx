import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import { UI_TEXTS } from "../../config/constants";

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
  };
  onSubmit: (e: React.FormEvent) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ContactForm = ({ formData, onSubmit, onChange }: ContactFormProps) => {
  return (
    <Card component="form" onSubmit={onSubmit}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label={UI_TEXTS.sections.contact.form.fields.name}
              name="name"
              value={formData.name}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label={UI_TEXTS.sections.contact.form.fields.email}
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={UI_TEXTS.sections.contact.form.fields.phone}
              name="phone"
              value={formData.phone}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={UI_TEXTS.sections.contact.form.fields.company}
              name="company"
              value={formData.company}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label={UI_TEXTS.sections.contact.form.fields.message}
              name="message"
              value={formData.message}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              {UI_TEXTS.buttons.sendMessage}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
