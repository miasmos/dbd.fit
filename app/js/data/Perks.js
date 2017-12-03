export const KillerPerks = {
	STRIDOR: {
		index: 'STRIDOR',
		name: 'Stridor',
		description: 'Breathing of Survivors in pain is %s% louder. Regular Survivor breathing is now also %s% louder.',
		flavor: 'If you don\'t stop and catch your breath... she will.',
		image: 'images/Perk_Stridor.png',
		tiers: [
			[25, 0],
			[50, 0],
			[50, 25]
		]
	},
	THANATOPHOBIA: {
		index: 'THANATOPHOBIA',
		name: 'Thanatophobia',
		description: 'All Survivors receive penalties to repair, healing and sabotage speeds for each injured, dying or hooked Survivor.\n1 injured, dying or hooked survivor decrease repair, healing and sabotage speed by %s%.\n2 injured, dying or hooked survivor decrease repair, healing and sabotage speed by %s%.\n3 injured, dying or hooked survivor decrease repair, healing and sabotage speed by %s%.\n4 injured, dying or hooked survivor decrease repair, healing and sabotage speed by %s%.',
		flavor: 'She plays with us and revels in our pain.',
		image: 'images/Perk_Thanatophobia',
		tiers: [
			[4, 7, 10, 13],
			[5, 8, 11, 14],
			[6, 9, 12, 15]
		]
	},
	A_NURSES_CALLING: {
		index: 'A_NURSES_CALLING',
		name: 'A Nurse\'s Calling',
		description: 'Unlocks potential in one\'s Aura reading ability. The Auras of Survivors who are healing or being healed are revealed to you when they are within %s metres of range.',
		flavor: 'Still attached to the fragments of her past life, she is drawn to those in need of help.',
		image: 'images/Perk_ANursesCalling',
		tiers: [
			[20],
			[24],
			[28]
		]
	},
	UNNERVING_PRESENCE: {
		index: 'UNNERVING_PRESENCE',
		name: 'Unnerving Presence',
		description: 'Your presence alone instils great fear. Survivors within your Terror Radius have a %s% greater chance of triggering Skill Checks when repairing, healing or sabotaging. Triggered Skill Checks\' success zones are reduced by %s%.',
		flavor: 'Its presence befalls us.',
		image: 'images/',
		tiers: [
			[6, 40],
			[8, 50],
			[10, 60]
		]
	},
	BRUTAL_STRENGTH: {
		index: 'BRUTAL_STRENGTH',
		name: 'Brutal Strength',
		description: 'Your great strength allows you to shred through your prey\'s defences. Destroy dropped Pallets %s% faster.',
		flavor: 'It\'s more than muscles. A dark power motivates the beast.',
		image: 'images/',
		tiers: [
			[10],
			[15],
			[20]
		]
	},
	AGITATION: {
		index: 'AGITATION',
		name: 'Agitation',
		description: 'You get excited in anticipation of hooking your prey. Increases your speed while transporting bodies by %s%. While transporting a body, your Terror Radius is increased by %s metres.',
		flavor: 'At some point, the excitement of hooking one of us becomes more important than the desire to kill us.',
		image: 'images/',
		tiers: [
			[6, 6],
			[8, 12],
			[12, 18]
		]
	},
	PREDATOR: {
		index: 'PREDATOR',
		name: 'Predator',
		description: 'Your acute tracking ability allows you to follow disturbances left by passing prey over a longer period of time. Footstep marks stay visible %s seconds longer than normal.',
		flavor: 'Never stop moving and hope you\'re always two steps ahead of the beast.',
		image: 'images/',
		tiers: [
			[1],
			[2],
			[3]
		]
	},
	BLOODHOUND: {
		index: 'BLOODHOUND',
		name: 'Bloodhound',
		description: 'Like a hunting scent hound, you smell traces of blood at a great distance. Fresh Blood Stains are %s more discernible than normal and can be tracked for %s seconds longer than normal.',
		flavor: 'Pebbles shimmering in the moonlight; my life drips down in a trail so easy to follow.',
		image: 'images/',
		tiers: [
			['slightly', 2],
			['moderately', 3],
			['considerably', 4]
		]
	},
	SHADOWBORN: {
		index: 'SHADOWBORN',
		name: 'Shadowborn',
		description: 'You have a keen vision in the darkness of the night. Your vision is %s% clearer and your field of view is %s wider than normal. Highly sensitive to light, you get blinded %s% faster than normal and take 50% more time to recover from this condition.',
		flavor: 'Shining in the darkest dark, his eyes pierce the night and sting your soul.',
		image: 'images/',
		tiers: [
			[25, 'not', 20],
			[30, 'slightly', 25],
			[35, 'considerably', 30]
		]
	},
	ENDURING: {
		index: 'ENDURING',
		name: 'Enduring',
		description: 'You are resilient to pain. Your rate of recovery from stuns is increased by %s%.',
		flavor: 'He stops at nothing.',
		image: 'images/',
		tiers: [
			[50],
			[60],
			[75]
		]
	},
	LIGHTBORN: {
		index: 'LIGHTBORN',
		name: 'Lightborn',
		description: 'Unlike other beasts of the fog, you have adapted to light. Resistance to blindness is increased by %s%. Recovery from blindness is increased by 50%.',
		flavor: 'These monsters... they adapt! They emerge with strange new abilities.',
		image: 'images/',
		tiers: [
			[20],
			[40],
			[60]
		]
	},
	TINKERER: {
		index: 'TINKERER',
		name: 'Tinkerer',
		description: 'Add-ons that affect the charge time of your Power are %s% more effective.',
		flavor: 'The Crooked makes impressive tools out of scraps... Tools aimed at maiming us in creative ways... It\'s horrifying to think it\'s actually intelligent.',
		image: 'images/',
		tiers: [
			[6],
			[8],
			[10]
		]
	},
	SAVE_THE_BEST_FOR_LAST: {
		index: 'SAVE_THE_BEST_FOR_LAST',
		name: 'Save The Best For Last',
		description: 'You become obsessed with one Survivor. As long as your Obsession is alive, after being in a chase for 20 seconds the cooldown for your next successful attack is decreased by %s%. Your successful attack cooldown remains active for 5 seconds seconds after a chase. Re-initialising a chase before the 5 seconds have lapsed will reset the successful attack cooldown timer.\nOnly one Obsession per match.',
		flavor: 'Death has come to your little town, Sheriff.',
		image: 'images/',
		tiers: [
			[30],
			[35],
			[40]
		]
	},
	PLAY_WITH_YOUR_FOOD: {
		index: 'PLAY_WITH_YOUR_FOOD',
		name: 'Play With Your Food',
		description: 'You become obsessed with one Survivor. Every time you chase your Obsession and let them escape, you receive a Token up to a maximum of 3 Tokens. Each Token increases your movement speed by %s%. Each offensive action spends one Token.\nOnly one Obsession per match.',
		flavor: 'You\'ve fooled them, haven\'t you Michael? But not me.',
		image: 'images/',
		tiers: [
			[3],
			[4],
			[5]
		]
	},
	DYING_LIGHT: {
		index: 'DYING_LIGHT',
		name: 'Dying Light',
		description: 'You become obsessed with one Survivor. Your Obsession\'s altruistic action speed is increased by %s%. Once the Obsession is killed or sacrificed, every other Survivor gets a penalty of %s% to repair, healing and sabotage speed.',
		flavor: 'This isn\'t a man...',
		image: 'images/',
		tiers: [
			[38, 19],
			[44, 22],
			[50, 25]
		]
	},
	HEX_THE_THIRD_SEAL: {
		index: 'HEX_THE_THIRD_SEAL',
		name: 'Hex: The Third Seal',
		description: 'A Hex that hinders one\'s Aura reading ability. Hitting a Survivor while the Hex Totem is active reduces the effectiveness of their Aura reading ability by 100%. This effect applies to the last %s Survivors hit.\nThe Hex effects persist as long as the related Hex Totem is standing.',
		flavor: 'She touched your skin, you bear the witch\'s mark!',
		image: 'images/',
		tiers: [
			[2],
			[3],
			[4]
		]
	},
	HEX_RUIN: {
		index: 'HEX_RUIN',
		name: 'Hex: Ruin',
		description: 'A Hex that affects the Survivors\' skills at repairing Generators. %s Survivors are affected by Ruin, which causes Good Skill Checks to result in 5% regression on the Generator and Great Skill Checks grant 0% in progression.\nThe Hex effects persist as long as the related Hex Totem is standing.',
		flavor: 'A curse is upon you. It will cause your ruin.',
		image: 'images/',
		tiers: [
			[2],
			[3],
			[4]
		]
	},
	HEX_DEVOUR_HOPE: {
		index: 'HEX_DEVOUR_HOPE',
		name: 'Hex: Devour Hope',
		description: 'A Hex rooting its power on hope. The false hope of Survivors ignites your hunger. When a Survivor is rescued from a hook at least 24 metres away, Devour Hope receives a Token.\n2 Tokens: %s\n3 Tokens: %s\n5 Tokens: %s\nThe Hex effects persist as long as the related Hex Totem is standing.',
		flavor: 'If you do nothing, you have their blood on your hands. If you save them, her hunger grows.',
		image: 'images/',
		tiers: [
			['-', '-', 'Grants the ability to kill Survivors by your own hand.'],
			['-', 'Attacks put Survivors into the dying state automatically.', 'Grants the ability to kill Survivors by your own hand.'],
			['Gain a 5% speed burst for 10 seconds after hooking a Survivor. Speed burst triggers 10 seconds after hooking a Survivor.', 'Attacks put Survivors into the dying state automatically.', 'Grants the ability to kill Survivors by your own hand.']
		]
	},
	OVERWHELMING_PRESENCE: {
		index: 'OVERWHELMING_PRESENCE',
		name: 'Overwhelming Presence',
		description: 'Your presence alone instils great fear. Survivors within your Terror Radius suffer from inefficiency. Affected Survivors\' Item consumption rates are increased by %s%',
		flavor: 'Shit!! I dropped the gauze!',
		image: 'images/',
		tiers: [
			[80],
			[90],
			[100]
		]
	},
	MONITOR_AND_ABUSE: {
		index: 'MONITOR_AND_ABUSE',
		name: 'Monitor & Abuse',
		description: 'Meticulous in your approach, terrifying in your application. While in a chase, your Terror Radius is increased by %s metres. Otherwise your Terror Radius is decreased by %s metres and your field of view is %s increased. Field of view gains do not stack.',
		flavor: 'It\'s time for your treatment!',
		images: 'images/',
		tiers: [
			[6, 6, 'slightly'],
			[7, 7, 'moderately'],
			[8, 8, 'considerably']
		]
	},
	OVERCHARGE: {
		index: 'OVERCHARGE',
		name: 'Overcharge',
		description: 'You are fuelled by your hate for progress. Overcharge a Generator by performing the Damage Generator action. The next Survivor interacting with that Generator is faced with a %s difficult Skill Check. Failing the Skill Check results in an additional %s% Generator regression.',
		flavor: 'It is a trap. But a trap one must step in...',
		image: 'images/',
		tiers: [
			['moderately', 3],
			['considerably', 4],
			['tremendously', 5]
		]
	},
	BEAST_OF_PREY: {
		index: 'BEAST_OF_PREY',
		name: 'Beast Of Prey',
		description: 'Your lust for a kill is so intense that your connection with the Entity is momentarily lost, making you totally unpredictable. The Red Stain disappears for %s seconds when Bloodlust activates.\nBeast of Prey has a cooldown of 120 seconds.',
		flavor: 'Where did she go?',
		image: 'images/',
		tiers: [
			[15],
			[20],
			[25]
		]
	},
	TERRITORIAL_IMPERATIVE: {
		index: 'TERRITORIAL_IMPERATIVE',
		name: 'Territorial Imperative',
		description: 'Unlocks potential in one\'s Aura reading ability. Survivors\' Auras are revealed to you for 3 seconds when they enter the and you are more than 32 metres away from the Basement entrance.\nTerritorial Imperative can only be triggered once every %s seconds.',
		flavor: 'We\'re not safe anywhere...',
		image: 'images/',
		tiers: [
			[60],
			[45],
			[30]
		]
	},
	HEX_HUNTRESS_LULLABY: {
		index: 'HEX_HUNTRESS_LULLABY',
		name: 'Hex: Huntress Lullaby',
		description: 'A Hex rooting its power in despair. Your hunt is an irresistible song of dread which muddles your prey’s attention. Survivors receive a %s% regression penalty when missing any Skill Check.\n\nEach time a Survivor is hooked, Huntress Lullaby grows in power: 1 to 4 Tokens: Time between the Skill Check warning sound and the Skill Check becomes shorter.\n5 Tokens: No Skill Check warning.\nThe Hex effects persist as long as the related Hex Totem Icon is standing.',
		flavor: 'That song, it drives me crazy!',
		image: 'images/',
		tiers: [
			[2],
			[4],
			[6]
		]
	},
	KNOCK_OUT: {
		index: 'KNOCK_OUT',
		name: 'Knock Out',
		description: 'The trauma caused by your brutal attacks makes crying for help painfully difficult. Dying Survivors\' Auras are not revealed to other Survivors when they are standing outside of %s metres of range.',
		flavor: 'Oh, that gun\'s no good. The old way... with a sledge! You see, that way\'s better. They die better that way.',
		image: 'images/',
		tiers: [
			[32],
			[24],
			[16]
		]
	},
	BARBECUE_AND_CHILI: {
		index: 'BARBECUE_AND_CHILI',
		name: 'Barbecue & Chili',
		description: 'A deep bond with The Entity unlocks potential in one\'s Aura reading ability. After hooking a Survivor, all other Survivors\' Auras are revealed to you for 4 seconds when they are further than %s metres from the Hook.\nEach time a Survivor is hooked for the first time, gain a %s% stackable Bonus to all Bloodpoint gains.',
		flavor: 'I just can\'t take no pleasure in killing. There\'s just some things you gotta do. Don\'t mean you have to like it.',
		image: 'images/',
		tiers: [
			[52, 15],
			[46, 20],
			[40, 25]
		]
	},
	FRANKLINS_DEMISE: {
		index: 'FRANKLINS_DEMISE',
		name: 'Franklin\'s Demise',
		description: 'Your vicious attacks make the Survivors drop their Item on impact. The lost item is damaged in the fall, losing %s% of its base amount of Charges.',
		flavor: 'Sally, I hear something. Stop! Stop!',
		image: 'images/',
		tiers: [
			[0],
			[5],
			[10]
		]
	},
	FIRE_UP: {
		index: 'FIRE_UP',
		name: 'Fire Up',
		description: 'The increased pressure of losing your preys fills you with anger and gives you unsuspected motivation. Each time the Survivors complete repairs on a Generator, Fire Up grows in power and grants speed bonus to pick up, drop, Pallet break, Generator break and vaults.\n2 Tokens: Receive %s% action speed bonus.\n3 Tokens: Receive %s% action speed bonus.\n4 Tokens: Receive %s% action speed bonus.',
		flavor: '',
		image: 'images/',
		tiers: [
			[6, 8, 10],
			[8, 10, 12],
			[10, 12, 14]
		]
	},
	REMEMBER_ME: {
		index: 'REMEMBER_ME',
		name: 'Remember Me',
		description: 'You become obsessed with one Survivor. Each time you hit your Obsession, you increase the opening time of the Exit Gates by 5 seconds up to a maximum of %s seconds. The Obsession is not affected by Remember Me.\nOnly one Obsession per match.',
		flavor: '',
		image: 'images/',
		tiers: [
			[20],
			[25],
			[30]
		]
	},
	BLOOD_WARDEN: {
		index: 'BLOOD_WARDEN',
		name: 'Blood Warden',
		description: 'Once per match, once at least one Exit Gate is opened, hooking a Survivor summons The Entity to block the exits for all Survivors for %s seconds. While Blood Warden is active, Auras of Survivors located within the Exit Gates are revealed to you.',
		flavor: '',
		image: 'images/',
		tiers: [
			[30],
			[40],
			[60]
		]
	}
}

