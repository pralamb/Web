import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
  Stack,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { UI_TEXTS } from "../../config/constants";
import PralambLogo2 from "../logo/Logo2";
const { navigation, footer } = UI_TEXTS;

interface Props {
  window?: () => Window;
}

const Navbar = (props: Props) => {
  const { window } = props;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "transparent",
        backdropFilter: trigger ? "blur(10px)" : "none",
        boxShadow: trigger ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        borderBottom: trigger ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: "64px", md: "80px" },
            py: { xs: 1, md: 1.5 },
          }}
        >
          {/* Logo - Desktop */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              height: "64px", // Ajusta esto según la altura de tu barra de navegación
            }}
          >
            <PralambLogo2 width={150} height={40} />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  background: "rgba(26, 47, 56, 0.9)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  marginTop: "1rem",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              {navigation.items.map((item) => (
                <MenuItem
                  key={item.title}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={item.path}
                  selected={location.pathname === item.path}
                  sx={{
                    color: theme.palette.common.white,
                    "&.Mui-selected": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: theme.palette.primary.light,
                    },
                  }}
                >
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="/logo.webp"
              alt="Logo"
              sx={{
                height: "40px",
                width: "auto",
              }}
            />
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 4,
            }}
          >
            {navigation.items.map((item) => (
              <Button
                key={item.title}
                component={RouterLink}
                to={item.path}
                onClick={handleCloseNavMenu}
                sx={{
                  color: theme.palette.common.white,
                  display: "block",
                  fontWeight: 500,
                  fontSize: "1rem",
                  textTransform: "none",
                  position: "relative",
                  opacity: location.pathname === item.path ? 1 : 0.7,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: location.pathname === item.path ? "100%" : "0%",
                    height: "2px",
                    bottom: -2,
                    left: 0,
                    backgroundColor: theme.palette.primary.light,
                    transition: "width 0.3s ease",
                  },
                  "&:hover": {
                    opacity: 1,
                    "&::after": {
                      width: "100%",
                    },
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          {/* Social Icons */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {[
              {
                icon: <WhatsAppIcon />,
                url: `https://wa.me/${footer.contact.phone.replace(/\D/g, "")}`,
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
                size="small"
                sx={{
                  color: theme.palette.common.white,
                  opacity: 0.7,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
