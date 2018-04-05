import { PlayerSelector } from './PlayerSelector';
import { Types } from '../../../data';

export const SurvivorSelector = () => {
    return PlayerSelector({ type: Types.SURVIVOR });
};
