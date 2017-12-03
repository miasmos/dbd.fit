const Powers = {
	SPENCERS_LAST_BREATH: {
		index: 'SPENCERS_LAST_BREATH',
		name: 'Spencer\'s Last Breath',
		description: 'A powerful and violent last breath snatched from Crotus Prenn Asylum warden Patrick Spencer. Channelling its energy allows The Nurse to pierce and jump through the spirit world in a blink multiple times in a row. Doing so leaves her in a state of fatigue.',
		abilities: [
			'Grants the Blink.',
			'Grants 1 additional chain Blink.'
		],
		image: 'images/Nurse_SpencersLastBreath.png'
	},
	BEAR_TRAP: {
		index: 'BEAR_TRAP',
		name: 'Bear Trap',
		description: 'A large foothold trap made of steel. Traps are found laying around the area to be picked up and set anywhere.',
		abilities: [
			'%bImmobilizes and injures%b trapped victim.'
		],
		image: 'images/Nurse_SpencersLastBreath.png'
	},
	WAILING_BELL: {
		index: 'WAILING_BELL',
		name: 'Wailing Bell',
		description: 'A heavy cast iron bell imbued with ancient powers. Allows its user to enter and walk the spirit world when rung.',
		abilities: [
			'Grants near total %binvisibility%b.',
			'%bFaster%b movement when invisible.',
			'Cannot attack or interact while invisible.'
		],
		image: 'images/Nurse_SpencersLastBreath.png'
	},
	CHAINSAW: {
		index: 'CHAINSAW',
		name: 'Chainsaw',
		description: 'A hulking and deadly chainsaw of terrifying strength. Grinds through flesh, bone and soul. Once revved up, sends its user into a violent frenzy.',
		abilities: [
			'Break into a %bcrazed sprint%b on activation.',
			'Automatically triggers %bdying state%b on a successful hit.'
		],
		image: 'images/.png'
	},
	HUNTING_HATCHETS: {
		index: 'HUNTING_HATCHETS',
		name: 'Hunting Hatchets',
		description: 'A skill taught by her mother and mastered in the wild. The Huntress can hurl Hatchets with deadly precision.',
		abilities: [
			'Start the trial with %b5 Hatchets%b.',
			'Charge throw for maximum throwing speed.',
			'Refill Hatchets at %bLockers%b.'
		],
		image: 'images/.png'
	},
	EVIL_WITHIN: {
		index: 'EVIL_WITHIN',
		name: 'Evil Within',
		description: 'The darkness inside feeds his determination to take the life of his prey. Activating Evil Within allows The Shape to see his prey clearly and build up more evil power by stalking them. Evil Within\'s 3 Tiers of power come with different benefits:',
		flavor: 'I met him, fifteen years ago; I was told there was nothing left; no reason, no conscience, no understanding; and even the most rudimentary sense of life or death, of good or evil, right or wrong. I met this six-year-old child, with this blank, pale, emotionless face, and the blackest of eyes... the devil\'s eyes. I spent eight years trying to reach him, and the another seven trying to keep him locked up because I realized that what was living behind that boy\'s eyes was purely and simply... evil.',
		abilities: [
			'EVIL WITHIN I: Tremendously Decreased Terror Radius. Grants immunity to detection perks. Slightly decreased movement speed. Slightly decreased lunge.',
			'EVIL WITHIN II: Moderately Decreased Terror Radius. Slightly Increased movement speed. Slightly increased lunge.',
			'EVIL WITHIN III: Normal Terror Radius. Attacks do double damage. Evil Within III lasts for 60 seconds after which its power is considerably drained.'
		],
		image: 'images/.png'
	},
	BLACKENED_CATALYST: {
		index: 'BLACKENED_CATALYST',
		name: 'Blackened Catalyst',
		description: 'Source of The Hag\'s power, a blackened finger used as a catalyst for her terrible power. The Hag bends and shapes the mud to her will. With simple ritualistic drawings, she creates deceitful duplicates of herself made from mud and decay which she can use for various effects.',
		abilities: [
			'Grants the ability to create and maintain %b10%b Phantasm traps.',
			'Grants the ability to instantly travel to triggered Phantasm traps when within a %b32 meter%b range.'
		],
		image: 'images/.png'
	},
	BUBBAS_CHAINSAW: {
		index: 'BUBBAS_CHAINSAW',
		name: 'Bubba\'s Chainsaw',
		description: 'An incredibly powerful and heavy chainsaw which sank its teeth into countless victims. A suitable birthday gift for %bThe Cannibal%b.',
		abilities: [
			'Start a timed sweeping attack on activation.',
			'Can hit multiple targets in one chainsaw charge.',
			'Running into an object forces %bThe Cannibal%b into a %bTantrum%b, this attack damages anyone around him.',
			'Automatically puts victims in the %bdying state%b on a successful hit.'
		],
		image: 'images/.png'
	},
	CARTERS_SPARK: {
		index: 'CARTERS_SPARK',
		name: 'Carter\'s Spark',
		description: 'Is it a gift, or a curse? The Entity has ignited a corrupted and inexhaustible spark in The Doctor\'s heart which allows him to generate electroconvulsive power at will. His insidious treatment corrupts the minds of those it touches. Victims shocked by the corrupt spark begin to lose their grip on reality and, with repeated exposure, inevitably succumb to madness.',
		abilities: [
			'%bSwitch Stance%b: Punishment mode is used to injure survivors. Treatment mode grants the abilities %bStatic Field%b and %bShock Therapy%b.',
			'%bStatic Field%b: While in Treatment mode, generate a Static Field equal to your terror radius which increases survivors %bMadness%b based on proximity to The Doctor.',
			'%bShock Therapy%b: %bTreatment%b mode grants the ability to charge and release a %bShock Therapy%b attack that greatly increases survivors\' %bMadness%b.',
			'%bMadness Tier I%b: Causes survivors to scream revealing their position to The Doctor.',
			'%bMadness Tier II%b: All effects of %bTier I%b. Causes survivors to experience %bShared Hallucinations%b.',
			'%bMadness Tier III%b: All effect of %bTier II%b. %bShared Hallucinations%b intensify allowing The Doctor to read their %bAuras%b. Survivors regularly scream revealing their position to The Doctor. Survivors cannot heal, repair, sabotage or cleanse until they %bSnap Out Of It%b.',
			'More %bAfflications%b are available with add-ons.'
		],
		image: 'images/.png'
	},
	DREAM_DEMON: {
		index: 'DREAM_DEMON',
		name: 'Dream Demon',
		description: '',
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
		image: 'images/.png'
	}
}

export default Powers
