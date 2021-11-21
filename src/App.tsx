//system
import React, {
    useState
} from 'react';

//libs
import { Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

//components
import Router from './Pages/Router';
import Header from "./Header";
import Footer from "./Footer";

//themes
import { defaultTheme } from './Themes/Default';

//1) Тема меняется после перехода по странице с работой в портфолио

//2) Не стал добавлять контекст из-за того что будет не правильно иметь 2
// контекста которые оба выполняют смену темы, поэтому смена темы пробрасывается
// через пропсы дочерним компонентам
const App = () => {
    const [theme, setTheme] = useState(defaultTheme);

    return (
        <ThemeProvider theme={theme}>
            <Box className="app" sx={{backgroundColor: "background.default"}}>
                <Header/>
                <Router setTheme={setTheme}/>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
};

export default App;
