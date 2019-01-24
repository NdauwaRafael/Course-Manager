import React from 'react';
import 'tailwindcss/dist/tailwind.min.css';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './components/App'

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

