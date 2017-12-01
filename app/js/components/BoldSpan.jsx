import React from 'react'

const BoldSpan = ({ text, comma = false }) => (
	<span className="font-regular-bold">{text}{!!comma ? ', ' : ''}</span>
)

export default BoldSpan
