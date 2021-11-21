import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <CssBaseline/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);
