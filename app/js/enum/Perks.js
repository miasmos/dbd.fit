export const Perks = {
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
        description: 'Unlocks potential in one\'s Aura reading ability. The Auras IconHelp auras.png of Survivors who are healing or being healed are revealed to you when they are within %s metres of range.',
        flavor: 'Still attached to the fragments of her past life, she is drawn to those in need of help.',
        image: 'images/Perk_ANursesCalling',
        tiers: [
            [20],
            [24],
            [28]
        ]
    }
}