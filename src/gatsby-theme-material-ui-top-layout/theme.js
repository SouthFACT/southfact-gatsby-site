import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    // Style sheet name
    MuiButton: {
      styleOverrides: {
      // Name of the rule
        text: {
          // Some CSS
          color: '#FFF',
          backgroundColor: '#9F5222',
          textTransform: "none",
          '&:hover': {
            backgroundColor: '#D9A265',
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    background: {
      default: "#303030"
    }
  },
});

export default theme