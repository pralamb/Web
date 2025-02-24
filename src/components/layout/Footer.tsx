import { Box, Container, Grid, Typography, Link } from '@mui/material'
import { COMPANY_INFO } from '../../config/constants'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              {COMPANY_INFO.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {COMPANY_INFO.description}
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {COMPANY_INFO.contact.email}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {COMPANY_INFO.contact.phone}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {COMPANY_INFO.contact.address}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Síguenos
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href={COMPANY_INFO.social.linkedin} target="_blank" color="inherit">
                <LinkedInIcon />
              </Link>
              <Link href={COMPANY_INFO.social.twitter} target="_blank" color="inherit">
                <TwitterIcon />
              </Link>
              <Link href={COMPANY_INFO.social.facebook} target="_blank" color="inherit">
                <FacebookIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer 