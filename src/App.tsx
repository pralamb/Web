import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./config/theme";
import { ROUTES } from "./config/constants";
import { useEffect } from "react";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function RouteHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Solo redirigir si estamos en una URL directa sin hash
    if (location.pathname !== '/' && !window.location.hash && !location.key) {
      // Usar navigate para una transición suave sin recargar la página
      navigate(location.pathname + location.search, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <RouteHandler />
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.BLOG_POST} element={<BlogPost />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
