import { Rarities, Types } from '../data';
import { KillerFactory, SurvivorFactory } from '../factories/PlayerFactory';
import {
    KillerPerkFactory,
    SurvivorPerkFactory
} from '../factories/PerkFactory';
import { PowerFactory } from '../factories/PowerFactory';
import { Model } from './Model';

export class Player extends Model {
    constructor({ index, name, power, description, perks, image, id } = {}) {
        super({ index, name, power, description, perks, image, id });
        this.id = id;
        this.index = index;
        this.name = name;
        this.image = image;
        this.description = description;
        this.perks;
        this.power;
        this.type;
    }

    initialize() {
        if (!this.empty) {
            this._setType(this.data.index);
            this._setPerks(this.data.perks);
            this._setPower(this.data.power);
            super.initialize();
        }
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
