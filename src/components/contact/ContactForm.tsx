import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import { UI_TEXTS } from "../../config/constants";
import SendIcon from "@mui/icons-material/Send";

const { form } = UI_TEXTS.sections.contact;

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

export default function ContactForm({
  formData,
  onSubmit,
  onChange,
}: ContactFormProps) {
  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      sx={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom color="primary">
          {form.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {form.description}
        </Typography>

        <Box component="form" onSubmit={onSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label={form.fields.name}
              name="name"
              value={formData.name}
              onChange={onChange}
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label={form.fields.email}
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label={form.fields.phone}
              name="phone"
              value={formData.phone}
              onChange={onChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label={form.fields.company}
              name="company"
              value={formData.company}
              onChange={onChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label={form.fields.message}
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={onChange}
              variant="outlined"
              required
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              sx={{
                py: 1.5,
                background: (theme) =>
                  `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                "&:hover": {
                  background: (theme) =>
                    `linear-gradient(45deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {UI_TEXTS.buttons.sendMessage}
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
