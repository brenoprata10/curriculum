import {IJourneyLogItemProps} from './JourneyLog'
import {isSafariBrowser} from '../../../utils/browser'

export const JourneyLogItem = ({id, name, role, date, image, ringConfig}: IJourneyLogItemProps) => (
	<div className={'planet'}>
		<div className={'planet-image'}>
			<img src={image} />
			<div
				className={`ring ring-${id}`}
				style={{...ringConfig, ...(isSafariBrowser() ? {animationDuration: '40s'} : {})}}
			/>
		</div>
		<span className={'planet-name'}>{name}</span>
		<span className={'planet-role'}>{role}</span>
		<span className={'planet-date'}>{date}</span>
	</div>
)
