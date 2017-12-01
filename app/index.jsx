import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './js/components/App'

require('./index.scss')

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
)
