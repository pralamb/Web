import { Box, Typography, Card, CardContent } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { COMPANY_INFO, UI_TEXTS } from "../../config/constants";

const ContactInfo = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" color="primary" gutterBottom>
          {UI_TEXTS.sections.contact.info.title}
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <EmailIcon sx={{ mr: 2, color: "primary.main" }} />
            <Typography variant="body1">
              {COMPANY_INFO.contact.email}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <PhoneIcon sx={{ mr: 2, color: "primary.main" }} />
            <Typography variant="body1">
              {COMPANY_INFO.contact.phone}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon sx={{ mr: 2, color: "primary.main" }} />
            <Typography variant="body1">
              {COMPANY_INFO.contact.address}
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" sx={{ mt: 4 }}>
          {UI_TEXTS.sections.contact.info.schedule.title}
          <br />
          {UI_TEXTS.sections.contact.info.schedule.weekdays}
          <br />
          {UI_TEXTS.sections.contact.info.schedule.saturday}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
