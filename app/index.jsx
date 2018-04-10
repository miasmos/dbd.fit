import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import * as Factories from './js/factories'; // init
import { Store } from './js/react/Store';
import { App } from './js/react/components/App';

require('./index.scss');

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);
