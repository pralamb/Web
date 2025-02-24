import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { COMPANY_INFO, SERVICES, ROUTES, IMAGES, UI_TEXTS } from '../config/constants'

const MotionBox = motion(Box)

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
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h2" color="primary" gutterBottom>
                  {COMPANY_INFO.name}
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                  {COMPANY_INFO.slogan}
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component={RouterLink}
                    to={ROUTES.CONTACT}
                    sx={{ mr: 2 }}
                  >
                    {UI_TEXTS.buttons.contact}
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    component={RouterLink}
                    to={ROUTES.SERVICES}
                  >
                    {UI_TEXTS.buttons.ourServices}
                  </Button>
                </Box>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component="img"
                  src={IMAGES.hero}
                  alt="Servicios ambientales"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          color="primary"
          align="center"
          gutterBottom
        >
          {UI_TEXTS.sections.services.title}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          paragraph
          sx={{ mb: 6 }}
        >
          {UI_TEXTS.sections.services.subtitle}
        </Typography>

        <Grid container spacing={4}>
          {SERVICES.map((service, index) => (
            <Grid item key={service.id} xs={12} sm={6} md={3}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
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
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      mb: 2,
                      objectFit: 'cover',
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home 