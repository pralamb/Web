import { useState, useEffect } from "react";
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
import { NAVIGATION, COMPANY_INFO } from "../../config/constants";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
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
      sx={{
        background: trigger
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: trigger ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: "70px", md: "90px" },
            transition: "min-height 0.3s ease-in-out",
          }}
        >
          {/* Logo - Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 4,
              height: trigger ? "70px" : "80px",
              transition: "height 0.3s ease-in-out",
            }}
            component={RouterLink}
            to="/"
          >
            <Box
              component="img"
              src="/logo.webp"
              alt={COMPANY_INFO.name}
              sx={{
                height: "100%",
                width: "auto",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Box>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
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
                  borderRadius: 2,
                  mt: 1.5,
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                },
              }}
            >
              {NAVIGATION.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={item.path}
                  selected={location.pathname === item.path}
                  sx={{
                    minWidth: 200,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "rgba(74, 93, 75, 0.08)",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "rgba(74, 93, 75, 0.12)",
                    },
                  }}
                >
                  <Typography textAlign="center">{item.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              height: "60px",
            }}
            component={RouterLink}
            to="/"
          >
            <Box
              component="img"
              src="/logo.webp"
              alt={COMPANY_INFO.name}
              sx={{
                height: "100%",
                width: "auto",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Box>

          {/* Desktop menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 1,
            }}
          >
            {NAVIGATION.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  px: 3,
                  color: "text.primary",
                  position: "relative",
                  fontWeight: 500,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 10,
                    left: 12,
                    right: 12,
                    height: 2,
                    bgcolor: "primary.main",
                    transform:
                      location.pathname === item.path
                        ? "scaleX(1)"
                        : "scaleX(0)",
                    transition: "transform 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
