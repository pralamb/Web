import { createTheme } from '@mui/material/styles'

export const theme = {
  colors: {
    primary: '#4A5D4B', // Verde oscuro del logo
    secondary: '#A7B8A1', // Verde claro del logo
    accent: '#8FA891', // Verde medio para acentos
    background: '#F9F6F3', // Beige muy claro del fondo del logo
    text: '#4A5D4B', // Mismo color que el primario para consistencia
    white: '#FFFFFF',
    gray: {
      light: '#E8E6E3',
      medium: '#B8B5B2',
      dark: '#6B6967'
    }
  },
  typography: {
    fontFamily: {
      primary: '"Inter", sans-serif',
      secondary: '"Poppins", sans-serif'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px'
  }
}

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
      light: theme.colors.secondary,
    },
    secondary: {
      main: theme.colors.secondary,
    },
    background: {
      default: theme.colors.background,
      paper: theme.colors.white,
    },
    text: {
      primary: theme.colors.text,
    },
  },
  typography: {
    fontFamily: theme.typography.fontFamily.primary,
    h1: {
      fontFamily: theme.typography.fontFamily.secondary,
    },
    h2: {
      fontFamily: theme.typography.fontFamily.secondary,
    },
    h3: {
      fontFamily: theme.typography.fontFamily.secondary,
    },
    h4: {
      fontFamily: theme.typography.fontFamily.secondary,
    },
    h5: {
      fontFamily: theme.typography.fontFamily.secondary,
    },
    h6: {
      fontFamily: theme.typography.fontFamily.secondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: theme.borderRadius.md,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: theme.borderRadius.lg,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: theme.colors.secondary,
          color: theme.colors.text,
        },
      },
    },
  },
}) 