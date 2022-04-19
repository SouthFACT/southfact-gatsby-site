import { createTheme, adaptV4Theme } from '@mui/material/styles';

const customTheme = createTheme(adaptV4Theme({
  overrides: {
    // Style sheet name
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        backgroundColor: '#9F5222',
        textTransform: "none",
        '&:hover': {
          backgroundColor: '#D9A265',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
  },
}));

export default customTheme