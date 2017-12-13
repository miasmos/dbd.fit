const Items = {
	CHINESE_FIRECRACKER: {
		index: 'CHINESE_FIRECRACKER',
		name: 'Chinese Firecracker',
		description: 'A row of small explosive devices wrapped in heavy paper casing. Detonates into loud bangs and intense light flashes.\nCan be used as a distraction, as a blinding device or to celebrate.',
		rarity: 'COMMON',
		image: 'images/.png'
	},
	FLASHLIGHT: {
		index: 'FLASHLIGHT',
		name: 'Flashlight',
		description: 'A standard Flashlight.\nCan be used to light your way in the darkness.',
		flavor: '"Most of the battery life was wastefully used by the previous owner."',
		type: 'FLASHLIGHT',
		rarity: 'UNCOMMON',
		image: 'images/.png'
	},
	WILL_O_WISP: {
		index: 'WILL_O_WISP',
		name: 'Will O\' Wisp',
		description: 'A Flashlight equipped with a special lens cover that adds an orange tint and a little Ghost to the beam.\nConsiderably increases Friendly Ghosts in your life.',
		flavor: '"Happy Trick or Treating!"',
		type: 'FLASHLIGHT',
		rarity: 'UNCOMMON',
		image: 'images/.png'
	},
	SPORT_FLASHLIGHT: {
		index: 'SPORT_FLASHLIGHT',
		name: 'Sport Flashlight',
		description: 'A very portable Flashlight with a good grip. Its efficient technology produces a powerful light while consuming less power.\nSlightly decreases Flashlight battery consumption.\nSlightly increases the Flashlight\'s accuracy.',
		type: 'FLASHLIGHT',
		rarity: 'RARE',
		image: 'images/.png'
	},
	UTILITY_FLASHLIGHT: {
		index: 'UTILITY_FLASHLIGHT',
		name: 'Utility Flashlight',
		description: 'A sturdy but heavy Flashlight that packs a lot of power.\nSlightly reduces accuracy.\nModerately increases the Flashlight beam effects against the Killer.',
		type: 'FLASHLIGHT',
		rarity: 'VERY_RARE',
		image: 'images/.png'
	},
	BROKEN_KEY: {
		index: 'BROKEN_KEY',
		name: 'Broken Key',
		description: 'The bow and shank of a key, vibrating with power. The Broken Key\'s power cannot be triggered by itself. Various objects can be attached to its jump ring, which channels the Broken Key\'s power into various effects.\nRequires Add-ons for any abilities.',
		type: 'KEY',
		rarity: 'RARE',
		image: 'images/.png'
	},
	DULL_KEY: {
		index: 'DULL_KEY',
		name: 'Dull Key',
		description: 'A bent and dull Key that once held great power. The Dull Key\'s power cannot be triggered by itself. Various objects can be attached to its jump ring, which channels the Dull Key\'s remaining power into various effects.\nCan be consumed to open the Hatch.',
		type: 'KEY',
		rarity: 'VERY_RARE',
		image: 'images/.png'
	},
	SKELETON_KEY: {
		index: 'SKELETON_KEY',
		name: 'Skeleton Key',
		description: 'A tarnished and crooked Key, vibrating with ominous power. The Skeleton Key\'s power cannot be triggered by itself. Various objects can be attached to its jump ring, which channels the Skeleton Key\'s power into various effects.\nCan be consumed to open the Hatch.',
		type: 'KEY',
		rarity: 'ULTRA_RARE',
		image: 'images/.png'
	},
	MAP: {
		index: 'MAP',
		name: 'Map',
		description: 'An old piece of parchment made out of a skin-like material. Is rolled and sealed with an uncoloured leather string. Holding and channelling the map unlocks great potential in one\'s Aura reading ability which slowly burns the map. Generators\' Auras which you have already encountered are revealed to you for as long as the map has charges left.\nStarts with 1 Generator tracked.\nUnlocks ability to track generators within 8 meters.',
		type: 'MAP',
		rarity: 'RARE',
		image: 'images/.png'
	},
	RAINBOW_MAP: {
		index: 'RAINBOW_MAP',
		name: 'Rainbow Map',
		description: 'A piece of parchment made out of oddly fresh skin. Blood on its edge has yet to dry. It is rolled and sealed with multiple coloured ropes and cords. Holding and channelling the map unlocks a great potential in one\'s Aura reading ability which slowly burns up the map. Objects with Auras which you have already encountered are revealed to you for as long as the map has charges left.\nStarts with 3 Objects tracked.\nUnlocks the ability to track Generators within an 8 meter range.\nUnlocks the ability to track Hooks within an 8 meter range.\nUnlocks the ability to track Exit Gates within an 8 meter range.\nUnlocks the ability to track the Hatch within an 8 meter range.',
		flavor: '"It disheartens me. All this unspeakable knowledge and gruelling effort and yet nothing tangible, nothing usable to get out of this nightmare." — Vigo\'s Journal',
		type: 'MAP',
		rarity: 'ULTRA_RARE',
		image: 'images/.png'
	},
	CAMPING_AID_KIT: {
		index: 'CAMPING_AID_KIT',
		name: 'Camping Aid Kit',
		description: 'A rudimentary aid kit which can save lives in emergencies even if it\'s lacking some of its supplies.\nModerately increases the speed that you heal others.\nUnlocks the self-healing action.',
		flavor: '"Barely has enough material for a decent patch-up."',
		type: 'AID_KIT',
		rarity: 'COMMON',
		image: 'images/.png'
	},
	ALL_HALLOWS_EVE_LUNCHBOX: {
		index: 'ALL_HALLOWS_EVE_LUNCHBOX',
		name: 'All Hallows\' Eve Lunchbox',
		description: 'A plastic lunchbox with phosphorescent Halloween Stickers that has been packed with first-aid equipment.\nConsiderably increases the speed that you heal others.\nUnlocks the self-healing action.\nMakes you considerably more visible.',
		flavor: '"Safety first! Make sure you can be seen when trick or treating."',
		type: 'AID_KIT',
		rarity: 'COMMON',
		image: 'images/.png'
	},
	FIRST_AID_KIT: {
		index: 'FIRST_AID_KIT',
		name: 'First Aid Kit',
		description: 'A standard first aid kit with all the necessary equipment for treating common to more serious injuries.\nConsiderably increases the speed that you heal others.\nUnlocks the self-healing action.',
		type: 'AID_KIT',
		rarity: 'UNCOMMON',
		image: 'images/.png'
	},
	EMERGENCY_MED_KIT: {
		index: 'EMERGENCY_MED_KIT',
		name: 'Emergency Med-Kit',
		description: 'A sturdy and well organized medical kit equipped with top condition emergency supplies.\nTremendously increases the speed that you heal others.\nModerately decreases healing charge consumption.\nUnlocks the self-healing action.',
		flavor: '"There is a cure for almost everything...but not for this."',
		type: 'AID_KIT',
		rarity: 'RARE',
		image: 'images/.png'
	},
	RANGER_MED_KIT: {
		index: 'RANGER_MED_KIT',
		name: 'Ranger Med-Kit',
		description: 'A large metal box containing medical supplies aimed for emergency rescues in hard to reach, often isolated locations.\nConsiderably increases the speed that you heal others.\nModerately increases Skill Check success zones.\nModerately increases Skill Check bonus zones.\nUnlocks the self-healing action.',
		flavor: '"A small engraved label can be found glued to the back panel: VK.ID-3994723."',
		type: 'AID_KIT',
		rarity: 'VERY_RARE',
		image: 'images/.png'
	},
	WORN_OUT_TOOLS: {
		index: 'WORN_OUT_TOOLS',
		name: 'Worn-Out Tools',
		description: 'A metal box containing out of condition tools that could break at any moment. Even without training, can be used to repair or break various mechanical components.\nModerately increases repair speed.\nSlightly decreases Skill Check success zones.\nUnlocks the sabotage action.',
		flavor: '"You call these tools? ... Really?"',
		type: 'TOOLBOX',
		rarity: 'COMMON',
		image: 'images/.png'
	},
	TOOLBOX: {
		index: 'TOOLBOX',
		name: 'Toolbox',
		description: 'A metal box containing a set of basic tools. Even without training, can be used to repair or break various mechanical components.\nModerately increases repair speed.\nUnlocks the sabotage action.',
		flavor: '"It is unclear as to where these tools come from. Were they brought in by one of us or did they belong to one of the monsters?"',
		type: 'TOOLBOX',
		rarity: 'UNCOMMON',
		image: 'images/.png'
	},
	MECHANICS_TOOLBOX: {
		index: 'MECHANICS_TOOLBOX',
		name: 'Mechanic\'s Toolbox',
		description: 'A metal box with specialised mechanics tools. Even without training, can be used to repair or break various mechanical components.\nConsiderably increases repair speed\nModerately reduces sabotage speed.\nUnlocks the sabotage action.',
		type: 'TOOLBOX',
		rarity: 'RARE',
		image: 'images/.png'
	},
	COMMODIOUS_TOOLBOX: {
		index: 'COMMODIOUS_TOOLBOX',
		name: 'Commodious Toolbox',
		description: 'A large metal box containing basic tool and extra mechanical parts. Even without training, can be used to repair or break various mechanical components.\nModerately increases repair speed.\nUnlocks the sabotage action.',
		type: 'TOOLBOX',
		rarity: 'RARE',
		image: 'images/.png'
	},
	ENGINEERS_TOOLBOX: {
		index: 'ENGINEERS_TOOLBOX',
		name: 'Engineer\'s Toolbox',
		description: 'A metal box with highly specialised tools meant for engineering. Most of the tools can be used by neophytes to make fast repairs or break various mechanical components.\nTremendously increases repair speed.',
		flavor: 'I\'ve created tools beyond compare and stood paralysed as they were stolen from me. These are but a poor replica, spat out by the fog." - Vigo\'s Journal',
		type: 'TOOLBOX',
		rarity: 'VERY_RARE',
		image: 'images/.png'
	},
	ALEXS_TOOLBOX: {
		index: 'ALEXS_TOOLBOX',
		name: 'Alex\'s Toolbox',
		description: 'A metal box containing mainly saws and vice grips of varying sizes but also other tools. Even though the content of this toolbox is clearly aimed at destructive deeds, it can be used to repair various mechanical components as well.\nSlightly increases repair speed.\nModerately increases sabotage speed.',
		flavor: '"Most of the tools are identified as \'owned by Alex\'."',
		type: 'TOOLBOX',
		rarity: 'VERY_RARE',
		image: 'images/.png'
	},
}