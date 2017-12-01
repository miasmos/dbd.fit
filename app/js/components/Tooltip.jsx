import React from 'react'

const Tooltip = ({title, body}) => {
	return (
		<div className={'tooltip' + (!!title ? ' tooltip-detailed' : '')}>
			{!!title &&
				<div className="banner"><h2>{title}</h2></div>
			}
			<div className="body">
				<div className="text" dangerouslySetInnerHTML={{__html: body}}></div>
				<div className="background"></div>
			</div>
		</div>
	)
}

export default Tooltip