import { Box, Container, Grid, Typography, Card, CardContent, CardActions, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { SERVICES, ROUTES } from '../config/constants'

const MotionBox = motion(Box)

const Services = () => {
  const serviceDetails = {
    'water-treatment': {
      features: [
        'Análisis y diagnóstico de sistemas de tratamiento',
        'Diseño de plantas de tratamiento',
        'Optimización de procesos',
        'Monitoreo y control de calidad',
      ],
    },
    'waste-management': {
      features: [
        'Gestión integral de residuos',
        'Planes de minimización',
        'Valorización de residuos',
        'Cumplimiento normativo',
      ],
    },
    'environmental-consulting': {
      features: [
        'Auditorías ambientales',
        'Estudios de impacto ambiental',
        'Sistemas de gestión ambiental',
        'Asesoría legal ambiental',
      ],
    },
    'energy-efficiency': {
      features: [
        'Auditorías energéticas',
        'Optimización de consumo',
        'Implementación de energías renovables',
        'Certificación energética',
      ],
    },
  }

  return (
    <Container maxWidth="lg">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ mb: 6 }}
      >
        <Typography variant="h2" color="primary" gutterBottom>
          Nuestros Servicios
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Soluciones ambientales integrales para tu empresa
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
                    Características principales:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {serviceDetails[service.id as keyof typeof serviceDetails].features.map((feature, i) => (
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
                    Solicitar información
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
          ¿Necesitas una solución personalizada?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Nuestro equipo de expertos está listo para ayudarte a encontrar la mejor solución para tu empresa.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={RouterLink}
          to={ROUTES.CONTACT}
          sx={{ mt: 2 }}
        >
          Contactar ahora
        </Button>
      </MotionBox>
    </Container>
  )
}

export default Services 