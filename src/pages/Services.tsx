import { Box, Container, Grid, Typography, Card, CardContent, CardActions, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { SERVICES, ROUTES, UI_TEXTS } from '../config/constants'

const MotionBox = motion(Box)

const Services = () => {
  return (
    <Container maxWidth="lg">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ mb: 6 }}
      >
        <Typography variant="h2" color="primary" gutterBottom>
          {UI_TEXTS.sections.services.title}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {UI_TEXTS.sections.services.subtitle}
        </Typography>
      </MotionBox>

      <Grid container spacing={4}>
        {SERVICES.map((service, index) => (
          <Grid item xs={12} md={6} key={service.id}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" component="h2" gutterBottom color="primary">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary">
                    {service.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 2 }}>
                    {UI_TEXTS.sections.services.features.title}
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

      {/* Sección de CTA */}
      <MotionBox
        sx={{
          mt: 8,
          p: 4,
          bgcolor: 'background.paper',
          borderRadius: 2,
          textAlign: 'center',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Typography variant="h4" color="primary" gutterBottom>
          {UI_TEXTS.sections.services.cta.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {UI_TEXTS.sections.services.cta.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={RouterLink}
          to={ROUTES.CONTACT}
          sx={{ mt: 2 }}
        >
          {UI_TEXTS.buttons.contact}
        </Button>
      </MotionBox>
    </Container>
  )
}

export default Services 