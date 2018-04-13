export const Powers = {
    SPENCERS_LAST_BREATH: {
        id: 1,
        index: 'SPENCERS_LAST_BREATH',
        name: "Spencer's Last Breath",
        owner: 'NURSE',
        description:
            'A powerful and violent last breath snatched from Crotus Prenn Asylum warden Patrick Spencer. Channelling its energy allows The Nurse to pierce and jump through the spirit world in a blink multiple times in a row. Doing so leaves her in a state of fatigue.',
        abilities: ['Grants the Blink.', 'Grants 1 additional chain Blink.'],
        image: 'breath'
    },
    BEAR_TRAP: {
        id: 2,
        index: 'BEAR_TRAP',
        name: 'Bear Trap',
        owner: 'TRAPPER',
        description:
            'A large foothold trap made of steel. Traps are found laying around the area to be picked up and set anywhere.',
        abilities: ['%bImmobilizes and injures%b trapped victims.'],
        image: 'trap'
    },
    WAILING_BELL: {
        id: 3,
        index: 'WAILING_BELL',
        name: 'Wailing Bell',
        owner: 'WRAITH',
        description:
            'A heavy cast iron bell imbued with ancient powers. Allows its user to enter and walk the spirit world when rung.',
        abilities: [
            'Grants near total %binvisibility%b.',
            '%bFaster%b movement when invisible.',
            'Cannot attack or interact while invisible.'
        ],
        image: 'bell'
    },
    CHAINSAW: {
        id: 4,
        index: 'CHAINSAW',
        name: 'Chainsaw',
        owner: 'HILLBILLY',
        description:
            'A hulking and deadly chainsaw of terrifying strength. Grinds through flesh, bone and soul. Once revved up, sends its user into a violent frenzy.',
        abilities: [
            'Break into a %bcrazed sprint%b on activation.',
            'Automatically triggers %bdying state%b on a successful hit.'
        ],
        image: 'chainsaw'
    },
    HUNTING_HATCHETS: {
        id: 5,
        index: 'HUNTING_HATCHETS',
        name: 'Hunting Hatchets',
        owner: 'HUNTRESS',
        description:
            'A skill taught by her mother and mastered in the wild. The Huntress can hurl Hatchets with deadly precision.',
        abilities: [
            'Start the trial with %b5 Hatchets%b.',
            'Charge throw for maximum throwing speed.',
            'Refill Hatchets at %bLockers%b.'
        ],
        image: 'huntingHatchets'
    },
    EVIL_WITHIN: {
        id: 6,
        index: 'EVIL_WITHIN',
        name: 'Evil Within',
        owner: 'SHAPE',
        description:
            "The darkness inside feeds his determination to take the life of his prey. Activating Evil Within allows The Shape to see his prey clearly and build up more evil power by stalking them. Evil Within's 3 Tiers of power come with different benefits:",
        flavor:
            "I met him, fifteen years ago; I was told there was nothing left; no reason, no conscience, no understanding; and even the most rudimentary sense of life or death, of good or evil, right or wrong. I met this six-year-old child, with this blank, pale, emotionless face, and the blackest of eyes... the devil's eyes. I spent eight years trying to reach him, and the another seven trying to keep him locked up because I realized that what was living behind that boy's eyes was purely and simply... evil.",
        abilities: [
            'EVIL WITHIN I: Tremendously Decreased Terror Radius. Grants immunity to detection perks. Slightly decreased movement speed. Slightly decreased lunge.',
            'EVIL WITHIN II: Moderately Decreased Terror Radius. Slightly Increased movement speed. Slightly increased lunge.',
            'EVIL WITHIN III: Normal Terror Radius. Attacks do double damage. Evil Within III lasts for 60 seconds after which its power is considerably drained.'
        ],
        image: 'stalker1'
    },
    BLACKENED_CATALYST: {
        id: 7,
        index: 'BLACKENED_CATALYST',
        name: 'Blackened Catalyst',
        owner: 'HAG',
        description:
            "Source of The Hag's power, a blackened finger used as a catalyst for her terrible power. The Hag bends and shapes the mud to her will. With simple ritualistic drawings, she creates deceitful duplicates of herself made from mud and decay which she can use for various effects.",
        abilities: [
            'Grants the ability to create and maintain %b10%b Phantasm traps.',
            'Grants the ability to instantly travel to triggered Phantasm traps when within a %b32 meter%b range.'
        ],
        image: 'blackenedCatalyst'
    },
    BUBBAS_CHAINSAW: {
        id: 8,
        index: 'BUBBAS_CHAINSAW',
        name: "Bubba's Chainsaw",
        owner: 'CANNIBAL',
        description:
            'An incredibly powerful and heavy chainsaw which sank its teeth into countless victims. A suitable birthday gift for %bThe Cannibal%b.',
        abilities: [
            'Start a timed sweeping attack on activation.',
            'Can hit multiple targets in one chainsaw charge.',
            'Running into an object forces %bThe Cannibal%b into a %bTantrum%b, this attack damages anyone around him.',
            'Automatically puts victims in the %bdying state%b on a successful hit.'
        ],
        image: 'bubbasChainsaw'
    },
    CARTERS_SPARK: {
        id: 9,
        index: 'CARTERS_SPARK',
        name: "Carter's Spark",
        owner: 'DOCTOR',
        description:
            "Is it a gift, or a curse? The Entity has ignited a corrupted and inexhaustible spark in The Doctor's heart which allows him to generate electroconvulsive power at will. His insidious treatment corrupts the minds of those it touches. Victims shocked by the corrupt spark begin to lose their grip on reality and, with repeated exposure, inevitably succumb to madness.",
        abilities: [
            '%bSwitch Stance%b: Punishment mode is used to injure survivors. Treatment mode grants the abilities %bStatic Field%b and %bShock Therapy%b.',
            '%bStatic Field%b: While in Treatment mode, generate a Static Field equal to your terror radius which increases survivors %bMadness%b based on proximity to The Doctor.',
            "%bShock Therapy%b: %bTreatment%b mode grants the ability to charge and release a %bShock Therapy%b attack that greatly increases survivors' %bMadness%b.",
            '%bMadness Tier I%b: Causes survivors to scream revealing their position to The Doctor.',
            '%bMadness Tier II%b: All effects of %bTier I%b. Causes survivors to experience %bShared Hallucinations%b.',
            '%bMadness Tier III%b: All effect of %bTier II%b. %bShared Hallucinations%b intensify allowing The Doctor to read their %bAuras%b. Survivors regularly scream revealing their position to The Doctor. Survivors cannot heal, repair, sabotage or cleanse until they %bSnap Out Of It%b.',
            'More %bAfflications%b are available with add-ons.'
        ],
        image: 'cartersSpark'
    },
    DREAM_DEMON: {
        id: 10,
        index: 'DREAM_DEMON',
        name: 'Dream Demon',
        owner: 'NIGHTMARE',
        description: '',
        abilities: [
            'Pull survivors into the %bDream World%b',
            'Survivors who are awake do not see %bThe Nightmare%b.',
            "Once targeted by %bThe Nightmare's%b power, Survivors enter the %bDream Transition%b for %b7 seconds%b.",
            'During the %bDream Transition%b they can see %bThe Nightmare%b intermittently.',
            'When the %bDream Transition%b lapses, the Survivor is pulled into the %bDream World%b.',
            'Once in the %bDream World%b:',
            "Survivors' auras are revealed to %bThe Nightmare%b when they are outside his terror radius.",
            'Survivors suffer an action speed penalty of 50%.',
            'To exit the Dream World, Survivors can find non-sleeping Survivors to perform a wake up action.',
            'Some failed actions can also wake up.',
            'Hooked survivors wake up.'
        ],
        image: 'dreamMaster'
    },
    JIGSAWS_BAPTISM: {
        id: 11,
        index: 'JIGSAWS_BAPTISM',
        name: "Jigsaw's Baptism",
        owner: 'PIG',
        description:
            "Forever devoted to her master's cause, she punishes the ungrateful and the guilty with slyness and murderous puzzles. %bThe Pig%b can move stealthily, dash in ambush attacks and put deadly Reverse Bear Traps on Survivors' heads.",
        flavor:
            "\"You will give everything to me, every cell in your body. The marks on your arms, they're from another life. We'll leave that life behind. When you walk down that corridor there is no turning back. Do you understand that?\" -Jigsaw's Baptism",
        abilities: [
            'Use the %iSecondary Power%i interaction to assume a crouching position. While crouching:',
            '%bThe Pig%b has no Terror Radius.',
            'Activate the attack interaction to dash and perform an ambush attack.',
            'Start the trial with %b4%b Reverse Bear Traps:',
            'Reverse Bear Traps are put on %iDying%i survivors',
            'Reverse Bear Traps automatically Kill the Survivor when they trigger.',
            'Reverse Bear Traps trigger automatically beyond the Exit Gates.',
            'Reverse Bear Traps trigger once their timers expire.',
            "Reverse Bear Trap's timer starts when a generator is completed.",
            'Survivors can free themselves from Reverse Bear Traps by searching Jigsaw Boxes found around the map to find the correct key.'
        ],
        image: 'reverseBearTrap'
    }
};
