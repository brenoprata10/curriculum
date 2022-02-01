import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconProp} from '@fortawesome/fontawesome-svg-core'

export const Title = ({name, icon}: {name: string; icon: IconProp}) => (
	<div className={'title'}>
		<FontAwesomeIcon size={'lg'} icon={icon} />
		<span>{name}</span>
	</div>
)
