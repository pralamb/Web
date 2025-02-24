import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { COMPANY_INFO } from '../config/constants'

const MotionBox = motion(Box)

const About = () => {
  const teamMembers = [
    {
      name: 'Ana García',
      position: 'Directora General',
      description: 'Experta en gestión ambiental con más de 15 años de experiencia.',
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Director Técnico',
      description: 'Ingeniero ambiental especializado en tratamiento de aguas.',
    },
    {
      name: 'Laura Martínez',
      position: 'Consultora Senior',
      description: 'Especialista en gestión de residuos y economía circular.',
    },
  ]

  return (
    <Container maxWidth="lg">
      {/* Sección de Historia */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" color="primary" gutterBottom>
          Sobre Nosotros
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {COMPANY_INFO.slogan}
        </Typography>
        <Typography variant="body1" paragraph>
          Desde nuestra fundación, nos hemos dedicado a proporcionar soluciones ambientales
          innovadoras y sostenibles para empresas de todos los sectores. Nuestro compromiso
          con el medio ambiente y la excelencia técnica nos ha convertido en un referente
          en el sector de la consultoría ambiental.
        </Typography>
      </MotionBox>

      {/* Sección de Valores */}
      <Box sx={{ my: 8 }}>
        <Typography variant="h3" color="primary" gutterBottom align="center">
          Nuestros Valores
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {[
            {
              title: 'Sostenibilidad',
              description: 'Compromiso con el desarrollo sostenible y la protección del medio ambiente.',
            },
            {
              title: 'Innovación',
              description: 'Búsqueda constante de soluciones innovadoras y eficientes.',
            },
            {
              title: 'Excelencia',
              description: 'Máxima calidad en todos nuestros servicios y procesos.',
            },
          ].map((value, index) => (
            <Grid item xs={12} md={4} key={value.title}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom color="primary">
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Sección del Equipo */}
      <Box sx={{ my: 8 }}>
        <Typography variant="h3" color="primary" gutterBottom align="center">
          Nuestro Equipo
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={member.name}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom color="primary">
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary.main" gutterBottom>
                      {member.position}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default About 