import { Rarities, Types, ModifierTypes, ItemTypes } from '../data';
import { i18n } from '../i18n';
import { Item } from '../models/Item';

export class EnumToString {
    static plural(value) {
        switch (value) {
            case i18n.text.killer:
                return i18n.text.killers;
            case i18n.text.survivor:
                return i18n.text.survivors;
            case i18n.text.offering:
                return i18n.text.offerings;
            case i18n.text.addon:
                return i18n.text.addons;
            case i18n.text.perk:
                return i18n.text.perks;
            case i18n.text.item:
                return i18n.text.items;
            default:
                return '';
        }
    }

    static rarity(value) {
        switch (value) {
            case Rarities.COMMON:
                return i18n.text.common;
            case Rarities.UNCOMMON:
                return i18n.text.uncommon;
            case Rarities.RARE:
                return i18n.text.rare;
            case Rarities.VERY_RARE:
                return i18n.text.veryRare;
            case Rarities.ULTRA_RARE:
                return i18n.text.ultraRare;
            default:
                return '';
        }
    }

    static type(value) {
        switch (value) {
            case Types.KILLER:
                return i18n.text.killer;
            case Types.SURVIVOR:
                return i18n.text.survivor;
            default:
                return '';
        }
    }

    static modifierType(value) {
        switch (value) {
            case ModifierTypes.POWER:
                return i18n.text.power;
            case ModifierTypes.ADDON:
                return i18n.text.addon;
            case ModifierTypes.ITEM:
                return i18n.text.item;
            case ModifierTypes.OFFERING:
                return i18n.text.offering;
            case ModifierTypes.PERK:
                return i18n.text.perk;
            default:
                return '';
        }
    }

    static itemType(value) {
        switch (value) {
            case ItemTypes.EMPTY:
                return i18n.text.empty;
            case ItemTypes.AID_KIT:
                return i18n.text.aidKit;
            case ItemTypes.FLASHLIGHT:
                return i18n.text.flashlight;
            case ItemTypes.KEY:
                return i18n.text.key;
            case ItemTypes.MAP:
                return i18n.text.map;
            case ItemTypes.TOOLBOX:
                return i18n.text.tools;
            default:
                return '';
        }
    }
}
