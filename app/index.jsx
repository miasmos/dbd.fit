import React from 'react';
import ReactDOM from 'react-dom';
import { Config, Env } from './js/services';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import * as Factories from './js/factories'; // init
import { Store } from './js/react/Store';
import { App } from './js/react/components/App';
import { Unsupported } from './js/Unsupported';

require('./index.scss');

if (!Unsupported.unsupported) {
    ReactDOM.render(
        Env.isDevelopment ? (
            <HashRouter>
                <App />
            </HashRouter>
        ) : (
            <BrowserRouter basename={Config.baseName}>
                <App />
            </BrowserRouter>
        ),
        document.getElementById('root')
    );
}
