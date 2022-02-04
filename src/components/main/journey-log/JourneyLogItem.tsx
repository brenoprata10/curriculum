import {IJourneyLogItemProps} from './JourneyLog'

export const JourneyLogItem = ({id, name, role, date, image, ringConfig}: IJourneyLogItemProps) => (
	<div className={'planet'}>
		<img src={image} />
		<span className={'planet-name'}>{name}</span>
		<span className={'planet-role'}>{role}</span>
		<span className={'planet-date'}>{date}</span>
		<div className={`ring ring-${id}`} style={ringConfig} />
	</div>
)
