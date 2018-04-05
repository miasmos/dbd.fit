import { PlayerSelector } from './PlayerSelector';
import { Types } from '../../../data';

export const KillerSelector = () => {
    return PlayerSelector({ type: Types.KILLER });
};
