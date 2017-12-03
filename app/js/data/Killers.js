const Killers = {
	TRAPPER: {
		index: 'TRAPPER',
		name: 'The Trapper',
		power: 'BEAR_TRAP',
		abilities: [
			'Set bear traps to immobilize and injure trapped victims.',
			'Starts match with %b1%b bear trap.',
			'%b5%b bear traps are available randomly placed in the level.'
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
			'Charge action that grants near total invisibility.',
			'Faster movement speed when cloaked.',
			'Cannot attack or interact while cloaked.'
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
			'Break into a crazed spring on charge activation.',
			'Limited steering capabilities while sprinting.',
			'Automatically puts in the dying state on a successful hit.'
		],
		perks: ['ENDURING', 'LIGHTBORN', 'TINKERER'],
		effects: ['COOLDOWN', 'CHARGE_TIME', 'NOISE', 'STEERING', 'REACH', 'REPAIR_SPEED', 'BUMP_PENALTY', 'HEALING_TIME', 'REPAIR_SPEED'],
		image: 'images/56px-IconChar_theCrooked.png'
	},
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
	HUNTRESS: {
		index: 'HUNTRESS',
		name: 'The Huntress',
		power: 'HUNTING_HATCHETS',
		abilities: [
			'%bCharge throw%b for maximum throwing speed.',
			'Can %bcancel%b Hatchet throw.',
			'Hatchets are %bconsumed%b on use.',
			'%bRefill Hatchets%b at Lockers',
			'The Huntress %bHums%b from 45m to 20m, %bTerror Radius%b starts from 20m',
			'Slightly %bdecreased%b movement speed.'
		],
		perks: ['BEAST_OF_PREY', 'TERRITORIAL_IMPERATIVE', 'HEX_HUNTRESS_LULLABY'],
		effects: ['HEMORRHAGE', 'EXHAUSTION', 'COOLDOWN_TIME', 'BLINDNESS', 'HINDERED', 'MOVEMENT_SPEED', 'WIND_UP_TIME', 'HATCHET_COUNT', 'RELOAD_TIME', 'MANGLED', 'LOCKER_AURA', 'SURVIVOR_AURA', 'REPAIR_SPEED', 'DYING'],
		image: 'images/56px-BE_charSelect_portrait2.png'
	},
	SHAPE: {
		index: 'SHAPE',
		name: 'The Shape',
		power: 'EVIL_WITHIN',
		abilities: [
			'Stalk survivors to charge up Evil Within.',
			'Evil Within has 3 unique tiers that affect his ability to hunt survivors.',
			'Evil Within 1 has a greatly reduced terror radius.',
			'Evil Within 3 unlocks the ability to automatically put in the dying state on a successful attack for a limited time.',
			'Survivors\' white highlights changes to red when they are maxed out with Evil Within'
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
			'Grants the ability to create and maintain %b10%b phantasm traps.',
			'Grants the ability to instantly travel to triggered phantasm when within a %b32 meter%b range.',
			'Survivors who enter the trap area trigger a phantasm of The Hag to appear and disorient the survivor.'
		],
		perks: ['HEX_THE_THIRD_SEAL', 'HEX_RUIN', 'HEX_DEVOUR_HOPE'],
		effects: ['SETTING_TIME', 'DURATION_TIME', 'TELEPORT_RANGE', 'TRAP_RANGE', 'SURVIVOR_AURA', 'PHANTASM_COLLISION', 'MOVEMENT_SPEED', 'PHANTASM_SPAWN', 'TERROR_RADIUS', 'PHANTASM_TERROR_RADIUS', 'DEAFENED', 'SLOW_DOWN', 'TELEPORT_COOLDOWN'],
		image: 'images/56px-IconChar_hag2.png'
	},
	CANNIBAL: {
		index: 'CANNIBAL',
		name: 'The Cannibal',
		power: 'BUBBAS_CHAINSAW',
		abilities: [
			'Break into a crazed sprint on charge activation',
			'Sprint lasts 3 seconds',
			'Damage is applied in a wide cone in front of %bThe Cannibal%b as he chainsaw sprints.',
			'The Cannibal is in full control of his movement during the chainsaw sprint.',
			'Can hit %bmultiple%b targets in one chainsaw charge.',
			'Running into an object will force %bThe Cannibal%b into a %bTantrum%b, this attack damages anyone around him.',
			'Automatically triggers the dying state on a successful hit.'
		],
		perks: ['KNOCK_OUT', 'BARBECUE_AND_CHILI', 'FRANKLINS_DEMISE'],
		effects: ['COOLDOWN', 'CHARGE_TIME', 'NOISE', 'DYING', 'MOVEMENT_SPEED', 'REPAIR_SPEED', 'BUMP_PENALTY', 'HEALING_TIME', 'REACH', 'ACCERLATION'],
		image: 'images/64px-CA_charSelect_portrait.png'
	},
	DOCTOR: {
		index: 'DOCTOR',
		name: 'The Doctor',
		power: 'CARTERS_SPARK',
		abilities: [
			'%bSwitch Stance%b: Punishment mode is used to injure survivors. Treatment mode grants the abilities %bStatic Field%b and %bShock Therapy%b.',
			'%bStatic Field%b: While in Treatment mode, generate a Static Field equal to your terror radius which increases survivors %bMadness%b based on proximity to The Doctor.',
			'%bShock Therapy%b: %bTreatment%b mode grants the ability to charge and release a %bShock Therapy%b attack that greatly increases survivors\' %bMadness%b.',
			'%bMadness Tier I%b: Causes survivors to scream revealing their position to The Doctor.',
			'%bMadness Tier II%b: All effects of %bTier I%b. Causes survivors to experience %bShared Hallucinations%b.',
			'%bMadness Tier III%b: All effect of %bTier II%b. %bShared Hallucinations%b intensify allowing The Doctor to read their %bAuras%b. Survivors regularly scream revealing their position to The Doctor. Survivors cannot heal, repair, sabotage or cleanse until they %bSnap Out Of It%b.',
			'More %bAfflications%b are available with add-ons.'
		],
		perks: ['OVERWHELMING_PRESENCE', 'MONITOR_AND_ABUSE', 'OVERCHARGE'],
		effects: ['ATTACK_RANGE', 'CHARGE_TIME', 'AREA_REVEAL', 'MADNESS', 'ILLUSIONARY_PALLETS', 'TERROR_RADIUS', 'SURVIVOR_AURA', 'HEARTBEAT'],
		image: 'images/56px-DO_charSelect_portrait.png'
	},
	NIGHTMARE: {
		index: 'NIGHTMARE',
		name: 'The Nightmare',
		power: 'DREAM_DEMON',
		abilities: [
			'Pull survivors into the %bDream World%b',
			'Survivors who are awake do not see %bThe Nightmare%b.',
			'Once targeted by %bThe Nightmare\'s%b power, Survivors enter the %bDream Transition%b for %b7 seconds%b.',
			'During the %bDream Transition%b they can see %bThe Nightmare%b intermittently.',
			'When the %bDream Transition%b lapses, the Survivor is pulled into the %bDream World%b.',
			'Once in the %bDream World%b:',
			'Survivors\' auras are revealed to %bThe Nightmare%b when they are outside his terror radius.',
			'Survivors suffer an action speed penalty of 50%.',
			'To exit the Dream World, Survivors can find non-sleeping Survivors to perform a wake up action.',
			'Some failed actions can also wake up.',
			'Hooked survivors wake up.'
		],
		perks: ['FIRE_UP', 'REMEMBER_ME', 'BLOOD_WARDEN'],
		effects: ['SKILL_CHECK', 'DREAM_TRANSITION', 'POWER_RANGE', 'MOVEMENT_SPEED', 'ACTION_SPEED', 'GLIMPSE', 'SURVIVOR_AURA', 'TERROR_RADIUS', 'OBSESSION'],
		image: 'images/56px-SD_charSelect_portrait.png'
	}
}

export default Killers
