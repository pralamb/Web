import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { COMPANY_INFO, UI_TEXTS, TEAM_MEMBERS } from '../config/constants'

const MotionBox = motion(Box)

const About = () => {
  return (
    <Container maxWidth="lg">
      {/* Sección de Historia */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" color="primary" gutterBottom>
          {UI_TEXTS.sections.about.title}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {COMPANY_INFO.slogan}
        </Typography>
        <Typography variant="body1" paragraph>
          {UI_TEXTS.sections.about.description}
        </Typography>
      </MotionBox>

      {/* Sección de Valores */}
      <Box sx={{ my: 8 }}>
        <Typography variant="h3" color="primary" gutterBottom align="center">
          {UI_TEXTS.sections.about.values.title}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {UI_TEXTS.sections.about.values.items.map((value, index) => (
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
          {UI_TEXTS.sections.about.team.title}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {TEAM_MEMBERS.map((member, index) => (
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