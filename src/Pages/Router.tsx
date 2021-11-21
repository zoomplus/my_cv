//system
import React from 'react';

//libs
import { Routes, Route } from "react-router-dom";
import {Container} from "@mui/material";

//pages
import Main from './Main';
import About from "./About";

//themes
import { defaultTheme } from '../Themes/Default';
import { ItalianTheme } from '../Themes/ItalianTheme';

//interfaces
import { RouterProps } from './interfaces';

const Router = ({ setTheme }: RouterProps) => {
    return (
        <Container>
            <Routes>
                <Route path='/' element={<Main theme={defaultTheme} setTheme={setTheme}/>}/>
                <Route path='/about/' element={<About theme={ItalianTheme} setTheme={setTheme}/>}/>
            </Routes>
        </Container>
    );
};

export default Router;
