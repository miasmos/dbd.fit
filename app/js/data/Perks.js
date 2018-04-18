export const KillerPerks = {
    BITTER_MURMUR: {
        id: 1,
        index: 'BITTER_MURMUR',
        name: 'Bitter Murmur',
        owner: 'ALL',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        description:
            "Unlocks potential in one's Aura reading ability. Survivors' Auras are revealed to you for a duration of %s when the Exit Gates are powered.",
        image: 'bitterMurmur',
        tiers: [['5 seconds'], ['7 seconds'], ['9 seconds']]
    },
    DEERSTALKER: {
        id: 2,
        index: 'DEERSTALKER',
        name: 'Deerstalker',
        owner: 'ALL',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        description:
            "Unlocks potential in one's Aura reading ability. Reveals dying Survivors' Auras when standing within %s.",
        image: 'deerstalker',
        tiers: [['12 metres'], ['24 metres'], ['36 metres']]
    },
    DISTRESSING: {
        id: 3,
        index: 'DISTRESSING',
        name: 'Distressing',
        owner: 'ALL',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        description:
            'Your horrifying emanation strikes at a supernaturally long distance. Your Terror Radius is increased by %s. Gain %s more Bloodpoints for actions in the Deviousness category.',
        flavor: '"Bask in their fear."',
        image: 'distressing',
        tiers: [['22%', '50%'], ['24%', '75%'], ['26%', '100%']]
    },
    INSIDIOUS: {
        id: 4,
        index: 'INSIDIOUS',
        name: 'Insidious',
        owner: 'ALL',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        description:
            'Unlocks the stealth ability. By standing still for %s, you reduce your Terror Radius to %s and thus become stealthy until you move or act again.',
        image: 'insidious',
        tiers: [
            ['4 seconds', '0 metres'],
            ['3 seconds', '0 metres'],
            ['2 seconds', '0 metres']
        ]
    },
    HEX_NO_ONE_ESCAPES_DEATH: {
        id: 5,
        index: 'HEX_NO_ONE_ESCAPES_DEATH',
        name: 'Hex: No One Escapes Death',
        owner: 'ALL',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        description:
            'A Hex rooting its power on hope. You are animated by the power of your Hex Totem when the Survivors are on the verge of escaping. Once the Exit Gates are powered, if there is a Dull Totem remaining on the map, this Hex is applied to it. While this Hex is active, Survivors suffer from the %bExposed%/b Status Effect, cooldowns on successful and missed attacks are decreased by %s and your movement speed is increased by %s.',
        flavor:
            '"And the beast became faster and more powerful as if the Entity\'s shadowy whips were lashing at its back."',
        image: 'noOneEscapesDeath',
        tiers: [['4%', '3%'], ['8%', '4%'], ['8%', '4%']]
    },
    HEX_THRILL_OF_THE_HUNT: {
        id: 6,
        index: 'HEX_THRILL_OF_THE_HUNT',
        name: 'Hex: Thrill of the Hunt',
        owner: 'ALL',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        description:
            "A Hex rooting its power on hope. The false hope of Survivors fills you with excitement and strengthens your totems. For each Dull Totem and Hex Totem remaining on the Map gain a Token.\nGain %s more Bloodpoints for actions in the Hunter category for each Token.\nSurvivors' cleansing speed is reduced by %s for each Token.\nGain a notification when someone starts working on a Hex Totem.",
        image: 'thrillOfTheHunt',
        tiers: [['6%', '4%'], ['8%', '5%'], ['10%', '6%']]
    },
    MONSTROUS_SHRINE: {
        id: 7,
        index: 'MONSTROUS_SHRINE',
        name: 'Monstrous Shrine',
        owner: 'ALL',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        description:
            "Your fervent care of the hooks found in the Basement has aroused the Entity's interest. The Basement Hooks are granted the following bonuses:\n%s faster Entity progression.\n%s increased difficulty on escape attempts.\n%s increased penalty to escape fails.",
        image: 'monstrousShrine',
        tiers: [['3%', '5%', '3%'], ['6%', '10%', '6%'], ['9%', '15%', '9%']]
    },
    SLOPPY_BUTCHER: {
        id: 8,
        index: 'SLOPPY_BUTCHER',
        name: 'Sloppy Butcher',
        owner: 'ALL',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        description:
            "You know where to hit to make them bleed. Wounds inflicted by successful attacks %s increase the Survivor's Bleeding frequency.\nBleeding returns to normal once the Survivor is healed.",
        image: 'sloppyButcher',
        tiers: [['slightly'], ['moderately'], ['considerably']]
    },
    SPIES_FROM_THE_SHADOWS: {
        id: 9,
        index: 'SPIES_FROM_THE_SHADOWS',
        name: 'Spies From The Shadows',
        owner: 'ALL',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        description:
            'The Crows found in the world can communicate directly with you. %s of the time, cawing Crows give you a visual clue when you are within %s.',
        flavor:
            '"In the shadows they torment, scarring our minds with each scream."',
        image: 'spiesFromTheShadows',
        tiers: [
            ['50%', '16 metres'],
            ['50%', '24 metres'],
            ['75%', '36 metres']
        ]
    },
    UNRELENTING: {
        id: 10,
        index: 'UNRELENTING',
        name: 'Unrelenting',
        owner: 'ALL',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        description:
            'You recuperate faster from any attack made with your main weapon. The cooldown of missed attacks is reduced by %s.',
        image: 'unrelenting',
        tiers: [['20%'], ['25%'], ['30%']]
    },
    WHISPERS: {
        id: 11,
        index: 'WHISPERS',
        name: 'Whispers',
        owner: 'ALL',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        description:
            "You have a rudimentary understanding of the Entity's voice. Sporadically hear the Entity's Whisper when standing within a %s range of a Survivor.",
        flavor:
            '"It\'s unclear as to the motivations of the fog, but it is undeniable that it often takes the beast\'s side." — Unknown, Notebook',
        image: 'whispers',
        tiers: [['48 metres'], ['40 metres'], ['32 metres']]
    },
    STRIDOR: {
        id: 12,
        index: 'STRIDOR',
        name: 'Stridor',
        owner: 'NURSE',
        rarity: ['COMMON', 'UNCOMMON', 'RARE'],
        description:
            'Breathing of Survivors in pain is %s louder. Regular Survivor breathing is now also %s louder.',
        flavor: "If you don't stop and catch your breath... she will.",
        image: 'stridor',
        tiers: [['25%', '0%'], ['50%', '0%'], ['50%', '25%']]
    },
    THANATOPHOBIA: {
        id: 13,
        index: 'THANATOPHOBIA',
        name: 'Thanatophobia',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'NURSE',
        description:
            'All Survivors receive penalties to repair, healing and sabotage speeds for each injured, dying or hooked Survivor.\n1 injured, dying or hooked survivor decrease repair, healing and sabotage speed by %s.\n2 injured, dying or hooked survivor decrease repair, healing and sabotage speed by %s.\n3 injured, dying or hooked survivor decrease repair, healing and sabotage speed by %s.\n4 injured, dying or hooked survivor decrease repair, healing and sabotage speed by %s.',
        flavor: 'She plays with us and revels in our pain.',
        image: 'thatanophobia',
        tiers: [
            ['4%', '7%', '10%', '13%'],
            ['5%', '8%', '11%', '14%'],
            ['6%', '9%', '12%', '15%']
        ]
    },
    A_NURSES_CALLING: {
        id: 14,
        index: 'A_NURSES_CALLING',
        name: "A Nurse's Calling",
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'NURSE',
        description:
            "Unlocks potential in one's Aura reading ability. The Auras of Survivors who are healing or being healed are revealed to you when they are within a %s range.",
        flavor:
            'Still attached to the fragments of her past life, she is drawn to those in need of help.',
        image: 'aNursesCalling',
        tiers: [['20 meter'], ['24 meter'], ['28 meter']]
    },
    UNNERVING_PRESENCE: {
        id: 15,
        index: 'UNNERVING_PRESENCE',
        name: 'Unnerving Presence',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'TRAPPER',
        description:
            "Your presence alone instils great fear. Survivors within your Terror Radius have a %s greater chance of triggering Skill Checks when repairing, healing or sabotaging. Triggered Skill Checks' success zones are reduced by %s.",
        flavor: 'Its presence befalls us.',
        image: 'unnervingPresence',
        tiers: [['6%', '40%'], ['8%', '50%'], ['10%', '60%']]
    },
    BRUTAL_STRENGTH: {
        id: 16,
        index: 'BRUTAL_STRENGTH',
        name: 'Brutal Strength',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'TRAPPER',
        description:
            "Your great strength allows you to shred through your prey's defences. Destroy dropped Pallets %s faster.",
        flavor: "It's more than muscles. A dark power motivates the beast.",
        image: 'brutalStrength',
        tiers: [['10%'], ['15%'], ['20%']]
    },
    AGITATION: {
        id: 17,
        index: 'AGITATION',
        name: 'Agitation',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'TRAPPER',
        description:
            'You get excited in anticipation of hooking your prey. Increases your speed while transporting bodies by %s. While transporting a body, your Terror Radius is increased by %s.',
        flavor:
            'At some point, the excitement of hooking one of us becomes more important than the desire to kill us.',
        image: 'agitation',
        tiers: [['6%', '6 metres'], ['8%', '12 metres'], ['12%', '18 metres']]
    },
    PREDATOR: {
        id: 18,
        index: 'PREDATOR',
        name: 'Predator',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'WRAITH',
        description:
            'Your acute tracking ability allows you to follow disturbances left by passing prey over a longer period of time. Footstep marks stay visible %s longer than normal.',
        flavor:
            "Never stop moving and hope you're always two steps ahead of the beast.",
        image: 'predator',
        tiers: [['1 seconds'], ['2 seconds'], ['3 seconds']]
    },
    BLOODHOUND: {
        id: 19,
        index: 'BLOODHOUND',
        name: 'Bloodhound',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'WRAITH',
        description:
            'Like a hunting scent hound, you smell traces of blood at a great distance. Fresh Blood Stains are %s more discernible than normal and can be tracked for %s longer than normal.',
        flavor:
            'Pebbles shimmering in the moonlight; my life drips down in a trail so easy to follow.',
        image: 'bloodhound',
        tiers: [
            ['slightly', '2 seconds'],
            ['moderately', '3 seconds'],
            ['considerably', '4 seconds']
        ]
    },
    SHADOWBORN: {
        id: 20,
        index: 'SHADOWBORN',
        name: 'Shadowborn',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'WRAITH',
        description:
            'You have a keen vision in the darkness of the night. Your field of view is %s wider than normal.',
        flavor:
            'Shining in the darkest dark, his eyes pierce the night and sting your soul.',
        image: 'shadowborn',
        tiers: [['moderately'], ['considerably'], ['tremendously']]
    },
    ENDURING: {
        id: 21,
        index: 'ENDURING',
        name: 'Enduring',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'HILLBILLY',
        description:
            'You are resilient to pain. Your rate of recovery from stuns is increased by %s.',
        flavor: 'He stops at nothing.',
        image: 'enduring',
        tiers: [['50%'], ['60%'], ['75%']]
    },
    LIGHTBORN: {
        id: 22,
        index: 'LIGHTBORN',
        name: 'Lightborn',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'HILLBILLY',
        description:
            'Unlike other beasts of the fog, you have adapted to light. Resistance to the flash effect is increased by %s. Recovery from the flash effect is increased by %s.',
        flavor:
            'These monsters... they adapt! They emerge with strange new abilities.',
        image: 'lightborn',
        tiers: [['20%', '50%'], ['40%', '50%'], ['60%', '50%']]
    },
    TINKERER: {
        id: 23,
        index: 'TINKERER',
        name: 'Tinkerer',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'HILLBILLY',
        description:
            'Add-ons that affect the charge time of your Power are %s more effective.',
        flavor:
            "The Crooked makes impressive tools out of scraps... Tools aimed at maiming us in creative ways... It's horrifying to think it's actually intelligent.",
        image: 'tinkerer',
        tiers: [['6%'], ['8%'], ['10%']]
    },
    SAVE_THE_BEST_FOR_LAST: {
        id: 24,
        index: 'SAVE_THE_BEST_FOR_LAST',
        name: 'Save The Best For Last',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'SHAPE',
        description:
            'You become obsessed with one Survivor. As long as your Obsession is alive, after being in a chase for %s seconds the cooldown for your next successful attack is decreased by %s. Your successful attack cooldown remains active for %s seconds after a chase. Re-initialising a chase before the %s seconds have lapsed will reset the successful attack cooldown timer.\nOnly one Obsession per match.',
        flavor: 'Death has come to your little town, Sheriff.',
        image: 'saveTheBestForLast',
        tiers: [
            ['20', '30%', '5', '5'],
            ['20', '35%', '5', '5'],
            ['20', '40%', '5', '5']
        ]
    },
    PLAY_WITH_YOUR_FOOD: {
        id: 25,
        index: 'PLAY_WITH_YOUR_FOOD',
        name: 'Play With Your Food',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'SHAPE',
        description:
            'You become obsessed with one Survivor. Every time you chase your Obsession and let them escape, you receive a Token up to a maximum of 3 Tokens. Each Token increases your movement speed by %s. Each offensive action spends one Token.\nOnly one Obsession per match.',
        flavor: "You've fooled them, haven't you Michael? But not me.",
        image: 'playWithYourFood',
        tiers: [['3%'], ['4%'], ['5%']]
    },
    DYING_LIGHT: {
        id: 26,
        index: 'DYING_LIGHT',
        name: 'Dying Light',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'SHAPE',
        description:
            "You become obsessed with one Survivor. Your Obsession's altruistic action speed is increased by %s. Once the Obsession is killed or sacrificed, every other Survivor gets a penalty of %s to repair, healing and sabotage speed.",
        flavor: "This isn't a man...",
        image: 'dyingLight',
        tiers: [['38%', '19%'], ['44%', '22%'], ['50%', '25%']]
    },
    HEX_THE_THIRD_SEAL: {
        id: 27,
        index: 'HEX_THE_THIRD_SEAL',
        name: 'Hex: The Third Seal',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'HAG',
        description:
            "A Hex that hinders one's Aura reading ability. Hitting a Survivor while the Hex Totem is active applies the %bBlindness%/b status effect. This effect applies to the last %s Survivors hit.\nThe Hex effects persist as long as the related Hex Totem is standing.",
        flavor: "She touched your skin, you bear the witch's mark!",
        image: 'theThirdSeal',
        tiers: [[2], [3], [4]]
    },
    HEX_RUIN: {
        id: 28,
        index: 'HEX_RUIN',
        name: 'Hex: Ruin',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'HAG',
        description:
            "A Hex that affects the Survivors' skills at repairing Generators. %s are affected by Ruin, which causes Good Skill Checks to result in %s regression on the Generator. Great Skill Checks grant %s bonus progression on the generator.\nThe Hex effects persist as long as the related Hex Totem is standing.",
        flavor: 'A curse is upon you. It will cause your ruin.',
        image: 'ruin',
        tiers: [
            ['2 Survivors', '5%', '0%'],
            ['3 Survivors', '5%', '0%'],
            ['4 Survivors', '5%', '0%']
        ]
    },
    HEX_DEVOUR_HOPE: {
        id: 29,
        index: 'HEX_DEVOUR_HOPE',
        name: 'Hex: Devour Hope',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'HAG',
        description:
            'A Hex rooting its power on hope. The false hope of Survivors ignites your hunger. When a Survivor is rescued from a hook at least %s away, Devour Hope receives a Token.\n%s: Grants the ability to kill Survivors by your own hand.\nThe hex effects persist as long as the related hex totem is standing.',
        flavor:
            'If you do nothing, you have their blood on your hands. If you save them, her hunger grows.',
        image: 'devourHope',
        tiers: [
            ['24 metres', '5 tokens'],
            ['24 metres', '5 tokens'],
            ['24 metres', '5 tokens']
        ]
    },
    OVERWHELMING_PRESENCE: {
        id: 30,
        index: 'OVERWHELMING_PRESENCE',
        name: 'Overwhelming Presence',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'DOCTOR',
        description:
            "Your presence alone instils great fear. Survivors within your Terror Radius suffer from inefficiency. Affected Survivors' Item consumption rates are increased by %s",
        flavor: 'Shit!! I dropped the gauze!',
        image: 'overwhelmingPresence',
        tiers: [['80%'], ['90%'], ['100%']]
    },
    MONITOR_AND_ABUSE: {
        id: 31,
        index: 'MONITOR_AND_ABUSE',
        name: 'Monitor & Abuse',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'DOCTOR',
        description:
            'Meticulous in your approach, terrifying in your application. While in a chase, your Terror Radius is increased by %s. Otherwise your Terror Radius is decreased by %s and your field of view is %s increased. Field of view gains do not stack.',
        flavor: "It's time for your treatment!",
        image: 'monitorAndAbuse',
        tiers: [
            ['6 metres', '6 metres', 'slightly'],
            ['7 metres', '7 metres', 'moderately'],
            ['8 metres', '8 metres', 'considerably']
        ]
    },
    OVERCHARGE: {
        id: 32,
        index: 'OVERCHARGE',
        name: 'Overcharge',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'DOCTOR',
        description:
            'You are fuelled by your hate for progress. Overcharge a Generator by performing the Damage Generator action. The next Survivor interacting with that Generator is faced with a %s difficult Skill Check. Failing the Skill Check results in an additional %s Generator regression.',
        flavor: 'It is a trap. But a trap one must step in...',
        image: 'generatorOvercharge',
        tiers: [
            ['moderately', '3%'],
            ['considerably', '4%'],
            ['tremendously', '5%']
        ]
    },
    BEAST_OF_PREY: {
        id: 33,
        index: 'BEAST_OF_PREY',
        name: 'Beast Of Prey',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'HUNTRESS',
        description:
            'Your lust for a kill is so intense that your connection with the Entity is momentarily lost, making you totally unpredictable. The Red Stain disappears for %s when Bloodlust activates.\nBeast of Prey has a cooldown of %s.',
        flavor: 'Where did she go?',
        image: 'BeastOfPrey',
        tiers: [
            ['15 seconds', '120 seconds'],
            ['20 seconds', '120 seconds'],
            ['25 seconds', '120 seconds']
        ]
    },
    TERRITORIAL_IMPERATIVE: {
        id: 34,
        index: 'TERRITORIAL_IMPERATIVE',
        name: 'Territorial Imperative',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'HUNTRESS',
        description:
            "Unlocks potential in one's Aura reading ability. Survivors' Auras are revealed to you for %s when they enter the and you are more than %s away from the Basement entrance.\nTerritorial Imperative can only be triggered once every %s.",
        flavor: "We're not safe anywhere...",
        image: 'TerritorialImperative',
        tiers: [
            ['3 seconds', '32 metres', '60 seconds'],
            ['3 seconds', '32 metres', '45 seconds'],
            ['3 seconds', '32 metres', '30 seconds']
        ]
    },
    HEX_HUNTRESS_LULLABY: {
        id: 35,
        index: 'HEX_HUNTRESS_LULLABY',
        name: 'Hex: Huntress Lullaby',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'HUNTRESS',
        description:
            'A Hex rooting its power in despair. Your hunt is an irresistible song of dread which muddles your prey’s attention. Survivors receive a %s regression penalty when missing any Skill Check.\n\nEach time a Survivor is hooked, Huntress Lullaby grows in power: %b1 to 4 Tokens%/b: Time between the Skill Check warning sound and the Skill Check becomes shorter.\n%b5 Tokens%/b: No Skill Check warning.\nThe Hex effects persist as long as the related Hex Totem Icon is standing.',
        flavor: 'That song, it drives me crazy!',
        image: 'HuntressLullaby',
        tiers: [['2%'], ['4%'], ['6%']]
    },
    KNOCK_OUT: {
        id: 36,
        index: 'KNOCK_OUT',
        name: 'Knock Out',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'CANNIBAL',
        description:
            "The trauma caused by your brutal attacks makes crying for help painfully difficult. Dying Survivors' Auras are not revealed to other Survivors when they are standing outside of %s of range.",
        flavor:
            "Oh, that gun's no good. The old way... with a sledge! You see, that way's better. They die better that way.",
        image: 'knockOut',
        tiers: [['32 metres'], ['24 metres'], ['16 metres']]
    },
    BARBECUE_AND_CHILI: {
        id: 37,
        index: 'BARBECUE_AND_CHILI',
        name: 'Barbecue & Chili',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'CANNIBAL',
        description:
            "A deep bond with The Entity unlocks potential in one's Aura reading ability. After hooking a Survivor, all other Survivors' Auras are revealed to you for %s when they are further than %s from the Hook.\nEach time a Survivor is hooked for the first time, gain a %s stackable Bonus to all Bloodpoint gains.",
        flavor:
            "I just can't take no pleasure in killing. There's just some things you gotta do. Don't mean you have to like it.",
        image: 'BBQAndChili',
        tiers: [
            ['4 seconds', '52 metres', '15%'],
            ['4 seconds', '46 metres', '20%'],
            ['4 seconds', '40 metres', '25%']
        ]
    },
    FRANKLINS_DEMISE: {
        id: 38,
        index: 'FRANKLINS_DEMISE',
        name: "Franklin's Demise",
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'CANNIBAL',
        description:
            'Your vicious attacks make the Survivors drop their Item on impact. The lost item is damaged in the fall, losing %s of its base amount of Charges.',
        flavor: 'Sally, I hear something. Stop! Stop!',
        image: 'franklinsLoss',
        tiers: [['0%'], ['5%'], ['10%']]
    },
    FIRE_UP: {
        id: 39,
        index: 'FIRE_UP',
        name: 'Fire Up',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'NIGHTMARE',
        description:
            'The increased pressure of losing your preys fills you with anger and gives you unsuspected motivation. Each time the Survivors complete repairs on a Generator, Fire Up grows in power and grants speed bonus to pick up, drop, Pallet break, Generator break and vaults.\n2 Tokens: Receive %s action speed bonus.\n3 Tokens: Receive %s action speed bonus.\n4 Tokens: Receive %s action speed bonus.',
        flavor: '',
        image: 'fireUp',
        tiers: [
            ['6%', '8%', '10%'],
            ['8%', '10%', '12%'],
            ['10%', '12%', '14%']
        ]
    },
    REMEMBER_ME: {
        id: 40,
        index: 'REMEMBER_ME',
        name: 'Remember Me',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'NIGHTMARE',
        description:
            'You become %bobsessed%/b with one Survivor. Each time you hit your Obsession, you increase the opening time of the Exit Gates by %s up to a maximum of %s.\nThe Obsession is not affected by Remember Me.\nOnly one Obsession per match.',
        flavor: '',
        image: 'rememberMe',
        tiers: [
            ['5 seconds', '20 additional seconds'],
            ['5 seconds', '25 additional seconds'],
            ['5 seconds', '30 additional seconds']
        ]
    },
    BLOOD_WARDEN: {
        id: 41,
        index: 'BLOOD_WARDEN',
        name: 'Blood Warden',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'NIGHTMARE',
        description:
            'Once per match, once at least one Exit Gate is opened, hooking a Survivor summons The Entity to block the exits for all Survivors for %s. While Blood Warden is active, Auras of Survivors located within the Exit Gates are revealed to you.',
        flavor: '',
        image: 'bloodWarden',
        tiers: [['30 seconds'], ['40 seconds'], ['60 seconds']]
    },
    HANGMANS_TRICK: {
        id: 42,
        index: 'HANGMANS_TRICK',
        name: "Hangman's Trick",
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'PIG',
        description:
            'Your ingenious modifications to Hooks prevent tampering and permanent damage. Hooks destroyed by sabotage or sacrifices repair automatically after %s.\nGain a notification when someone starts sabotaging the Hooks.',
        flavor: '"No excuses, no equivocations... No crying." — Amanda Young',
        image: 'hangmansTrick',
        tiers: [['30 seconds'], ['20 seconds'], ['10 seconds']]
    },
    SURVEILLANCE: {
        id: 43,
        index: 'SURVEILLANCE',
        name: 'Surveillance',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'PIG',
        description:
            "Unlocks potential in one's Aura reading ability. The last %s Aura(s) are indicated in white to you for %s.",
        flavor: '"Are you gonna behave?" — Amanda Young',
        image: 'surveillance',
        tiers: [
            ["1 regressing Generator's", '16 seconds'],
            ["2 regressing Generator's", '16 seconds'],
            ["3 regressing Generator's", '16 seconds']
        ]
    },
    MAKE_YOUR_CHOICE: {
        id: 44,
        index: 'MAKE_YOUR_CHOICE',
        name: 'Make Your Choice',
        rarity: ['RARE', 'RARE', 'VERY_RARE'],
        owner: 'PIG',
        description:
            'When a Survivor rescues another from a Hook at least %s away from you, Make Your Choice triggers and applies the Exposed Status Effect on the rescuer for %s.\nMake Your Choice has a cooldown of %s',
        flavor:
            '"You\'d be surprised what tools can save a life." — Amanda Young',
        image: 'makeYourChoice',
        tiers: [
            ['48 metres', '60 seconds', '60 seconds'],
            ['40 metres', '60 seconds', '60 seconds'],
            ['32 metres', '60 seconds', '60 seconds']
        ]
    },
    IRON_GRASP: {
        id: 45,
        index: 'IRON_GRASP',
        name: 'Iron Grasp',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'ALL',
        description:
            'Your powerful hold on the Survivors causes escapes to be nearly impossible. Effects of survivor struggling are reduced by %s. Time to struggle out of your grasp is increased by %s.',
        image: 'ironGrasp',
        tiers: [
            ['25%', '4%'],
            ['50%', '8%'],
            ['75%', '12%']
        ]
    }
};

