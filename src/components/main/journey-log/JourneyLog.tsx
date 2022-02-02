import {Title} from '../../utils/Title'
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'

export const JourneyLog = () => {
	return (
		<div className={'journey-log'}>
			<Title name={'Journey Log'} icon={faGlobeAmericas} />
			<div className={'content'}>
				<span>oi</span>
			</div>
		</div>
	)
}
