import {
  createTheme,
} from "@mui/material/styles";

interface CustomThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  white: string;
  gray: {
    light: string;
    medium: string;
    dark: string;
  };
}

declare module "@mui/material/styles" {
  interface Theme {
    colors: CustomThemeColors;
  }
  interface ThemeOptions {
    colors?: Partial<CustomThemeColors>;
  }
}

export const theme = {
  colors: {
    primary: "#4CAF50", // Verde principal
    secondary: "#8BC34A", // Verde claro
    accent: "#2196F3", // Azul para acentos
    background: "#1a2f38", // Fondo oscuro
    text: "#FFFFFF", // Texto principal
    white: "#FFFFFF",
    gray: {
      light: "rgba(255, 255, 255, 0.7)",
      medium: "rgba(255, 255, 255, 0.5)",
      dark: "rgba(255, 255, 255, 0.3)",
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
    mode: "dark",
    primary: {
      main: theme.colors.primary,
      light: theme.colors.secondary,
      dark: "#388E3C",
      contrastText: theme.colors.white,
    },
    secondary: {
      main: theme.colors.secondary,
      light: "#9CCC65",
      dark: "#7CB342",
      contrastText: theme.colors.text,
    },
    background: {
      default: theme.colors.background,
      paper: "rgba(255, 255, 255, 0.05)",
    },
    text: {
      primary: theme.colors.text,
      secondary: theme.colors.gray.light,
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
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          },
        },
      },
    },
  },
});

// Add custom colors to theme
muiTheme = createTheme(muiTheme, {
  colors: theme.colors,
});

export { muiTheme };
