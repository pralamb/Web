import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { COMPANY_INFO, SERVICES, ROUTES } from '../config/constants'

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          mb: 8,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionTypography
                component="h1"
                variant="h2"
                color="primary"
                gutterBottom
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {COMPANY_INFO.name}
              </MotionTypography>
              <MotionTypography
                variant="h5"
                color="text.secondary"
                paragraph
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {COMPANY_INFO.slogan}
              </MotionTypography>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to={ROUTES.CONTACT}
                  sx={{ mr: 2 }}
                >
                  Contáctanos
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to={ROUTES.SERVICES}
                >
                  Nuestros Servicios
                </Button>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                component="img"
                src="/hero-image.jpg"
                alt="Servicios ambientales"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          color="primary"
          align="center"
          gutterBottom
        >
          Nuestros Servicios
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          paragraph
          sx={{ mb: 6 }}
        >
          Soluciones integrales para tu empresa
        </Typography>

        <Grid container spacing={4}>
          {SERVICES.map((service, index) => (
            <Grid item key={service.id} xs={12} sm={6} md={3}>
              <MotionBox
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  boxShadow: 1,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: '50%',
                    mb: 2,
                  }}
                >
                  {/* Aquí iría el icono del servicio */}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography color="text.secondary">
                  {service.description}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home 