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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ROUTES } from "../../config/constants";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  { title: "Inicio", path: ROUTES.HOME },
  { title: "Servicios", path: ROUTES.SERVICES },
  { title: "Sobre Nosotros", path: ROUTES.ABOUT },
  { title: "Contacto", path: ROUTES.CONTACT },
];

interface Props {
  window?: () => Window;
}

const Navbar = (props: Props) => {
  const { window } = props;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const location = useLocation();

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
        background: trigger ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: trigger ? "blur(10px)" : "none",
        boxShadow: trigger ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        borderBottom: trigger ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: trigger ? "#2C3E2D" : "white",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
          >
            ECOAMBIENTAL
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: trigger ? "#2C3E2D" : "white",
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
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  marginTop: "1rem",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                  selected={location.pathname === page.path}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "rgba(139, 195, 74, 0.1)",
                      color: "#8BC34A",
                    },
                  }}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: 700,
              color: trigger ? "#2C3E2D" : "white",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
          >
            ECOAMBIENTAL
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 4,
            }}
          >
            <AnimatePresence>
              {pages.map((page) => (
                <motion.div
                  key={page.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    component={RouterLink}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: trigger ? "#2C3E2D" : "white",
                      display: "block",
                      fontWeight: 500,
                      fontSize: "1rem",
                      textTransform: "none",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: location.pathname === page.path ? "100%" : "0%",
                        height: "2px",
                        bottom: -2,
                        left: 0,
                        backgroundColor: "#8BC34A",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {page.title}
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </Box>

          {/* Contact Button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              component={RouterLink}
              to={ROUTES.CONTACT}
              variant="contained"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                py: 1.5,
                px: 4,
                backgroundColor: "#8BC34A",
                color: "white",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 10px 20px rgba(139, 195, 74, 0.2)",
                background: "linear-gradient(45deg, #8BC34A 0%, #7CB342 100%)",
                border: "none",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 15px 30px rgba(139, 195, 74, 0.3)",
                  background:
                    "linear-gradient(45deg, #7CB342 0%, #689F38 100%)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Contáctanos
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
