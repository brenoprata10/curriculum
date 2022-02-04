import {Title} from '../../utils/Title'
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'
import {JourneyLogItem} from './JourneyLogItem'
import {CSSProperties} from 'react'

export interface IJourneyLogItemProps {
	id: string
	name: string
	role: string
	date: string
	image: string
	ringConfig?: CSSProperties
}

const IMAGE_PATH = `/images/companies`

const JOURNEY_LOG: IJourneyLogItemProps[] = [
	{
		id: 'roihunter',
		name: 'ROI Hunter',
		role: 'Front-end Dev',
		date: '🚀 Docked - April 2019',
		image: `${IMAGE_PATH}/rh-logo.png`,
	},
	{
		id: 'basis',
		name: 'Basis',
		role: 'Full-Stack Dev',
		date: 'January 2019 - July 2017',
		image: `${IMAGE_PATH}/basis-logo.png`,
		ringConfig: {borderColor: '#da8030'},
	},
	{
		id: 'indra',
		name: 'Indra',
		role: 'Trainee Dev',
		date: 'July 2017 - April 2017',
		image: `${IMAGE_PATH}/indra-logo.png`,
		ringConfig: {borderColor: '#149ec7'},
	},
	{
		id: 'polisys',
		name: 'Polisys',
		role: 'Intern Dev',
		date: 'April 2017 - March 2016',
		image: `${IMAGE_PATH}/polisys-logo.png`,
		ringConfig: {borderColor: '#9e9e9e'},
	},
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
