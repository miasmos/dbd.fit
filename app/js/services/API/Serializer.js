export class Serializer {
    static build({ addons, offering, perks, power, player, title }) {
        return {
            addons: [addons[0].index, addons[1].index],
            perks: [
                perks[0].index,
                perks[1].index,
                perks[2].index,
                perks[3].index
            ],
            tiers: [perks[0].tier, perks[1].tier, perks[2].tier, perks[3].tier],
            power: power.index,
            player: player.index,
            name: title,
            type: player.type,
            offering: offering.index
        };
    }
}
