import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

import "./assets/css/bootstrap.css";
import "./assets/css/all.css";
import "./assets/css/fonts.css";
import "./assets/css/styles.css";
import "./assets/css/responsive.css";
import "./assets/datepicker/bootstrap-datetimepicker.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
