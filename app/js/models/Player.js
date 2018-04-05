import { Rarities, Types } from '../data';
import {
    KillerFactory,
    SurvivorFactory,
    KillerPerkFactory,
    SurvivorPerkFactory,
    PowerFactory
} from '../factories';
import { Model } from './Model';

export class Player extends Model {
    constructor({ index, name, power, description, perks, image }) {
        super({ index, name, power, description, perks, image });
        this.index = index;
        this.name = name;
        this.image = `images/portrait/${image}.png`;
        this.description = description;
    }

    initialize() {
        this._setType(this.data.index);
        this._setPerks(this.data.perks);
        this._setPower(this.data.power);
        super.initialize();
    }

    _setType(index) {
        const isKiller = KillerFactory.exists(index);
        this.type = isKiller ? Types.KILLER : Types.SURVIVOR;
    }

    _setPerks(perks) {
        this.perks = perks.map(
            (value, index) =>
                this.type === Types.KILLER
                    ? KillerPerkFactory.get(value)
                    : SurvivorPerkFactory.get(value)
        );
    }

    _setPower(power) {
        this.power =
            this.type === Types.KILLER ? PowerFactory.get(power) : undefined;
    }
}
