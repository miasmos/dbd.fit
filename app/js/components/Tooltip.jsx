import React from 'react'

const Tooltip = ({ body }) => {
	return (
		<div className="tooltip">
			<div className="body">
				<div className="text">{body}</div>
				<div className="background"></div>
			</div>
		</div>
	)
}

export default Tooltip