import React from 'react'
import { KillerFactory, SurvivorFactory } from '../PlayerFactory'
import KillerTooltip from './KillerTooltip'
import { Types } from '../data/Enum'

const PlayerSelector = ({typeSelected, type}) => {
	const data = type === Types.KILLER ? KillerFactory.toArray() : SurvivorFactory.toArray()
	const players = data.map((value, index) => (
		<div className="player tooltip-activator" key={index}>
			<div className="outline">
				<img className="top" src="../images/profile-outline-horizontal.png" />
				<img className="bottom" src="../images/profile-outline-horizontal.png" />
				<img className="left" src="../images/profile-outline-vertical.png" />
				<img className="right" src="../images/profile-outline-vertical.png" />
			</div>
			<img className="profile" src={value.image} />
			<img className="background" src="../images/Profile_Background.png" />
			<KillerTooltip killer={value} />
		</div>
	))

	return ( <div className="player-selector">{players}</div> )
}

export default PlayerSelector