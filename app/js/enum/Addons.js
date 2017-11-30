const Addons = {
    WOODEN_HORSE: {
        index: 'WOODEN_HORSE',
        name: 'Wooden Horse',
        rarity: 'COMMON',
        killer: 'NURSE',
        description: 'An unpainted toy carved out of cheap wood to resemble a horse. Once the symbol of a deep connection between a catatonic patient and her Nurse.\nSlightly decreases the accuracy of the Blink.\nSlightly increases the maximum range of the Blink.',
        image: 'images/Addon_WoodenHorse.png',
        effects: [
            {
                type: 'ACCURACY',
                amount: 'SLIGHTLY',
                positive: false
            },
            {
                type: 'RANGE',
                amount: 'SLIGHTLY',
                positive: true
            }
        ]
    },
    WHITE_NIT_COMB: {
        index: 'WHITE_NIT_COMB',
        name: 'White Nit Comb',
        rarity: 'COMMON',
        killer: 'NURSE',
        description: 'A parasitic nit comb taken from the clinic. Once the symbol of a deep connection between an anxious patient and her Nurse.\nSlightly increases the Blink movement speed.',
        image: 'images/Addon_WhiteNitComb.png',
        effects: [
            {
                type: 'MOVEMENT_SPEED',
                amount: 'SLIGHTLY',
                positive: true
            }
        ]
    },
    TORN_BOOKMARK: {
        index: 'TORN_BOOKMARK',
        name: 'Torn Bookmark',
        rarity: 'COMMON',
        killer: 'NURSE',
        description: 'A white and pristine piece of ribbon once attached to a sacred book. Once the symbol of a dispute.\nAdds 1 additional chain Blink.\nSlightly decreases the maximum range of the Blink.\nSlightly reduces the chain Blink window.',
        image: 'images/Addon_TornBookmark.png',
        effects: [
            {
                type: 'BLINK_COUNT',
                amount: 1,
                positive: true
            },
            {
                type: 'RANGE',
                amount: 'SLIGHTLY',
                positive: false
            },
            {
                type: 'CHAIN_WINDOW',
                amount: 'SLIGHTLY',
                positive: false
            }
        ]
    },
    METAL_SPOON: {
        index: 'METAL_SPOON',
        name: 'Metal Spoon',
        rarity: 'COMMON',
        killer: 'NURSE',
        description: 'A dull, partially rusted and stained metallic spoon. Confiscated from Room 202\'s patient, the "Bad Man".\nSlightly increases the charge speed of the Blink.',
        image: 'images/Addon_MetalSpoon.png',
        effects: [
            {
                type: 'CHARGE_SPEED',
                amount: 'SLIGHTLY',
                positive: true
            }
        ]
    },
    MATCHBOX: {
        index: 'MATCHBOX',
        name: 'Matchbox',
        rarity: 'COMMON',
        killer: 'NURSE',
        description: 'A matchbox containing an odd collection of mismatched buttons.\nSlightly increases the chain Blink window.',
        image: 'images/Addon_Matchbox.png',
        effects: [
            {
                type: 'CHAIN_WINDOW',
                amount: 'SLIGHTLY',
                positive: true
            }
        ]
    },
    BAD_MAN_KEEPSAKE: {
        index: 'BAD_MAN_KEEPSAKE',
        name: 'Bad Man Keepsake',
        rarity: 'COMMON',
        killer: 'NURSE',
        description: 'A rotten molar ripped from the "Bad Man\'s" cold dead hand.\n Moderately increases the charge speed of the Blink.',
        image: 'images/Addon_BadManKeepsake.png',
        effects: [
            {
                type: 'CHARGE_SPEED',
                amount: 'MODERATELY',
                positive: true
            }
        ]
    },
    POCKET_WATCH: {
        index: 'POCKET_WATCH',
        name: 'Pocket Watch',
        rarity: 'UNCOMMON',
        killer: 'NURSE',
        description: 'A charred and broken pocket watch with rattling pieces. Taken from Nurse Moris\' body.\nSlightly decreases the charge speed of the Blink.\nModerately reduces the fatigue time of the Blink.',
        image: 'images/Addon_PocketWatch.png',
        effects: [
            {
                type: 'CHARGE_SPEED',
                amount: 'SLIGHTLY',
                positive: false
            },
            {
                type: 'FATIGUE_TIME',
                amount: 'MODERATELY',
                positive: true
            }
        ]
    },
    DULL_BRACELET: {
        index: 'DULL_BRACELET',
        name: 'Dull Bracelet',
        rarity: 'UNCOMMON',
        killer: 'NURSE',
        description: 'A worthless piece of jewelry that might have an important significance to someone. Taken from the Anxious Girl\'s body.\nModerately increases the Blink movement speed.\nSlightly decreases Blink charge speed.',
        image: 'images/Addon_DullBracelet.png',
        effects: [
            {
                type: 'MOVEMENT_SPEED',
                amount: 'MODERATELY',
                positive: true
            },
            {
                type: 'CHARGE_SPEED',
                amount: 'SLIGHTLY',
                positive: false
            }
        ]
    },
    DARK_CINCTURE: {
        index: 'DARK_CINCTURE',
        name: 'Dark Cincture',
        rarity: 'UNCOMMON',
        killer: 'NURSE',
        description: 'A black rope used as a belt in times of mourning. Taken from Father Campbell\'s body.\nAdds 1 additional chain Blink.\nSlightly reduces the maximum range of the Blink.',
        image: 'images/Addon_DarkCincture.png',
        effects: [
            {
                type: 'BLINK_COUNT',
                amount: 1,
                positive: true
            },
            {
                type: 'RANGE',
                amount: 'SLIGHTLY',
                positive: false
            }
        ]
    },
    CATATONIC_BOYS_TREASURE: {
        index: 'CATATONIC_BOYS_TREASURE',
        name: 'Catatonic Boy\'s Treasure',
        rarity: 'UNCOMMON',
        killer: 'NURSE',
        description: 'A pine-cone which unexpectedly calmed a patient\'s repetitive movement. Taken from the Catatonic Boy\'s body.\nModerately increases the maximum range of the Blink.\nModerately decreases the accuracy of the Blink.',
        image: 'images/Addon_CatatonicBoysTreasure.png',
        effects: [
            {
                type: 'RANGE',
                amount: 'MODERATELY',
                positive: true
            },
            {
                type: 'ACCURACY',
                amount: 'MODERATELY',
                positive: false
            }
        ]
    },
    SPASMODIC_BREATH: {
        index: 'SPASMODIC_BREATH',
        name: 'Spasmodic Breath',
        rarity: 'RARE',
        killer: 'NURSE',
        description: 'The twitchy and tremulous breath stolen from the "Bad Man". Aggressively pulses and jumps at The Nurse\'s touch.\nConsiderably increases the charge speed of the Blink.\nSlightly increases the fatigue time of the Blink.',
        image: 'images/Addon_SpasmodicBreath.png',
        effects: [
            {
                type: 'CHARGE_SPEED',
                amount: 'CONSIDERABLY',
                positive: true
            },
            {
                type: 'FATIGUE_TIME',
                amount: 'SLIGHTLY',
                positive: false
            }
        ]
    },
    HEAVY_PANTING: {
        index: 'HEAVY_PANTING',
        name: 'Heavy Panting',
        rarity: 'RARE',
        killer: 'NURSE',
        description: 'The slow and bulging breath stolen from the fat Orderly. Dimly oscillates at The Nurse\'s touch.\nModerately increases the chain Blink window.\nModerately increases fatigue duration.',
        image: 'images/Addon_HeavyPanting.png',
        effects: [
            {
                type: 'CHAIN_WINDOW',
                amount: 'MODERATELY',
                positive: true
            },
            {
                type: 'FATIGUE_TIME',
                amount: 'MODERATELY',
                positive: false
            }
        ]
    },
    FRAGILE_WHEEZE: {
        index: 'FRAGILE_WHEEZE',
        name: 'Fragile Wheeze',
        rarity: 'RARE',
        killer: 'NURSE',
        description: 'The whistling and rattling breath stolen from Father Campbell. Silently curves and bends at The Nurse\'s touch.\nAdds 1 additional chain Blink.',
        image: 'images/Addon_FragileWheeze.png',
        effects: [
            {
                type: 'BLINK_COUNT',
                amount: 1,
                positive: true
            }
        ]
    },
    ATAXIC_RESPIRATION: {
        index: 'ATAXIC_RESPIRATION',
        name: 'Ataxic Respiration',
        rarity: 'RARE',
        killer: 'NURSE',
        description: 'The irregular and deteriorating breath collected from the Catatonic Boy. Normally stable and calm, becomes incredibly agitated at The Nurse\'s touch.\nConsiderably increases the maximum range of the Blink.\nConsiderably decreases the accuracy of the Blink.',
        image: 'images/Addon_AtaxicRespiration.png',
        effects: [
            {
                type: 'RANGE',
                amount: 'CONSIDERABLY',
                positive: true
            },
            {
                type: 'ACCURACY',
                amount: 'CONSIDERABLY',
                positive: false
            }
        ]
    },
    ANXIOUS_GASP: {
        index: 'ANXIOUS_GASP',
        name: 'Anxious Gasp',
        rarity: 'RARE',
        killer: 'NURSE',
        description: 'The gasp of surprise collected from an Anxious Girl which the Nurse was fond of. Twitches vigorously at The Nurse\'s touch.\nConsiderably increases the Blink movement speed.\nModerately decreases Blink charge speed.',
        image: 'images/Addon_AnxiousGasp.png',
        effects: [
            {
                type: 'MOVEMENT_SPEED',
                amount: 'CONSIDERABLY',
                positive: true
            },
            {
                type: 'CHARGE_SPEED',
                amount: 'MODERATELY',
                positive: false
            }
        ]
    },
    PLAID_FLANNEL: {
        index: 'PLAID_FLANNEL',
        name: 'Plaid Flannel',
        rarity: 'VERY_RARE',
        killer: 'NURSE',
        description: 'A torn piece of red and black plaid flannel. The scrap of fabric imbues The Nurse with devastating focus.\nAllows you to see the landing area of the Blink.',
        image: 'images/Addon_PlaidFlannel.png',
        effects: [
            {
                type: 'LANDING_AREA',
                positive: true
            }
        ]
    },
    KAVANAGHS_LAST_BREATH: {
        index: 'KAVANAGHS_LAST_BREATH',
        name: 'Kavanagh\'s Last Breath',
        rarity: 'VERY_RARE',
        killer: 'NURSE',
        description: 'A powerful last breath snatched from Crotus Prenn Asylum Orderly Harvey Kavanagh. In the hands of The Nurse, it wobbles with intensity.\nModerately increases the chain Blink window.\nSlightly increases fatigue duration.\nRemoves 1 chain Blink.',
        image: 'images/Addon_KavanaghsLastBreath.png',
        effects: [
            {
                type: 'CHAIN_WINDOW',
                amount: 'MODERATELY',
                positive: true
            },
            {
                type: 'FATIGUE_TIME',
                amount: 'SLIGHTLY',
                positive: false
            },
            {
                type: 'CHAIN_COUNT',
                amount: 1,
                positive: false
            }
        ]
    },
    JENNERS_LAST_BREATH: {
        index: 'JENNERS_LAST_BREATH',
        name: 'Jenner\'s Last Breath',
        rarity: 'VERY_RARE',
        killer: 'NURSE',
        description: 'A powerful last breath snatched from Crotus Prenn Asylum patient Mary Jenner. In the hands of The Nurse, it trembles with intensity.\nTremendously increases the Blink movement speed.\nModerately decreases Blink charge speed.\nRemoves 1 chain Blink.',
        image: 'images/Addon_JennersLastBreath.png',
        effects: [
            {
                type: 'MOVEMENT_SPEED',
                amount: 'TREMENDOUSLY',
                positive: true
            },
            {
                type: 'CHARGE_SPEED',
                amount: 'MODERATELY',
                positive: false
            },
            {
                type: 'CHAIN_COUNT',
                amount: 1,
                positive: false
            }
        ]
    },
    CAMPBELLS_LAST_BREATH: {
        index: 'CAMPBELLS_LAST_BREATH',
        name: 'Campbell\'s Last Breath',
        rarity: 'VERY_RARE',
        killer: 'NURSE',
        description: 'A powerful last breath snatched from Crotus Prenn Asylum priest Father Campbell. In the hand of The Nurse, it crackles with intensity.\nAdds 2 additional chain Blinks.\nSlightly reduces the maximum range of the Blink.',
        image: 'images/Addon_CampbellsLastBreath.png',
        effects: [
            {
                type: 'RANGE',
                amount: 'SLIGHTLY',
                positive: false
            },
            {
                type: 'CHAIN_COUNT',
                amount: 2,
                positive: true
            }
        ]
    },
    BAD_MANS_LAST_BREATH: {
        index: 'BAD_MANS_LAST_BREATH',
        name: '"Bad Man\'s" Last Breath',
        rarity: 'VERY_RARE',
        killer: 'NURSE',
        description: 'A powerful last breath snatched from Crotus Prenn Asylum patient the "Bad Man". In the hands of The Nurse, it jolts with intensity.\nTremendously increases the charge speed of the Blink.\nSlightly increases the fatigue time of the Blink.\nRemoves 1 chain Blink.',
        image: 'images/Addon_BadMansLastBreath.png',
        effects: [
            {
                type: 'CHARGE_SPEED',
                amount: 'TREMENDOUSLY',
                positive: true
            },
            {
                type: 'FATIGUE_TIME',
                amount: 'SLIGHTLY',
                positive: false
            },
            {
                type: 'CHAIN_COUNT',
                amount: 1,
                positive: false
            }
        ]
    },
}