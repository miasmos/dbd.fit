import React from 'react'
import BoldSpan from './BoldSpan'
import PowerFactory from '../PowerFactory'
import { SurvivorPerkFactory } from '../PerkFactory'
import TextInterpolator from '../TextInterpolator.jsx'

const Perk = ({ perkKey, comma = false }) => {
	const perk = SurvivorPerkFactory.get(perkKey)
	return <BoldSpan text={perk.name} comma={comma} />
}

const SurvivorTooltip = ({ survivor }) => {
	const perks = survivor.perks.map((value, index) => <Perk key={index} comma={index !== survivor.perks.length - 1} perkKey={value} />)

	return (
		<div className="tooltip tooltip-detailed">
			<div className="banner"><h2>{survivor.name}</h2></div>
			<div className="body">
				<div className="text">
					{survivor.power}
					<ul>
						<li>Teachable Perks: {perks}</li>
					</ul>
				</div>
				<div className="background"></div>
			</div>
		</div>
	)
}

export default SurvivorTooltip
