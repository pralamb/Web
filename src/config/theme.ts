import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = {
  colors: {
    primary: "#4A5D4B", // Verde oscuro del logo
    secondary: "#A7B8A1", // Verde claro del logo
    accent: "#8FA891", // Verde medio para acentos
    background: "#F9F6F3", // Beige muy claro del fondo del logo
    text: "#4A5D4B", // Mismo color que el primario para consistencia
    white: "#FFFFFF",
    gray: {
      light: "#E8E6E3",
      medium: "#B8B5B2",
      dark: "#6B6967",
    },
  },
  typography: {
    fontFamily: {
      primary: '"Inter", sans-serif',
      secondary: '"Poppins", sans-serif',
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
    },
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    full: "9999px",
  },
};

let muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
      light: theme.colors.secondary,
      dark: "#2C3E2D",
      contrastText: theme.colors.white,
    },
    secondary: {
      main: theme.colors.secondary,
      light: theme.colors.accent,
      dark: "#96A797",
      contrastText: theme.colors.text,
    },
    background: {
      default: theme.colors.background,
      paper: theme.colors.white,
    },
    text: {
      primary: theme.colors.text,
      secondary: theme.colors.gray.dark,
    },
  },
  typography: {
    fontFamily: theme.typography.fontFamily.primary,
    h1: {
      fontFamily: theme.typography.fontFamily.secondary,
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: theme.typography.fontFamily.secondary,
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: theme.typography.fontFamily.secondary,
      fontWeight: 600,
    },
    h4: {
      fontFamily: theme.typography.fontFamily.secondary,
      fontWeight: 600,
    },
    h5: {
      fontFamily: theme.typography.fontFamily.secondary,
      fontWeight: 500,
    },
    h6: {
      fontFamily: theme.typography.fontFamily.secondary,
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 500,
      letterSpacing: "0.02em",
    },
    subtitle2: {
      fontWeight: 500,
      letterSpacing: "0.02em",
    },
    body1: {
      letterSpacing: "0.01em",
      lineHeight: 1.7,
    },
    body2: {
      letterSpacing: "0.01em",
      lineHeight: 1.7,
    },
    button: {
      fontWeight: 500,
      letterSpacing: "0.02em",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.borderRadius.full,
          padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
          fontSize: theme.typography.fontSize.base,
          transition: "all 0.3s ease-in-out",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: theme.borderRadius.lg,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: theme.colors.secondary,
          color: theme.colors.text,
          borderRadius: theme.borderRadius.full,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: theme.colors.accent,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing.md,
          paddingRight: theme.spacing.md,
          "@media (min-width: 600px)": {
            paddingLeft: theme.spacing.lg,
            paddingRight: theme.spacing.lg,
          },
        },
      },
    },
  },
});

muiTheme = responsiveFontSizes(muiTheme);

export { muiTheme };
