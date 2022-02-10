import REACT_BADGE from '../public/images/badges/front-end/react-badge.svg'
import FIGMA_BADGE from '../public/images/badges/design/figma.svg'
import ASTRONAUT from '../public/images/astronaut.svg'
import {Badge} from './utils/Badge'

export const Footer = () => (
	<div className={'footer'}>
		<div className={'created-with'}>
			<FooterSection label={'Created with'} badge={REACT_BADGE} />
			<FooterSection label={'Designed on'} badge={FIGMA_BADGE} />
			<img src={ASTRONAUT} className={'astronaut'} alt={'Astronaut'} />
		</div>
	</div>
)

const FooterSection = ({label, badge}: {label: string; badge: string}) => (
	<div className={'section'}>
		<b>{label}</b>
		<Badge path={badge} size={'3em'} />
	</div>
)
