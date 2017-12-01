import PlayerSelector from './PlayerSelector'
import { Types } from '../data/Enum'

const SurvivorSelector = () => {
	return PlayerSelector({ type: Types.SURVIVOR })
}

export default SurvivorSelector
