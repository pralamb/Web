import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { UI_TEXTS, ROUTES } from "../../config/constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../../assets/logo.webp";
const { footer } = UI_TEXTS;

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "rgba(255, 255, 255, 0.02)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.1)",
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          opacity: 0.5,
        },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                height: "64px",
                mb: 3
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Pralamb Logo"
                sx={{
                  height: 150,
                  width: 'auto',
                  maxWidth: 150,
                }}
              />
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              {footer.company.description}
            </Typography>
            <Stack direction="row" spacing={2}>
              {[
                {
                  icon: <WhatsAppIcon />,
                  url: `https://wa.me/${footer.contact.phone.replace(
                    /\D/g,
                    ""
                  )}`,
                },
                { icon: <FacebookIcon />, url: footer.social.facebook },
                { icon: <TwitterIcon />, url: footer.social.twitter },
                { icon: <LinkedInIcon />, url: footer.social.linkedin },
                { icon: <InstagramIcon />, url: footer.social.instagram },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`social-${index}`}
                  sx={{
                    color: theme.palette.primary.light,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: theme.palette.secondary.main,
                      transform: "translateY(-3px)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.light,
                mb: 3,
              }}
            >
              {footer.quickLinks.title}
            </Typography>
            <Stack spacing={2}>
              {footer.quickLinks.items.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: theme.palette.text.secondary,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: theme.palette.primary.light,
                      transform: "translateX(5px)",
                    },
                    display: "inline-block",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.light,
                mb: 3,
              }}
            >
              {footer.services.title}
            </Typography>
            <Stack spacing={2}>
              {footer.services.items.map((service, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={`${ROUTES.SERVICES}#${service
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  sx={{
                    color: theme.palette.text.secondary,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: theme.palette.primary.light,
                      transform: "translateX(5px)",
                    },
                    display: "inline-block",
                  }}
                >
                  {service}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.light,
                mb: 3,
              }}
            >
              {footer.contact.title}
            </Typography>
            <Stack spacing={3}>
              <Box
                component="a"
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${footer.contact.address.street}, ${footer.contact.address.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  gap: 2,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": {
                    "& .MuiTypography-root": {
                      color: theme.palette.primary.light,
                    },
                    "& .MuiSvgIcon-root": {
                      transform: "translateY(-2px)",
                    },
                  },
                }}
              >
                <LocationOnIcon
                  sx={{
                    color: theme.palette.primary.light,
                    transition: "transform 0.3s ease",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    transition: "color 0.3s ease",
                  }}
                >
                  {footer.contact.address.street},
                  <br />
                  {footer.contact.address.city}
                </Typography>
              </Box>
              <Box
                component="a"
                href={`tel:${footer.contact.phone.replace(/\s+/g, "")}`}
                sx={{
                  display: "flex",
                  gap: 2,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": {
                    "& .MuiTypography-root": {
                      color: theme.palette.primary.light,
                    },
                    "& .MuiSvgIcon-root": {
                      transform: "translateY(-2px)",
                    },
                  },
                }}
              >
                <PhoneIcon
                  sx={{
                    color: theme.palette.primary.light,
                    transition: "transform 0.3s ease",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    transition: "color 0.3s ease",
                  }}
                >
                  {footer.contact.phone}
                </Typography>
              </Box>
              <Box
                component="a"
                href={`mailto:${footer.contact.email}`}
                sx={{
                  display: "flex",
                  gap: 2,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": {
                    "& .MuiTypography-root": {
                      color: theme.palette.primary.light,
                    },
                    "& .MuiSvgIcon-root": {
                      transform: "translateY(-2px)",
                    },
                  },
                }}
              >
                <EmailIcon
                  sx={{
                    color: theme.palette.primary.light,
                    transition: "transform 0.3s ease",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    transition: "color 0.3s ease",
                  }}
                >
                  {footer.contact.email}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: 3,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              opacity: 0.8,
            }}
          >
            {footer.copyright.replace("{year}", currentYear.toString())}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
