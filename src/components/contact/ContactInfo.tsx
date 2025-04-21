import { Box, Card, CardContent, Typography, Stack, Link } from "@mui/material";
import { motion } from "framer-motion";
import { UI_TEXTS, COMPANY_INFO } from "../../config/constants";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const { info } = UI_TEXTS.sections.contact;

export default function ContactInfo() {
  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      sx={{
        height: "100%",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom color="primary">
          {info.title}
        </Typography>

        <Stack spacing={3} sx={{ mt: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <LocationOnIcon color="primary" />
            <Typography variant="body1" color="text.secondary">
              {COMPANY_INFO.contact.address}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <PhoneIcon color="primary" />
            <Link
              href={`tel:${COMPANY_INFO.contact.phone}`}
              color="text.secondary"
              sx={{
                textDecoration: "none",
                "&:hover": { color: "primary.main" },
              }}
            >
              {COMPANY_INFO.contact.phone}
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <EmailIcon color="primary" />
            <Link
              href={`mailto:${COMPANY_INFO.contact.email}`}
              color="text.secondary"
              sx={{
                textDecoration: "none",
                "&:hover": { color: "primary.main" },
              }}
            >
              {COMPANY_INFO.contact.email}
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <AccessTimeIcon color="primary" />
            <Box>
              <Typography variant="subtitle2" color="primary" gutterBottom>
                {info.schedule.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.schedule.weekdays}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
