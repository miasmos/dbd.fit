const Killers = {
	NURSE: {
		index: 'NURSE',
		name: 'The Nurse',
		power: 'SPENCERS_LAST_BREATH',
		abilities: [
			'Blink up to %b20 meters%b on charge activation.',
			'Can blink twice before becoming fatigued.',
			'Can perform a lethal blink attack after blinking.'
		],
		perks: ['STRIDOR', 'THANATOPHOBIA', 'A_NURSES_CALLING'],
		effects: ['ACCURACY', 'RANGE', 'MOVEMENT_SPEED', 'CHAIN_WINDOW', 'CHARGE_SPEED', 'FATIGUE_TIME', 'BLINK_COUNT', 'LANDING_AREA'],
		image: 'images/56px-IconChar_theNurse2.png'
	},
	TRAPPER: {
		index: 'TRAPPER',
		name: 'The Trapper',
		power: 'BEAR_TRAP',
		abilities: [
			''
		],
		perks: ['UNNERVING_PRESENCE', 'BRUTAL_STRENGTH', 'AGITATION'],
		effects: ['SETTING_TIME', 'ESCAPE_DIFFICULTY', 'RESCUE_TIME', 'HEAVY_BLEEDING', 'SABOTAGE_SUCCESS_ZONE', 'TRAP_COUNT', 'DARKNESS', 'HEALING_TIME', 'SABOTAGE_TIME', 'DYING'],
		image: 'images/56px-IconChar_theTrapper.png'
	},
	WRAITH: {
		index: 'WRAITH',
		name: 'The Wraith',
		power: 'WAILING_BELL',
		abilities: [
			''
		],
		perks: ['PREDATOR', 'BLOODHOUND', 'SHADOWBORN'],
		effects: ['NOISE_RANGE', 'REAPPEARANCE_TIME', 'DISAPPEARANCE_TIME', 'LIGHTBURN_RESISTANCE', 'MOVEMENT_SPEED', 'SURVIVOR_AURA', 'STEALTH'],
		image: 'images/56px-IconChar_theWraith.png'
	},
	HILLBILLY: {
		index: 'HILLBILLY',
		name: 'The Hillbilly',
		power: 'CHAINSAW',
		abilities: [
			''
		],
		perks: ['ENDURING', 'LIGHTBORN', 'TINKERER'],
		effects: ['COOLDOWN', 'CHARGE_TIME', 'NOISE', 'STEERING', 'REACH', 'REPAIR_SPEED', 'BUMP_PENALTY', 'HEALING_TIME', 'REPAIR_SPEED'],
		image: 'images/56px-IconChar_theCrooked.png'
	},
	SHAPE: {
		index: 'SHAPE',
		name: 'The Shape',
		power: 'EVIL_WITHIN',
		abilities: [
			''
		],
		perks: ['SAVE_THE_BEST_FOR_LAST', 'PLAY_WITH_YOUR_FOOD', 'DYING_LIGHT'],
		effects: [],
		image: 'images/56px-SH_charSelect_portrait2.png'
	},
	HAG: {
		index: 'HAG',
		name: 'The Hag',
		power: 'BLACKENED_CATALYST',
		abilities: [
			''
		],
		perks: ['HEX_THE_THIRD_SEAL', 'HEX_RUIN', 'HEX_DEVOUR_HOPE'],
		effects: ['SETTING_TIME', 'DURATION_TIME', 'TELEPORT_RANGE', 'TRAP_RANGE', 'SURVIVOR_AURA', 'PHANTASM_COLLISION', 'MOVEMENT_SPEED', 'PHANTASM_SPAWN', 'TERROR_RADIUS', 'PHANTASM_TERROR_RADIUS', 'DEAFENED', 'SLOW_DOWN', 'TELEPORT_COOLDOWN'],
		image: 'images/56px-IconChar_hag2.png'
	},
	DOCTOR: {
		index: 'DOCTOR',
		name: 'The Doctor',
		power: 'CARTERS_SPARK',
		abilities: [
			''
		],
		perks: ['OVERWHELMING_PRESENCE', 'MONITOR_AND_ABUSE', 'OVERCHARGE'],
		effects: ['ATTACK_RANGE', 'CHARGE_TIME', 'AREA_REVEAL', 'MADNESS', 'ILLUSIONARY_PALLETS', 'TERROR_RADIUS', 'SURVIVOR_AURA', 'HEARTBEAT'],
		image: 'images/56px-DO_charSelect_portrait.png'
	},
	HUNTRESS: {
		index: 'HUNTRESS',
		name: 'The Huntress',
		power: 'HUNTING_HATCHETS',
		abilities: [
			''
		],
		perks: ['BEAST_OF_PREY', 'TERRITORIAL_IMPERATIVE', 'HEX_HUNTRESS_LULLABY'],
		effects: ['HEMORRHAGE', 'EXHAUSTION', 'COOLDOWN_TIME', 'BLINDNESS', 'HINDERED', 'MOVEMENT_SPEED', 'WIND_UP_TIME', 'HATCHET_COUNT', 'RELOAD_TIME', 'MANGLED', 'LOCKER_AURA', 'SURVIVOR_AURA', 'REPAIR_SPEED', 'DYING'],
		image: 'images/56px-BE_charSelect_portrait2.png'
	},
	CANNIBAL: {
		index: 'CANNIBAL',
		name: 'The Cannibal',
		power: 'THE_SLEDGE',
		abilities: [
			''
		],
		perks: ['KNOCK_OUT', 'BARBECUE_AND_CHILI', 'FRANKLINS_DEMISE'],
		effects: ['COOLDOWN', 'CHARGE_TIME', 'NOISE', 'DYING', 'MOVEMENT_SPEED', 'REPAIR_SPEED', 'BUMP_PENALTY', 'HEALING_TIME', 'REACH', 'ACCERLATION'],
		image: 'images/64px-CA_charSelect_portrait.png'
	},
	NIGHTMARE: {
		index: 'NIGHTMARE',
		name: 'The Nightmare',
		power: 'DREAM_DEMON',
		abilities: [
			''
		],
		perks: ['FIRE_UP', 'REMEMBER_ME', 'BLOOD_WARDEN'],
		effects: ['SKILL_CHECK', 'DREAM_TRANSITION', 'POWER_RANGE', 'MOVEMENT_SPEED', 'ACTION_SPEED', 'GLIMPSE', 'SURVIVOR_AURA', 'TERROR_RADIUS', 'OBSESSION'],
		image: 'images/56px-SD_charSelect_portrait.png'
	}
}

export default Killers