export const SurvivorPerks = {
	BOND: {
		index: 'BOND',
		name: 'Bond',
		description: 'Unlocks potential in one\'s aura reading ability. Allies\' Auras are revealed to you when they are within a %s metres.',
		flavor: 'We have to work as a team, I need you to survive so that I can survive!',
		image: 'images/',
		tiers: [
			[12],
			[24],
			[36]
		]
	},
	PROVE_THYSELF: {
		index: 'PROVE_THYSELF',
		name: 'Prove Thyself',
		description: 'Receive an incremental speed bonus to repair, healing and sabotage actions when other Survivors are within an 8 metre range.\n1 nearby survivor grants %s% increased speed.\n2 nearby survivor grants %s% increased speed.3 nearby survivor grants %s% increased speed.',
		flavor: 'I\'ll show you what I can do!',
		image: 'images/',
		tiers: [
			[1, 2, 3],
			[2, 4, 6],
			[3, 6, 9]
		]
	},
	LEADER: {
		index: 'LEADER',
		name: 'Leader',
		description: 'You\'re able to organize a team to cooperate more efficiently. Increases the other Survivors\' Repair, Healing and Sabotage speed by %s% when they are within an 8 metre range from you.',
		flavor: 'I\'ll show you what I can do!',
		image: 'images/',
		tiers: [
			[3],
			[6],
			[9]
		]
	},
	QUICK_AND_QUIET: {
		index: 'QUICK_AND_QUIET',
		name: 'Quick & Quiet',
		description: 'You do not make as much noise as others when quickly vaulting over obstacles or hiding in Lockers. The vault and hide actions\' noise detection range is reduced by %s%. This effect can only be triggered every %s seconds.',
		image: 'images/',
		tiers: [
			[100, 30],
			[100, 25],
			[100, 20]
		]
	},
	SPRINT_BURST: {
		index: 'SPRINT_BURST',
		name: 'Sprint Burst',
		description: 'When starting to run, break into a sprint at 150% your normal running speed for a maximum of 3 seconds.\nCauses Exhaustion for %s seconds.',
		image: 'images/',
		tiers: [
			[60],
			[50],
			[40]
		]
	},
	ADRENALINE: {
		index: 'ADRENALINE',
		name: 'Adrenaline',
		description: 'You are fuelled by unexpected energy when on the verge of escape. Instantly heal one Health State and sprint at 150% your normal running speed for 5 seconds when the Exit Gates are powered.\nAdrenaline is on hold if you are disabled at the moment it should take effect and will activate when freed.\nAdrenaline will wake you up if you are asleep when it triggers.\nAdrenaline ignores Exhaustion.\nCauses Exhaustion IconStatusEffects exhausted.png for %s seconds.',
		image: 'images/',
		tiers: [
			[60],
			[50],
			[40]
		]
	},
	EMPATHY: {
		index: 'EMPATHY',
		name: 'Empathy',
		description: 'Unlocks potential in one\'s Aura reading ability. Dying or injured allies\' Auras are revealed to you when within %s metres. Empathy does not reveal Auras of allies when they are in the Killer\'s direct contact.',
		image: 'images/',
		tiers: [
			[32],
			[64],
			['∞']
		]
	},
	BOTANY_KNOWLEDGE: {
		index: 'BOTANY_KNOWLEDGE',
		name: 'Botany Knowledge',
		description: 'You transform plants found around The Campfire into tinctures that slow down bleeding. Healing speed is increased by %s% and the efficiency of Med-Kits IconItems firstAidKit.png is increased by %s%.',
		flavor: '"Basic Botany knowledge could save your life someday." — Claudette Morel',
		image: 'images/',
		tiers: [
			[10, 10],
			[15, 15],
			[20, 20]
		]
	},
	SELF_CARE: {
		index: 'SELF_CARE',
		name: 'Self Care',
		description: 'Unlocks the ability to heal yourself without a Med-Kit at 50% the normal healing speed. Increases the efficiency of Med-Kit self-heal by %s%.',
		image: 'images/',
		tiers: [
			[10],
			[15],
			[20]
		]
	},
	IRON_WILL: {
		index: 'IRON_WILL',
		name: 'Iron Will',
		description: 'You\'re able to concentrate and enter a meditative-like state to numb some pain. Grunts of pain caused by injuries are reduced by %s% while staying %s.',
		image: 'images/',
		tiers: [
			[50, 'while staying still'],
			[100, 'while staying still'],
			[100, 'at any time']
		]
	},
	CALM_SPIRIT: {
		index: 'CALM_SPIRIT',
		name: 'Calm Spirit',
		description: 'Animals seem to trust you as they often stay calm in your presence. Reduces chances of alerting Crows by %s%.',
		image: 'images/',
		tiers: [
			[80],
			[90],
			[100]
		]
	},
	SABOTEUR: {
		index: 'SABOTEUR',
		name: 'Saboteur',
		description: 'Unlocks the ability to sabotage without a Toolbox at %s% the normal sabotage speed. Skill Checks triggered in this situation have success zones reduced by %s%. Increases efficiency of Toolbox sabotage by %s%.',
		image: 'images/',
		tiers: [
			[30, 20, 50],
			[40, 10, 75],
			[50, 0, 100]
		]
	},
	BALANCED_LANDING: {
		index: 'BALANCED_LANDING',
		name: 'Balanced Landing',
		description: 'When Balanced Landing is active, stagger effects from long falls are reduced by %s%.\nTier III only: Upon landing, start sprinting at 150% your normal running speed for a maximum of 3 seconds if not exhausted.\nCauses Exhaustion for 40 seconds.',
		flavor: '"I\'ve jumped from higher places." — Nea Karlsson',
		image: 'images/',
		tiers: [
			[50],
			[75],
			[75]
		]
	},
	URBAN_EVASION: {
		index: 'URBAN_EVASION',
		name: 'Urban Evasion',
		description: 'Your movement speed while crouching is increased by %s%.',
		flavor: '"The paint is still fresh but I\'m long gone." — Nea Karlsson',
		image: 'images/',
		tiers: [
			[90],
			[95],
			[100]
		]
	},
	STREETWISE: {
		index: 'STREETWISE',
		name: 'Streetwise',
		description: 'Long nights out taught you to do a lot with what you\'ve got. Reduce consumption rate of charge by %s% for you and allies within an 8 metre range.',
		flavor: '"You\'re doing it wrong! Let me show you how it\'s done." — Nea Karlsson',
		image: 'images/',
		tiers: [
			[10],
			[12],
			[15]
		]
	},
	LEFT_BEHIND: {
		index: 'LEFT_BEHIND',
		name: 'Left Behind',
		description: 'You\'ll get the job done... No matter the cost. If you are the last person remaining in the trial, for each Generator that needs to be repaired, gain a %s% bonus to Repair speed.',
		flavor: '"I\'m not horseshittin\' around. I\'m doing this alone!" — Bill Overbeck',
		image: 'images/',
		tiers: [
			[19],
			[22],
			[25]
		]
	},
	BORROWED_TIME: {
		index: 'BORROWED_TIME',
		name: 'Borrowed Time',
		description: 'You are fuelled with an unexpected energy when saving an ally from a hook within the Killer\'s Terror Radius. Once per match, for 15 seconds after unhooking a Survivor within the Killer\'s Terror Radius, any damage taken that would put you or the unhooked Survivor into the dying state will instead trigger a %s seconds bleed-out timer. Taking any damage during or reaching the end of the bleed-out timer will put you into the Dying State.',
		flavor: '"Probably stings like hell, but it ain\'t gonna kill ya. Up and at \'em soldier. Time to move!" — Bill Overbeck',
		image: 'images/',
		tiers: [
			[15],
			[20],
			[25]
		]
	},
	UNBREAKABLE: {
		index: 'UNBREAKABLE',
		name: 'Unbreakable',
		description: 'Past battles have taught you a thing or two about survival. Grants the ability to fully recover from the dying state once per trial. Increases dying recovery by %s%.',
		flavor: '"Goddammit, I am seriously FUBAR!" — Bill Overbeck',
		image: 'images/',
		tiers: [
			[15],
			[20],
			[25]
		]
	},
	WERE_GONNA_LIVE_FOREVER: {
		index: 'WERE_GONNA_LIVE_FOREVER',
		name: 'We\'re Gonna Live Forever',
		description: 'Your few friends deserve the best protection. Each time you rescue or take a hit to protect a Survivor, gain 25% stackable bonus to all Bloodpoint gains up to a maximum of %s%.\nThe Bonus Bloodpoints are only awarded post-trial.',
		flavor: '"Come on then, let\'s \'ave it! I don\'t give a shit pal." — David King',
		image: 'images/',
		tiers: [
			[50],
			[75],
			[100]
		]
	},
	DEAD_HARD: {
		index: 'DEAD_HARD',
		name: 'Dead Hard',
		description: 'You can take a beating. When injured, tap into your adrenaline bank and dash forward quickly to avoid damage. Press the activate ability button while running to dash forward. During the dash, you avoid damage.\nCauses Exhaustion for %s seconds.',
		flavor: '"We were walkin\' through t\'ginnel one night when a beer bottle flew past me, then another, and another. I thought to myself "Gonna \'ave some fun \'ere lads, let\'s get stuck in!\' ". It were a right dust up, I swear down!" — David King',
		image: 'images/',
		tiers: [
			[60],
			[50],
			[40]
		]
	},
	NO_MITHER: {
		index: 'NO_MITHER',
		name: 'No Mither',
		description: 'Go on kid, it\'s just a scratch. You start the trial injured and won\'t let anyone heal you beyond this state. Your thick blood coagulates practically instantly. You cannot be healed to healthy. You don\'t leave pools of blood. Grunts of pain caused by injuries are reduced by %s% at any time. Grants the ability to fully recover from the dying state.',
		flavor: '"I lost it. Just lamped him one.. They went and banned me didn\'t they.. Went t\'pub afterwards, had a few pints and moved on to the next chapter. I couldn\'t be mithered with it all anyway, you know what I mean? Can\'t be arsed." — David King',
		image: 'images/',
		tiers: [
			[0],
			[25],
			[50]
		]
	},
	SOLE_SURVIVOR: {
		index: 'SOLE_SURVIVOR',
		name: 'Sole Survivor',
		description: 'Each Survivor killed or sacrificed disrupts the Killer\'s Aura IconHelp auras.png reading ability.\n1 killed or sacrificed: Reduces the Killer\'s Aura reading range by %s%\n2 killed or sacrificed: Reduces the Killer\'s Aura reading range by %s%\n3 killed or sacrificed: Reduces the Killer\'s Aura reading range by %s%',
		flavor: '"It was the boogeyman." — Laurie Strode',
		image: 'images/',
		tiers: [
			[40, 40, 40],
			[45, 60, 75],
			[40, 75, 100]
		]
	},
	OBJECT_OF_OBSESSION: {
		index: 'OBJECT_OF_OBSESSION',
		name: 'Object of Obsession',
		description: 'If you are the Killer\'s Obsession and look in the Killer\'s direction, your link will reveal your to each other. This effect applies only if you are outside the Killer\'s Terror Radius, to a maximum range of %s metres. Otherwise, it applies to a maximum range of %s metres.',
		flavor: '"He was watching me!" — Laurie Strode',
		image: 'images/',
		tiers: [
			[56, 44],
			[64, 56],
			[72, 64]
		]
	},
	DECISIVE_STRIKE: {
		index: 'DECISIVE_STRIKE',
		name: 'Decisive Strike',
		description: 'Once per match, when the Killer\'s Obsession, succeed a Skill Check to automatically escape the Killer\'s grasp and stun them for 3/3.5/4 seconds. When not the Killer\'s Obsession, when the wiggle meter is at %s% succeed in a Skill Check to escape the grasp.',
		flavor: '"There\'s nothing to be scared of." — Laurie Strode',
		image: 'images/',
		tiers: [
			[3, 45],
			[3.5, 40],
			[4, 35]
		]
	},
	OPEN_HANDED: {
		index: 'OPEN_HANDED',
		name: 'Open Handed',
		description: 'Strengthens the potential of you and your team\'s Aura reading abilities. Increases Aura reading ranges by %s metres.',
		flavor: '"Paying attention is what kept me alive through the years. That, and my good looks of course." — Ace Visconti',
		image: 'images/',
		tiers: [
			[4],
			[6],
			[8]
		]
	},
	UP_THE_ANTE: {
		index: 'UP_THE_ANTE',
		name: 'Up The Ante',
		description: 'For each other Survivor still alive, grant a %s% bonus to Luck to all remaining Survivors.',
		flavor: '"What can I say? I\'m just a very lucky guy... I\'m sure some of it will rub off on you." — Ace Visconti',
		image: 'images/',
		tiers: [
			[1],
			[2],
			[3]
		]
	},
	ACE_IN_THE_HOLE: {
		index: 'ACE_IN_THE_HOLE',
		name: 'Ace in The Hole',
		description: 'Lady Luck always seems to be throwing something good your way. When retrieving an Item from a Chest, there is a 50% chance that an Add-on of %s rarity or lower will be attached to it.',
		flavor: '"Everything that glitters isn\'t gold. But gold isn\'t worth a damn in this place, so this should come in handy." — Ace Visconti',
		image: 'images/',
		tiers: [
			['Uncommon'],
			['Rare'],
			['Very Rare']
		]
	},
	TECHNICIAN: {
		index: 'TECHNICIAN',
		name: 'Technician',
		description: 'The noises caused by your repairs and their hearing distance are reduced by %s metres. On a failed repair Skill Checks, there is a %s% chance the Generator explosion will be prevented.',
		flavor: '"I\'m gonna stealth this one." — Feng Min',
		image: 'images/',
		tiers: [
			[0, 30],
			[4, 40],
			[8, 50]
		]
	},
	LITHE: {
		index: 'LITHE',
		name: 'Lithe',
		description: 'After performing a vault, break into a sprint at 150% of your normal running speed for a maximum of 3 seconds. Activates in chases only.\nCauses Exhaustion for %s seconds.',
		flavor: '"U mad?" — Feng Min',
		image: 'images/',
		tiers: [
			[60],
			[50],
			[40]
		]
	},
	ALERT: {
		index: 'ALERT',
		name: 'Alert',
		description: 'Your acute senses are on high alert. When the Killer performs the break action within %s metres of range, the Killer\'s Aura is revealed to you for 6 seconds. This effect can only be triggered once every %s seconds.',
		flavor: '"I have true sight." — Feng Min',
		image: 'images/',
		tiers: [
			[12, 60],
			[24, 45],
			[36, 30]
		]
	},
	WAKE_UP: {
		index: 'WAKE_UP',
		name: 'Wake Up!',
		description: 'Unlocks potential in one\'s Aura reading ability. Once all Generators are powered, Exit Gates are revealed to you when within %s metres of range. While opening the Exit Gates, reveal your Aura to other Survivors within %s metres of range.\nWhile Wake Up! is active, you open the Exit Gates %s% faster.',
		image: 'images/',
		tiers: [
			[24, 24, 5],
			[48, 48, 10],
			['∞', '∞', 15]
		]
	},
	PHARMACY: {
		index: 'PHARMACY',
		name: 'Pharmacy',
		description: 'You have a knack for finding medicine. Searches through Chests are %s% faster.\nTier III only: The noises caused by searches along with their hearing distances are reduced by 8 metres.\nPharmacy guarantees an Emergency Med-Kit on your first completed Chest search.',
		image: 'images/',
		tiers: [
			[40],
			[60],
			[80]
		]
	},
	VIGIL: {
		index: 'VIGIL',
		name: 'Vigil',
		description: 'You look over your friends even in dire situations. You and your allies within an 8 metre range recover from Exhausted, Hemorrhage, Mangled, Hindered and Blindness Status Effects %s% faster.',
		image: 'images/',
		tiers: [
			[10],
			[15],
			[20]
		]
	}
}
