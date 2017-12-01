import React from 'react'
import Tooltip from './Tooltip'
import { KillerFactory, SurvivorFactory } from '../PlayerFactory'
import PowerFactory from '../PowerFactory'
import PerkFactory from '../PerkFactory'
import { Types } from '../data/Enum'

const PlayerSelector = ({typeSelected, type}) => {
	const data = type === Types.KILLER ? KillerFactory.toArray() : SurvivorFactory.toArray()
	const players = data.map((value, index) => {
		const power = PowerFactory.get(value.power)
		let abilities = '<ul class="abilities">'
		value.abilities.map((value, index) => abilities += `<li>${value}</li>`)

		let perks = '<li>Teachable Perks: <span class="font-regular-bold">'
		value.perks.map((value1, index1) => {
			const perk = PerkFactory.get(value1)

			if (index1 === value.perks.length - 1) {
				perks += `${perk.name}`
			} else {
				perks += `${perk.name}, `
			}
		})
		perks += '</span></li>'
		abilities += perks

		const body = `Power: <span class="font-regular-bold">${power.name}</span><br>${abilities}`

		return (
			<div className="player tooltip-activator" key={index}>
				<div className="outline">
					<img className="top" src="../images/profile-outline-horizontal.png" />
					<img className="bottom" src="../images/profile-outline-horizontal.png" />
					<img className="left" src="../images/profile-outline-vertical.png" />
					<img className="right" src="../images/profile-outline-vertical.png" />
				</div>
				<img className="profile" src={value.image} />
				<img className="background" src="../images/Profile_Background.png" />
				<Tooltip title={value.name} body={body} />
			</div>
		)
	})

	return (
		<div className={'player-selector' + (typeSelected ? ' fade-in' : '')}>
			{players}
		</div>
	)
}

export default PlayerSelector