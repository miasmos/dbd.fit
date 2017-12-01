import React from 'react'
import BoldSpan from './components/BoldSpan'

class TextInterpolator {
	static get(text) {
		const fragments = text.split('%b')
		const component = []

		fragments.map((value, index) => {
			if (index % 2 === 0 || index === 0) {
				component.push(value)
			} else {
				component.push(<BoldSpan key={index} text={value} />)
			}
			return false
		})
	
		return component
	}
}

export default TextInterpolator
