import { createTheme } from '@mui/material/styles';

export const ItalianTheme = createTheme({
    palette: {
        primary: {
            main: '#b63122',
        },
        secondary: {
            main: '#006500',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});