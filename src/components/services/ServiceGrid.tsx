import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { SERVICES, ROUTES, UI_TEXTS } from "../../config/constants";

const MotionBox = motion.create(Box);

const ServiceGrid = () => {
  return (
    <Grid container spacing={4}>
      {SERVICES.map((service, index) => (
        <Grid item xs={12} md={6} key={service.id}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  color="primary"
                >
                  {service.title}
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  {service.description}
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  {UI_TEXTS.sections.servicesPage.features.title}
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {service.features.map((feature, i) => (
                    <Typography
                      component="li"
                      key={i}
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to={ROUTES.CONTACT}
                  fullWidth
                >
                  {UI_TEXTS.buttons.contact}
                </Button>
              </CardActions>
            </Card>
          </MotionBox>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServiceGrid;
