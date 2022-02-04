import {Title} from '../../utils/Title'
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'
import {JourneyLogItem} from './JourneyLogItem'

const IMAGE_PATH = '/companies'

const JOURNEY_LOG = [
	{name: 'ROI Hunter', role: 'Front-end Dev', date: '🚀 Docked - April 2019', image: `${IMAGE_PATH}/rh-logo.png`},
	{name: 'Basis', role: 'Full-Stack Dev', date: 'January 2019 - July 2017', image: `${IMAGE_PATH}/basis-logo.png`},
	{name: 'Indra', role: 'Trainee Dev', date: 'July 2017 - April 2017', image: `${IMAGE_PATH}/indra-logo.png`},
	{name: 'Polisys', role: 'Intern Dev', date: 'April 2017 - March 2016', image: `${IMAGE_PATH}/polisys-logo.png`},
]

export const JourneyLog = () => {
	return (
		<div className={'journey-log'}>
			<Title name={'Journey Log'} icon={faGlobeAmericas} />
			<div className={'content'}>
				<div className={'log-grid'}>
					{JOURNEY_LOG.map((logProps) => (
						<JourneyLogItem {...logProps} />
					))}
				</div>
			</div>
		</div>
	)
}
