import PlayerSelector from './PlayerSelector'
import { Types } from '../data/Enum'

const KillerSelector = () => {
	return PlayerSelector({ type: Types.KILLER })
}

export default KillerSelector
