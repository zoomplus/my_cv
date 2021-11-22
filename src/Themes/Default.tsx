import { createTheme } from '@mui/material/styles';

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5'
        },
        secondary: {
            main: '#a33fb5',
        },
        background: {
            default: '#fafafa',
            paper: '#fff'
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