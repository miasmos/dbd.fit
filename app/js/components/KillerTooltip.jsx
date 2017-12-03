import React from 'react'
import BoldSpan from './BoldSpan'
import PowerFactory from '../PowerFactory'
import { KillerPerkFactory } from '../PerkFactory'
import TextInterpolator from '../TextInterpolator.jsx'

const Perk = ({ perkKey, comma = false }) => {
	const perk = KillerPerkFactory.get(perkKey)
	return <BoldSpan text={perk.name} comma={comma} />
}

const KillerTooltip = ({ killer }) => {
	const power = PowerFactory.get(killer.power)
	const perks = killer.perks.map((value, index) => <Perk key={index} comma={index !== killer.perks.length - 1} perkKey={value} />)
	const abilities = killer.abilities.map((value, index) => <li key={index}>{TextInterpolator.get(value)}</li>)

	return (
		<div className="tooltip tooltip-detailed">
			<div className="banner"><h2>{killer.name}</h2></div>
			<div className="body">
				<div className="text">
					Power: <BoldSpan text={power.name} />
					<ul>
						{abilities}
						<li>Teachable Perks: {perks}</li>
					</ul>
				</div>
				<div className="background"></div>
			</div>
		</div>
	)
}

export default KillerTooltip
