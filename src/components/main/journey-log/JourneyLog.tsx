import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'
import {JourneyLogItem} from './JourneyLogItem'
import {CSSProperties} from 'react'
import RH_LOGO from '../../../public/images/companies/rh-logo.png'
import BASIS_LOGO from '../../../public/images/companies/basis-logo.png'
import INDRA_LOGO from '../../../public/images/companies/indra-logo.png'
import POLISYS_LOGO from '../../../public/images/companies/polisys-logo.png'
import {Section} from '../../utils/Section'

export interface IJourneyLogItemProps {
	id: string
	name: string
	role: string
	date: string
	image: string
	ringConfig?: CSSProperties
}

const JOURNEY_LOG: IJourneyLogItemProps[] = [
	{
		id: 'roihunter',
		name: 'ROI Hunter',
		role: 'Front-end Dev',
		date: '🚀 Docked - April 2019',
		image: RH_LOGO,
	},
	{
		id: 'basis',
		name: 'Basis',
		role: 'Full-Stack Dev',
		date: 'January 2019 - July 2017',
		image: BASIS_LOGO,
		ringConfig: {borderColor: '#da8030'},
	},
	{
		id: 'indra',
		name: 'Indra',
		role: 'Trainee Dev',
		date: 'July 2017 - April 2017',
		image: INDRA_LOGO,
		ringConfig: {borderColor: '#149ec7'},
	},
	{
		id: 'polisys',
		name: 'Polisys',
		role: 'Intern Dev',
		date: 'April 2017 - March 2016',
		image: POLISYS_LOGO,
		ringConfig: {borderColor: '#9e9e9e'},
	},
]

export const JourneyLog = () => {
	return (
		<Section wrapperClassName={'journey-log'} title={'Journey Log'} icon={faGlobeAmericas}>
			<div className={'log-grid'}>
				{JOURNEY_LOG.map((logProps) => (
					<JourneyLogItem key={`${logProps.id}-log-item`} {...logProps} />
				))}
			</div>
		</Section>
	)
}
