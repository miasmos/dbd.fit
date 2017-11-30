import React from 'react'
import ReactDOM from 'react-dom'
import * as Components from './js/components'
import { UserAgent, Loader } from './js/services'

require('./index.scss')

const DbD = () => (
	<div></div>
)

ReactDOM.render(
	<DbD></DbD>,
	document.getElementById('app')
)
