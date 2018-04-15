export const Items = {
    CHINESE_FIRECRACKER: {
        id: 1,
        index: 'CHINESE_FIRECRACKER',
        name: 'Chinese Firecracker',
        description:
            'A row of small explosive devices wrapped in heavy paper casing. Detonates into loud bangs and intense light flashes.',
        abilities: [
            'Can be used as a distraction, as a blinding device or to celebrate.'
        ],
        rarity: 'COMMON',
        image: 'chineseFirecracker'
    },
    FLASHLIGHT: {
        id: 2,
        index: 'FLASHLIGHT',
        name: 'Flashlight',
        description:
            'A standard Flashlight. Can be used to light your way in the darkness.',
        abilities: ['%b8 seconds%/b of use.'],
        flavor:
            '"Most of the battery life was wastefully used by the previous owner."',
        type: 'FLASHLIGHT',
        rarity: 'UNCOMMON',
        image: 'flashlight'
    },
    WILL_O_WISP: {
        id: 3,
        index: 'WILL_O_WISP',
        name: "Will O' Wisp",
        description:
            'A Flashlight equipped with a special lens cover that adds an orange tint and a little Ghost to the beam.',
        abilities: [
            '%b8 seconds%/b of use.',
            '%bConsiderably increases%/b Friendly Ghosts in your life.'
        ],
        flavor: '"Happy Trick or Treating!"',
        type: 'FLASHLIGHT',
        rarity: 'UNCOMMON',
        image: 'flashlightHalloween'
    },
    SPORT_FLASHLIGHT: {
        id: 4,
        index: 'SPORT_FLASHLIGHT',
        name: 'Sport Flashlight',
        description:
            'A very portable Flashlight with a good grip. Its efficient technology produces a powerful light while consuming less power.',
        abilities: [
            '%b8 seconds%/b of use.',
            '%bSlightly decreases%/b Flashlight battery consumption.',
            "%bSlightly increases%/b the Flashlight's accuracy."
        ],
        type: 'FLASHLIGHT',
        rarity: 'RARE',
        image: 'flashlightSport'
    },
    UTILITY_FLASHLIGHT: {
        id: 5,
        index: 'UTILITY_FLASHLIGHT',
        name: 'Utility Flashlight',
        description: 'A sturdy but heavy Flashlight that packs a lot of power.',
        abilities: [
            '%b12 seconds%/b of use.',
            '%bSlightly reduces%/b accuracy.',
            "%bModerately increases%/b the beam's visual brightness.",
            '%bModerately increases%/b the Blindness duration.'
        ],
        type: 'FLASHLIGHT',
        rarity: 'VERY_RARE',
        image: 'flashlightUtility'
    },
    BROKEN_KEY: {
        id: 6,
        index: 'BROKEN_KEY',
        name: 'Broken Key',
        description:
            "The bow and shank of a key, vibrating with power. The Broken Key's power cannot be triggered by itself. Various objects can be attached to its jump ring, which channels the Broken Key's power into various effects.",
        abilities: ['%b10 seconds%/b of use.'],
        type: 'KEY',
        rarity: 'RARE',
        image: 'brokenKey'
    },
    DULL_KEY: {
        id: 7,
        index: 'DULL_KEY',
        name: 'Dull Key',
        description:
            "A bent and dull Key that once held great power. The Dull Key's power cannot be triggered by itself. Various objects can be attached to its jump ring, which channels the Dull Key's remaining power into various effects.",
        abilities: [
            '%b5 seconds%/b of use.',
            'Can be consumed to open dark locks.'
        ],
        type: 'KEY',
        rarity: 'VERY_RARE',
        image: 'dullKey'
    },
    SKELETON_KEY: {
        id: 8,
        index: 'SKELETON_KEY',
        name: 'Skeleton Key',
        description:
            "A tarnished and crooked Key, vibrating with ominous power. The Skeleton Key's power cannot be triggered by itself. Various objects can be attached to its jump ring, which channels the Skeleton Key's power into various effects.",
        abilities: [
            '%b30 seconds%/b of use.',
            'Can be consumed to open black locks.'
        ],
        type: 'KEY',
        rarity: 'ULTRA_RARE',
        image: 'key'
    },
    MAP: {
        id: 9,
        index: 'MAP',
        name: 'Map',
        description:
            "An old piece of parchment made out of a skin-like material. Is rolled and sealed with an uncoloured leather string. Holding and channelling the map unlocks great potential in one's Aura reading ability which slowly burns the map. Generators' Auras which you have already encountered are revealed to you for as long as the map has charges left.",
        abilities: [
            '%b20 seconds%/b of use.',
            'Starts with %b1%/b generator automatically tracked.',
            'Unlocks the ability to track generators within a %b8 meters%/b range.'
        ],
        type: 'MAP',
        rarity: 'RARE',
        image: 'map'
    },
    RAINBOW_MAP: {
        id: 10,
        index: 'RAINBOW_MAP',
        name: 'Rainbow Map',
        description:
            "A piece of parchment made out of oddly fresh skin. Blood on its edge has yet to dry. It is rolled and sealed with multiple coloured ropes and cords. Holding and channelling the map unlocks a great potential in one's Aura reading ability which slowly burns up the map. Objects with Auras which you have already encountered are revealed to you for as long as the map has charges left.",

        abilities: [
            '%b20 seconds%/b of use.',
            'Starts with %b3%/b objects automatically tracked.',
            'Unlocks the ability to %btrack objectives%/b within a %b8 meter%/b range.',
            'Unlocks the ability to %btrack black locks%/b wthiin a %b8 meter%/b range.',
            "Unlocks the ability to %btrack the Killer's belongings%/b in a %b8 meter%/b range.",
            'Unlocks the ability to %btrack the Exit Gates%/b in a %b8 meter%/b range.'
        ],
        flavor:
            '"It disheartens me. All this unspeakable knowledge and gruelling effort and yet nothing tangible, nothing usable to get out of this nightmare." — Vigo\'s Journal',
        type: 'MAP',
        rarity: 'ULTRA_RARE',
        image: 'rainbowMap'
    },
    CAMPING_AID_KIT: {
        id: 11,
        index: 'CAMPING_AID_KIT',
        name: 'Camping Aid Kit',
        description:
            "A rudimentary aid kit which can save lives in emergencies even if it's lacking some of its supplies.",
        abilities: [
            '%b12 Charges%/b.',
            '%bConsiderably increases%/b the speed that you heal others.',
            'Unlocks the %bself-healing%/b action.'
        ],
        flavor: '"Barely has enough material for a decent patch-up."',
        type: 'AID_KIT',
        rarity: 'COMMON',
        image: 'rundownAidKit'
    },
    ALL_HALLOWS_EVE_LUNCHBOX: {
        id: 12,
        index: 'ALL_HALLOWS_EVE_LUNCHBOX',
        name: "All Hallows' Eve Lunchbox",
        description:
            'A plastic lunchbox with phosphorescent Halloween Stickers that has been packed with first-aid equipment.',
        abilities: [
            '%b16 Charges%/b.',
            '%bConsiderably increases%/b the speed that you heal others.',
            'Unlocks the %bself-healing%/b action.',
            'Makes you %bconsiderably more visible%/b.'
        ],
        flavor:
            '"Safety first! Make sure you can be seen when trick or treating."',
        type: 'AID_KIT',
        rarity: 'COMMON',
        image: 'medkitHalloween'
    },
    FIRST_AID_KIT: {
        id: 13,
        index: 'FIRST_AID_KIT',
        name: 'First Aid Kit',
        description:
            'A standard first aid kit with all the necessary equipment for treating common to more serious injuries.',
        abilities: [
            '%b16 Charges%/b.',
            '%bConsiderably increases%/b the speed that you heal others.',
            'Unlocks the %bself-healing%/b action.'
        ],
        type: 'AID_KIT',
        rarity: 'UNCOMMON',
        image: 'firstAidKit'
    },
    EMERGENCY_MED_KIT: {
        id: 14,
        index: 'EMERGENCY_MED_KIT',
        name: 'Emergency Med-Kit',
        description:
            'A sturdy and well organized medical kit equipped with top condition emergency supplies.',
        abilities: [
            '%b18 Charges%/b.',
            '%bTremendously increases%/b the speed that you heal others.',
            '%bModerately decreases%/b healing charge consumption.',
            'Unlocks the %bself-healing%/b action.'
        ],
        flavor: '"There is a cure for almost everything...but not for this."',
        type: 'AID_KIT',
        rarity: 'RARE',
        image: 'medkit'
    },
    RANGER_MED_KIT: {
        id: 15,
        index: 'RANGER_MED_KIT',
        name: 'Ranger Med-Kit',
        description:
            'A large metal box containing medical supplies aimed for emergency rescues in hard to reach, often isolated locations.',
        abilities: [
            '%b24 Charges%/b.',
            '%bTremendously increases%/b the speed that you heal others.',
            '%bModerately increases%/b Skill Check success zones.',
            '%bModerately increases%/b Skill Check bonus zones.',
            'Unlocks the %bself-healing%/b action.'
        ],
        flavor:
            '"A small engraved label can be found glued to the back panel: VK.ID-3994723."',
        type: 'AID_KIT',
        rarity: 'VERY_RARE',
        image: 'rangersAidKit'
    },
    WORN_OUT_TOOLS: {
        id: 16,
        index: 'WORN_OUT_TOOLS',
        name: 'Worn-Out Tools',
        description:
            'A metal box containing out of condition tools that could break at any moment. Even without training, can be used to repair or break various mechanical components.',
        abilities: [
            '%b80 Charges%/b',
            '%bModerately increases%/b repair speed.',
            '%bSlightly decreases%/b Skill Check success zones.',
            'Unlocks the %bsabotage%/b action.'
        ],
        flavor: '"You call these tools? ... Really?"',
        type: 'TOOLBOX',
        rarity: 'COMMON',
        image: 'toolboxWornOut'
    },
    TOOLBOX: {
        id: 17,
        index: 'TOOLBOX',
        name: 'Toolbox',
        description:
            'A metal box containing a set of basic tools. Even without training, can be used to repair or break various mechanical components.',
        abilities: [
            '%b130 Charges%/b',
            '%bModerately increases%/b repair speed.',
            'Unlocks the %bsabotage%/b action.'
        ],
        flavor:
            '"It is unclear as to where these tools come from. Were they brought in by one of us or did they belong to one of the monsters?"',
        type: 'TOOLBOX',
        rarity: 'UNCOMMON',
        image: 'toolbox'
    },
    MECHANICS_TOOLBOX: {
        id: 18,
        index: 'MECHANICS_TOOLBOX',
        name: "Mechanic's Toolbox",
        description:
            'A metal box with specialised mechanics tools. Even without training, can be used to repair or break various mechanical components.',
        abilities: [
            '%b80 Charges%/b',
            '%bConsiderably increases%/b repair speed.',
            'Unlocks the %bsabotage%/b action.',
            '%bModerately reduces%/b sabotage speed.'
        ],
        type: 'TOOLBOX',
        rarity: 'RARE',
        image: 'toolboxMechanics'
    },
    COMMODIOUS_TOOLBOX: {
        id: 19,
        index: 'COMMODIOUS_TOOLBOX',
        name: 'Commodious Toolbox',
        description:
            'A large metal box containing basic tool and extra mechanical parts. Even without training, can be used to repair or break various mechanical components.',
        abilities: [
            '%b180 Charges%/b',
            '%bModerately increases%/b repair speed.',
            'Unlocks the %bsabotage%/b action.'
        ],
        type: 'TOOLBOX',
        rarity: 'RARE',
        image: 'toolboxCommodious'
    },
    ENGINEERS_TOOLBOX: {
        id: 20,
        index: 'ENGINEERS_TOOLBOX',
        name: "Engineer's Toolbox",
        description:
            'A metal box with highly specialised tools meant for engineering. Most of the tools can be used by neophytes to make fast repairs or break various mechanical components.',
        abilities: [
            '%b80 Charges%/b',
            '%bTremendously increases%/b repair speed.'
        ],
        flavor:
            "I've created tools beyond compare and stood paralysed as they were stolen from me. These are but a poor replica, spat out by the fog.\" - Vigo's Journal",
        type: 'TOOLBOX',
        rarity: 'VERY_RARE',
        image: 'toolboxEngineers'
    },
    ALEXS_TOOLBOX: {
        id: 21,
        index: 'ALEXS_TOOLBOX',
        name: "Alex's Toolbox",
        description:
            'A metal box containing mainly saws and vice grips of varying sizes but also other tools. Even though the content of this toolbox is clearly aimed at destructive deeds, it can be used to repair various mechanical components as well.',
        abilities: [
            '%b130 Charges%/b',
            '%bSlightly increases%/b repair speed.',
            'Unlocks the %bsabotage%/b action.',
            '%bModerately increases%/b sabotage speed.'
        ],
        flavor: '"Most of the tools are identified as \'owned by Alex\'."',
        type: 'TOOLBOX',
        rarity: 'VERY_RARE',
        image: 'toolboxAlexs'
    }
};