export const SurvivorPerks = {
    DARK_SENSE: {
        id: 100,
        index: 'DARK_SENSE',
        name: 'Dark Sense',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'ALL',
        description:
            "Unlocks potential in one's Aura reading ability. When the Exit Gates unlock, the Killer's Aura is revealed to you for %s.",
        flavor:
            '"Take it from an old-timer: Slow down, don\'t rush and try not to worry so much! The best way to beat him is to know how he thinks." — Murf, The Lost Tapes',
        image: 'darkSense',
        tiers: [['3 seconds'], ['4 seconds'], ['7 seconds']]
    },
    DEJA_VU: {
        id: 101,
        index: 'DEJA_VU',
        name: 'Déjà Vu',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'ALL',
        description:
            "Unlocks potential in one's Aura reading ability. %s Generator(s)' Auras are revealed to you for %s when starting a trial.\nIf you are holding a Map that can track them, Generators revealed by Déjà Vu are added to the Map.",
        image: 'dejaVu',
        tiers: [[1, '4 seconds'], [1, '8 seconds'], [2, '8 seconds']]
    },
    HOPE: {
        id: 102,
        index: 'HOPE',
        name: 'Hope',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'ALL',
        description:
            'The growing odds of a successful escape fill you with hope and give you wings. Your movement speed is increased by %s as soon as the Exit Gates are powered.\nThis Perk is only active for %s after the Exit Gates have been powered.',
        image: 'hope',
        tiers: [
            ['5%', '120 seconds'],
            ['6%', '120 seconds'],
            ['7%', '120 seconds']
        ]
    },
    KINDRED: {
        id: 103,
        index: 'KINDRED',
        name: 'Kindred',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'ALL',
        description:
            "Unlocks potential in one's Aura reading ability. While you're on the Hook, %s Survivors' auras are revealed to all other Survivors. If the Killer is within an %s range, its aura is revealed to all other Survivors. Kindred trumps any of the Killer's stealth abilities.",
        flavor:
            '"Be kind to one another. We\'re all in this together." — Sujan, The Lost Tapes',
        image: 'kindred',
        tiers: [['1 random', '8 meter'], ['All', '8 meter'], ['All', '8 meter']]
    },
    LIGHTWEIGHT: {
        id: 104,
        index: 'LIGHTWEIGHT',
        name: 'Lightweight',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'ALL',
        description:
            'Your running is light and soft, making your tracks harder to follow. Footstep marks stay visible %s less than normal.',
        flavor:
            "\"Take it slow, he knows where you've been... just like I've always said: 'live slow and die old'\" — Dylan, The Lost Tapes",
        image: 'lightweight',
        tiers: [['1 seconds'], ['2 seconds'], ['3 seconds']]
    },
    NO_ONE_LEFT_BEHIND: {
        id: 105,
        index: 'NO_ONE_LEFT_BEHIND',
        name: 'No One Left Behind',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'ALL',
        description:
            'It is inconceivable to leave someone behind. Once the Exit Gates are powered, gain %s more Bloodpoints for actions in the Altruism category and perform them %s quicker.',
        flavor:
            '"... yeah, no shit. But I believe we can outsmart and overthrow him if we work together. Don\'t be predictable and selfish!" — Clyde, The Lost Tapes',
        image: 'noOneLeftBehind',
        tiers: [['50%', '4%'], ['75%', '8%'], ['100%', '12%']]
    },
    PLUNDERERS_INSTINCT: {
        id: 106,
        index: 'PLUNDERERS_INSTINCT',
        name: "Plunderer's Instinct",
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'ALL',
        description:
            "Unlocks potential in one's Aura reading ability. Chests' Auras are revealed to you when standing within %s. Grants a %s better chance at finding an Item of higher rarity from Chests.",
        flavor:
            '"The pioneers used to loot these babies for hours." — Aizeyu, The Lost Tapes',
        image: 'plunderersInstinct',
        tiers: [
            ['16 metres', 'slightly'],
            ['24 metres', 'moderately'],
            ['32 metres', 'considerably']
        ]
    },
    PREMONITION: {
        id: 107,
        index: 'PREMONITION',
        name: 'Premonition',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'ALL',
        description:
            "You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of the Killer in a %s cone within a range of %s. Premonition has a cooldown of %s each time it activates. Premonition trumps any of the Killer's stealth abilities.",
        flavor: '"I have a bad feeling about this!"',
        image: 'premonition',
        tiers: [
            ['45 degree', '12 metres', '60 seconds'],
            ['45 degree', '24 metres', '45 seconds'],
            ['45 degree', '36 metres', '30 seconds']
        ]
    },
    RESILIENCE: {
        id: 108,
        index: 'RESILIENCE',
        name: 'Resilience',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'ALL',
        description:
            'You are motivated in dire situations. Grants %s additional speed when interacting with Props while you are Injured.',
        flavor: '"Focus, even in these desperate times."',
        image: 'resilience',
        tiers: [['3%'], ['6%'], ['9%']]
    },
    SLIPPERY_MEAT: {
        id: 109,
        index: 'SLIPPERY_MEAT',
        name: 'Slippery Meat',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'ALL',
        description:
            'You have developed an efficient way to get out of Bear Traps and Hooks. Grants up to %s extra escape attempts on the hook. The odds of freeing yourself from Bear Traps are increased by %s.',
        image: 'slipperyMeat',
        tiers: [['1%', '15%'], ['2%', '20%'], ['3%', '25%']]
    },
    SMALL_GAME: {
        id: 110,
        index: 'SMALL_GAME',
        name: 'Small Game',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'ALL',
        description:
            'You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of Killer Traps and Totems in a %s cone within a range of %s. Small Game has a cooldown of %s each time it activates.',
        flavor: '"Nope." — Andy, The Lost Tapes',
        image: 'smallGame',
        tiers: [
            ['45-degree', '8 metres', '15 seconds'],
            ['45-degree', '10 metres', '12 seconds'],
            ['45-degree', '12 metres', '10 seconds']
        ]
    },
    SPINE_CHILL: {
        id: 111,
        index: 'SPINE_CHILL',
        name: 'Spine Chill',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'ALL',
        description:
            'An unnatural tingle warns you of impending doom. Get notified when the Killer is looking directly in your direction and standing within %s of range. When Spine Chill is active, Skill Check trigger odds are increased by %s with success zones reduced by %s and your Repair, Heal and Sabotage speeds are increased by %s.',
        flavor:
            '"There is a voice that doesn\'t use words. Listen.." — Sassy, The Lost Tapes',
        image: 'spineChill',
        tiers: [
            ['12 metres', '10%', '10%', '2%'],
            ['24 metres', '10%', '10%', '4%'],
            ['36 metres', '10%', '10%', '6%']
        ]
    },
    THIS_IS_NOT_HAPPENING: {
        id: 112,
        index: 'THIS_IS_NOT_HAPPENING',
        name: 'This Is Not Happening',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'ALL',
        description:
            'You perform at your best when you are under extreme stress. Great Skill Check success zones when repairing, healing and sabotaging get %s bigger when you are injured.',
        image: 'thisIsNotHappening',
        tiers: [['10%'], ['20%'], ['30%']]
    },
    WELL_MAKE_IT: {
        id: 113,
        index: 'WELL_MAKE_IT',
        name: "We'll Make It",
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'ALL',
        description:
            'Helping others heightens your morale. For each Survivor you rescue from a Hook, gain an additional %s speed increase to healing up others to a maximum of 100% for %s.',
        image: 'wellMakeIt',
        tiers: [
            ['25%', '30 seconds'],
            ['50%', '60 seconds'],
            ['100%', '90 seconds']
        ]
    },
    BOND: {
        id: 114,
        index: 'BOND',
        name: 'Bond',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'DWIGHT_FAIRFIELD',
        description:
            "Unlocks potential in one's aura reading ability. Allies' Auras are revealed to you when they are within a %s.",
        flavor:
            'We have to work as a team, I need you to survive so that I can survive!',
        image: 'bond',
        tiers: [['12 metres'], ['24 metres'], ['36 metres']]
    },
    PROVE_THYSELF: {
        id: 115,
        index: 'PROVE_THYSELF',
        name: 'Prove Thyself',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'DWIGHT_FAIRFIELD',
        description:
            'Receive an incremental speed bonus to repair, healing and sabotage actions when other Survivors are within an %s range.\n1 nearby survivor grants %s increased speed.\n2 nearby survivor grants %s increased speed.3 nearby survivor grants %s increased speed.',
        flavor: "I'll show you what I can do!",
        image: 'proveThyself',
        tiers: [
            ['8 meter', '1%', '2%', '3%'],
            ['8 meter', '2%', '4%', '6%'],
            ['8 meter', '3%', '6%', '9%']
        ]
    },
    LEADER: {
        id: 116,
        index: 'LEADER',
        name: 'Leader',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'DWIGHT_FAIRFIELD',
        description:
            "You're able to organize a team to cooperate more efficiently. Increases the other Survivors' Repair, Healing and sabotaging, cleansing, opening Exit Gates, and search speeds by %s when they are within an %s range from you.",
        flavor: "I'll show you what I can do!",
        image: 'leader',
        tiers: [['3%', '8 meter'], ['6%', '8 meter'], ['9%', '8 meter']]
    },
    QUICK_AND_QUIET: {
        id: 117,
        index: 'QUICK_AND_QUIET',
        name: 'Quick & Quiet',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'MEG_THOMAS',
        description:
            "You do not make as much noise as others when quickly vaulting over obstacles or hiding in Lockers. The vault and hide actions' noise detection range is reduced by %s. This effect can only be triggered every %s.",
        image: 'quickAndQuiet',
        tiers: [
            ['100%', '30 seconds'],
            ['100%', '25 seconds'],
            ['100%', '20 seconds']
        ]
    },
    SPRINT_BURST: {
        id: 118,
        index: 'SPRINT_BURST',
        name: 'Sprint Burst',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'MEG_THOMAS',
        description:
            'When starting to run, break into a sprint at %s your normal running speed for a maximum of %s.\nCauses Exhaustion for %s.',
        image: 'sprintBurst',
        tiers: [
            ['150%', '3 seconds', '60 seconds'],
            ['150%', '3 seconds', '50 seconds'],
            ['150%', '3 seconds', '40 seconds']
        ]
    },
    ADRENALINE: {
        id: 119,
        index: 'ADRENALINE',
        name: 'Adrenaline',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'MEG_THOMAS',
        description:
            'You are fuelled by unexpected energy when on the verge of escape. %s and sprint at %s your normal running speed for %s when the Exit Gates are powered.\nAdrenaline is on hold if you are disabled at the moment it should take effect and will activate when freed.\nAdrenaline will wake you up if you are asleep when it triggers.\nAdrenaline ignores Exhaustion.\nCauses Exhaustion for %s.',
        image: 'adrenaline',
        tiers: [
            [
                'Instantly heal one Health State',
                '150%',
                '5 seconds',
                '60 seconds'
            ],
            [
                'Instantly heal one Health State',
                '150%',
                '5 seconds',
                '50 seconds'
            ],
            [
                'Instantly heal one Health State',
                '150%',
                '5 seconds',
                '40 seconds'
            ]
        ]
    },
    EMPATHY: {
        id: 120,
        index: 'EMPATHY',
        name: 'Empathy',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'CLAUDETTE_MOREL',
        description:
            "Unlocks potential in one's Aura reading ability. Dying or injured allies' Auras are revealed to you when within %s. Empathy does not reveal Auras of allies when they are in the Killer's direct contact.",
        image: 'empathy',
        tiers: [['32 metres'], ['64 metres'], ['∞ metres']]
    },
    BOTANY_KNOWLEDGE: {
        id: 121,
        index: 'BOTANY_KNOWLEDGE',
        name: 'Botany Knowledge',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'CLAUDETTE_MOREL',
        description:
            'You transform plants found around The Campfire into tinctures that slow down bleeding. Healing speed is increased by %s and the efficiency of healing items is increased by %s.',
        flavor:
            '"Basic Botany knowledge could save your life someday." — Claudette Morel',
        image: 'botanyKnowledge',
        tiers: [['10%', '10%'], ['15%', '15%'], ['20%', '20%']]
    },
    SELF_CARE: {
        id: 122,
        index: 'SELF_CARE',
        name: 'Self Care',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'CLAUDETTE_MOREL',
        description:
            'Unlocks the ability to heal yourself without a healing item at %s the normal healing speed. Increases the efficiency of healing item self-heal by %s.',
        image: 'selfCare',
        tiers: [['50%', '10%'], ['50%', '15%'], ['50%', '20%']]
    },
    IRON_WILL: {
        id: 123,
        index: 'IRON_WILL',
        name: 'Iron Will',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'JAKE_PARK',
        description:
            "You're able to concentrate and enter a meditative-like state to numb some pain. Grunts of pain caused by injuries are reduced by %s %s.",
        image: 'ironWill',
        tiers: [
            ['50%', 'while staying still'],
            ['100%', 'while staying still'],
            ['100%', 'at any time']
        ]
    },
    CALM_SPIRIT: {
        id: 124,
        index: 'CALM_SPIRIT',
        name: 'Calm Spirit',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'JAKE_PARK',
        description:
            'Animals seem to trust you as they often stay calm in your presence. Reduces chances of alerting Crows by %s.',
        image: 'calmSpirit',
        tiers: [['80%'], ['90%'], ['100%']]
    },
    SABOTEUR: {
        id: 125,
        index: 'SABOTEUR',
        name: 'Saboteur',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'JAKE_PARK',
        description:
            'Unlocks the ability to sabotage without a Toolbox at %s the normal sabotage speed. Skill Checks triggered in this situation have success zones reduced by %s. Increases efficiency of Toolbox sabotage by %s.',
        image: 'saboteur',
        tiers: [
            ['30%', '0%', '50%'],
            ['40%', '10%', '75%'],
            ['50%', '20%', '100%']
        ]
    },
    BALANCED_LANDING: {
        id: 126,
        index: 'BALANCED_LANDING',
        name: 'Balanced Landing',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'NEA_KARLSSON',
        description:
            'When Balanced Landing is active, stagger effects from long falls are reduced by %s.\nTier III only: Upon landing, start sprinting at %s your normal running speed for a maximum of %s if not exhausted.\nCauses Exhaustion for %s.',
        flavor: '"I\'ve jumped from higher places." — Nea Karlsson',
        image: 'balancedLanding',
        tiers: [
            ['50%', '150%', '3 seconds', '40 seconds'],
            ['75%', '150%', '3 seconds', '40 seconds'],
            ['75%', '150%', '3 seconds', '40 seconds']
        ]
    },
    URBAN_EVASION: {
        id: 127,
        index: 'URBAN_EVASION',
        name: 'Urban Evasion',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'NEA_KARLSSON',
        description: 'Your movement speed while crouching is increased by %s.',
        flavor: '"The paint is still fresh but I\'m long gone." — Nea Karlsson',
        image: 'urbanEvasion',
        tiers: [['90%'], ['95%'], ['100%']]
    },
    STREETWISE: {
        id: 128,
        index: 'STREETWISE',
        name: 'Streetwise',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'NEA_KARLSSON',
        description:
            "Long nights out taught you to do a lot with what you've got. Reduce consumption rate of charge by %s for you and allies within an %s range.",
        flavor:
            '"You\'re doing it wrong! Let me show you how it\'s done." — Nea Karlsson',
        image: 'streetwise',
        tiers: [['10%', '8 metre'], ['12%', '8 metre'], ['15%', '8 metre']]
    },
    LEFT_BEHIND: {
        id: 129,
        index: 'LEFT_BEHIND',
        name: 'Left Behind',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'WILLIAM_OVERBECK',
        description:
            "You'll get the job done... No matter the cost. If you are the last person remaining in the trial, for each Generator that needs to be repaired, gain a %s bonus to Repair speed.",
        flavor:
            "\"I'm not horseshittin' around. I'm doing this alone!\" — Bill Overbeck",
        image: 'leftBehind',
        tiers: [['19%'], ['22%'], ['25%']]
    },
    BORROWED_TIME: {
        id: 130,
        index: 'BORROWED_TIME',
        name: 'Borrowed Time',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'WILLIAM_OVERBECK',
        description:
            "You are fueled by an unexpected energy when saving an ally from a hook within the Killer's terror radius.\nAfter unhooking a survivor within the killer's terror radius, for %s, any damage taken that would put the unhooked Survivor into the dying state will instad trigger a %s blood out timer.\nIf the unhooked player takes any damage during the bleed out timer or if the bleed out timer ends the unhooked survivor will be put into the dying state.",
        flavor:
            '"Probably stings like hell, but it ain\'t gonna kill ya. Up and at \'em soldier. Time to move!" — Bill Overbeck',
        image: 'borrowedTime',
        tiers: [
            ['15 seconds', '15 seconds'],
            ['15 seconds', '20 seconds'],
            ['15 seconds', '25 seconds']
        ]
    },
    UNBREAKABLE: {
        id: 131,
        index: 'UNBREAKABLE',
        name: 'Unbreakable',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'WILLIAM_OVERBECK',
        description:
            'Past battles have taught you a thing or two about survival. Grants the ability to fully recover from the dying state %bonce per trial%/b. Increases dying recovery by %s.',
        flavor: '"Goddammit, I am seriously FUBAR!" — Bill Overbeck',
        image: 'unbreakable',
        tiers: [['15%'], ['20%'], ['25%']]
    },
    WERE_GONNA_LIVE_FOREVER: {
        id: 132,
        index: 'WERE_GONNA_LIVE_FOREVER',
        name: "We're Gonna Live Forever",
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'DAVID_KING',
        description:
            'Your few friends deserve the best protection. Each time you rescue or take a hit to protect a Survivor, gain %s stackable bonus to all Bloodpoint gains up to a maximum of %s.\nThe Bonus Bloodpoints are only awarded post-trial.',
        flavor:
            "\"Come on then, let's 'ave it! I don't give a shit pal.\" — David King",
        image: 'WereGonnaLiveForever',
        tiers: [['25%', '50%'], ['25%', '75%'], ['25%', '100%']]
    },
    DEAD_HARD: {
        id: 133,
        index: 'DEAD_HARD',
        name: 'Dead Hard',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'DAVID_KING',
        description:
            'You can take a beating. When injured, tap into your adrenaline bank and dash forward quickly to avoid damage.\nPress the %bactive ability%/b button while running to dash forward.\nDuring the dash, you avoid damage.\nCauses Exhaustion for %s.',
        flavor:
            "\"We were walkin' through t'ginnel one night when a beer bottle flew past me, then another, and another. I thought to myself \"Gonna 'ave some fun 'ere lads, let's get stuck in!' \". It were a right dust up, I swear down!\" — David King",
        image: 'DeadHard',
        tiers: [['60 seconds'], ['50 seconds'], ['40 seconds']]
    },
    NO_MITHER: {
        id: 134,
        index: 'NO_MITHER',
        name: 'No Mither',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'DAVID_KING',
        description:
            "Go on kid, it's just a scratch. You start the trial injured and won't let anyone heal you beyond this state. Your thick blood coagulates practically instantly.\nYou cannot be healed to healthy.\nYou don't leave pools of blood.\nGrunts of pain caused by injuries are reduced by %s at any time.\nGrants the ability to fully recover from the dying state.",
        flavor:
            "\"I lost it. Just lamped him one.. They went and banned me didn't they.. Went t'pub afterwards, had a few pints and moved on to the next chapter. I couldn't be mithered with it all anyway, you know what I mean? Can't be arsed.\" — David King",
        image: 'NoMither',
        tiers: [['0%'], ['25%'], ['50%']]
    },
    SOLE_SURVIVOR: {
        id: 135,
        index: 'SOLE_SURVIVOR',
        name: 'Sole Survivor',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'LAURIE_STRODE',
        description:
            "As more of your friends fall to the Killer, your chances of survival increases due to an unexplained force. Each Survivor killed or sacrificed disrupts the Killer's aura reading ability towards you.\n1 killed or sacrificed: Reduces the Killer's aura reading range by %s.\n2 killed or sacrificed: Reduces the Killer's aura reading range by %s.\n3 killed or sacrificed: Reduces the Killer's aura reading range by %s.\nIncreases your chances to be the Killer's %bobsession%/b. Only one obsession per match.",
        flavor: '"It was the boogeyman." — Laurie Strode',
        image: 'soleSurvivor',
        tiers: [
            ['40%', '40%', '40%'],
            ['45%', '60%', '75%'],
            ['40%', '75%', '100%']
        ]
    },
    OBJECT_OF_OBSESSION: {
        id: 136,
        index: 'OBJECT_OF_OBSESSION',
        name: 'Object of Obsession',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'LAURIE_STRODE',
        description:
            "A supernatural bond links you to the Killer. If you are looking in the Killer's direction, your link will reveal your auras to each other. This effect applies only if you are outside the Killer's terror radius.\nAs the Killer's obsession, this effect applies to a maximum rnage of %s. Otherwise, it applies to a maximum range of %s.\nIncreases your chances to be the Killer's %bobsession%/b. Only one obsession per match.",
        flavor: '"He was watching me!" — Laurie Strode',
        image: 'objectOfObsession',
        tiers: [
            ['56 metres', '44 metres'],
            ['64 metres', '56 metres'],
            ['72 metres', '64 metres']
        ]
    },
    DECISIVE_STRIKE: {
        id: 137,
        index: 'DECISIVE_STRIKE',
        name: 'Decisive Strike',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'LAURIE_STRODE',
        description:
            "Once per match, when the Killer's Obsession, succeed a Skill Check to automatically escape the Killer's grasp and stun them for %s. When not the Killer's Obsession, when the wiggle meter is at %s succeed in a Skill Check to escape the grasp.",
        flavor: '"There\'s nothing to be scared of." — Laurie Strode',
        image: 'decisiveStrike',
        tiers: [
            ['3 seconds', '45%'],
            ['3.5 seconds', '40%'],
            ['4 seconds', '35%']
        ]
    },
    OPEN_HANDED: {
        id: 138,
        index: 'OPEN_HANDED',
        name: 'Open Handed',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'ACE_VISCONTI',
        description:
            "Strengthens the potential of you and your team's Aura reading abilities. Increases Aura reading ranges by %s.",
        flavor:
            '"Paying attention is what kept me alive through the years. That, and my good looks of course." — Ace Visconti',
        image: 'openHanded',
        tiers: [['4 metres'], ['6 metres'], ['8 metres']]
    },
    UP_THE_ANTE: {
        id: 139,
        index: 'UP_THE_ANTE',
        name: 'Up The Ante',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'ACE_VISCONTI',
        description:
            'For each other Survivor still alive, grant a %s bonus to Luck to all remaining Survivors.',
        flavor:
            '"What can I say? I\'m just a very lucky guy... I\'m sure some of it will rub off on you." — Ace Visconti',
        image: 'upTheAnte',
        tiers: [['1%'], ['2%'], ['3%']]
    },
    ACE_IN_THE_HOLE: {
        id: 140,
        index: 'ACE_IN_THE_HOLE',
        name: 'Ace in The Hole',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'ACE_VISCONTI',
        description:
            'Lady Luck always seems to be throwing something good your way. When retrieving an Item from a Chest, there is a %s chance that an Add-on of %s rarity or lower will be attached to it.',
        flavor:
            '"Everything that glitters isn\'t gold. But gold isn\'t worth a damn in this place, so this should come in handy." — Ace Visconti',
        image: 'aceInTheHole',
        tiers: [['50%', 'uncommon'], ['50%', 'rare'], ['50%', 'very rare']]
    },
    TECHNICIAN: {
        id: 141,
        index: 'TECHNICIAN',
        name: 'Technician',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'FENG_MIN',
        description:
            'The noises caused by your repairs and their hearing distance are reduced by %s. On a failed repair Skill Checks, there is a %s chance the Generator explosion will be prevented.',
        flavor: '"I\'m gonna stealth this one." — Feng Min',
        image: 'technician',
        tiers: [['0 metres', '30%'], ['4 metres', '40%'], ['8 metres', '50%']]
    },
    LITHE: {
        id: 142,
        index: 'LITHE',
        name: 'Lithe',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'FENG_MIN',
        description:
            'After performing a vault, break into a sprint at %s of your normal running speed for a maximum of %s seconds. Activates in chases only.\nCauses Exhaustion for %s.',
        flavor: '"U mad?" — Feng Min',
        image: 'lithe',
        tiers: [
            ['150%', '3 seconds', '60 seconds'],
            ['150%', '3 seconds', '50 seconds'],
            ['150%', '3 seconds', '40 seconds']
        ]
    },
    ALERT: {
        id: 143,
        index: 'ALERT',
        name: 'Alert',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'FENG_MIN',
        description:
            "Your acute senses are on high alert. When the Killer performs the break action within %s of range, the Killer's Aura is revealed to you for 6 seconds. This effect can only be triggered once every %s.",
        flavor: '"I have true sight." — Feng Min',
        image: 'alert',
        tiers: [
            ['12 metres', '60 seconds'],
            ['24 metres', '45 seconds'],
            ['36 metres', '30 seconds']
        ]
    },
    WAKE_UP: {
        id: 144,
        index: 'WAKE_UP',
        name: 'Wake Up!',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'QUENTIN_SMITH',
        description:
            "Unlocks potential in one's Aura reading ability. Once all Generators are powered, Exit Gates are revealed to you when within %s of range. While opening the Exit Gates, reveal your Aura to other Survivors within %s of range.\nWhile Wake Up! is active, you open the Exit Gates %s faster.",
        image: 'wakeUp',
        tiers: [
            ['24 metres', '24 metres', '5%'],
            ['48 metres', '48 metres', '10%'],
            ['∞ metres', '∞ metres', '15%']
        ]
    },
    PHARMACY: {
        id: 145,
        index: 'PHARMACY',
        name: 'Pharmacy',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'QUENTIN_SMITH',
        description:
            'You have a knack for finding medicine. Searches through Chests are %s faster.\nTier III only: The noises caused by searches along with their hearing distances are reduced by 8 metres.\nPharmacy guarantees an Emergency Med-Kit on your first completed Chest search.',
        image: 'pharmacy',
        tiers: [['40%'], ['60%'], ['80%']]
    },
    VIGIL: {
        id: 146,
        index: 'VIGIL',
        name: 'Vigil',
        rarity: ['UNCOMMON', 'RARE', 'VERY_RARE'],
        owner: 'QUENTIN_SMITH',
        description:
            'You look over your friends even in dire situations. You and your allies within an %s range recover from Exhausted, Hemorrhage, Mangled, Hindered and Blindness Status Effects %s faster.',
        image: 'vigil',
        tiers: [['8 metre', '10%'], ['8 metre', '15%'], ['8 metre', '20%']]
    },
    TENACITY: {
        id: 147,
        index: 'TENACITY',
        name: 'Tenacity',
        rarity: ['UNCOMMON', 'UNCOMMON', 'RARE'],
        owner: 'DAVID_TAPP',
        description:
            'There is nothing stopping you. Your ferocious tenacity in dire situations allows you to crawl %s faster and recover at the same time.',
        flavor:
            '"What the hell is this? I\'m taking this bastard down!" — Detective David Tapp',
        image: 'tenacity',
        tiers: [['30%'], ['40%'], ['50%']]
    },
    DETECTIVES_HUNCH: {
        id: 148,
        index: 'DETECTIVES_HUNCH',
        name: "Detective's Hunch",
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'DAVID_TAPP',
        description:
            "Unlocks potential in one's Aura reading ability. When completing a Generator, the Auras of Generators, Chests and Totems within %s are revealed to you for %s.\nIf you are holding a Map that can track Objectives, Generators revealed by Detective's Hunch are added to the Map.",
        flavor:
            '"Are you able to tell us where you were last night?" — Detective David Tapp',
        image: 'detectivesHunch',
        tiers: [
            ['32 metres', '5 seconds'],
            ['48 metres', '5 seconds'],
            ['64 metres', '5 seconds']
        ]
    },
    STAKE_OUT: {
        id: 149,
        index: 'STAKE_OUT',
        name: 'Stake Out',
        rarity: ['RARE', 'VERY_RARE', 'VERY_RARE'],
        owner: 'DAVID_TAPP',
        description:
            "Getting close to the Killer fills you with determination. For each %s you are standing within the Killer's Terror Radius and are not in a Chase, you gain a Token up to a maximum of %s.\nWhen Stake Out has at least %b1 Token%/b, Good Skill Checks are considered Great Skill Checks and consume %b1 Token%/b.",
        flavor:
            "\"I had you, I had you on your knees. You're runnin' scared because we had you. We're gonna close this case!\" — Detective David Tapp",
        image: 'stakeOut',
        tiers: [
            ['15 seconds', '2 Tokens'],
            ['15 seconds', '3 Tokens'],
            ['15 seconds', '4 Tokens']
        ]
    }
};
