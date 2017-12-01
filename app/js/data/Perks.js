const Perks = {
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

export default Perks
