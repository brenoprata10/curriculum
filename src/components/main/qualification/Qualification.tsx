import {Section} from '../../utils/Section'
import {faCertificate} from '@fortawesome/free-solid-svg-icons'
import {IBadge, QualificationSection} from './QualificationSection'
import HTML_BADGE from '../../../public/images/badges/front-end/html5-badge.svg'
import CSS_BADGE from '../../../public/images/badges/front-end/css3-badge.svg'
import JAVASCRIPT_BADGE from '../../../public/images/badges/front-end/javascript-badge.svg'
import SASS_BADGE from '../../../public/images/badges/front-end/sass-badge.svg'
import STYLUS_BADGE from '../../../public/images/badges/front-end/stylus-badge.svg'
import REACT_BADGE from '../../../public/images/badges/front-end/react-badge.svg'
import ANGULAR_BADGE from '../../../public/images/badges/front-end/angular-badge.svg'
import TYPESCRIPT_BADGE from '../../../public/images/badges/front-end/typescript-badge.svg'
import SWIFT_BADGE from '../../../public/images/badges/front-end/swift-badge.svg'

enum EQualificationSection {
	FRONT_END = 'Front-end',
	BACK_END = 'Back-end',
	TESTING = 'Testing',
	DESIGN = 'Design',
}

const QUALIFICATION_CONFIG: {
	[section in EQualificationSection]: {badges: IBadge[]}
} = {
	[EQualificationSection.FRONT_END]: {
		badges: [
			{path: HTML_BADGE, name: 'HTML 5'},
			{path: CSS_BADGE, name: 'CSS 3'},
			{path: JAVASCRIPT_BADGE, name: 'Javascript'},
			{path: SASS_BADGE, name: 'SASS'},
			{path: STYLUS_BADGE, name: 'Stylus'},
			{path: SWIFT_BADGE, name: 'Swift'},
			{path: REACT_BADGE, name: 'React'},
			{path: ANGULAR_BADGE, name: 'Angular'},
			{path: TYPESCRIPT_BADGE, name: 'Typescript'},
		],
	},
	[EQualificationSection.BACK_END]: {
		badges: [{path: HTML_BADGE, name: 'Kotlin'}],
	},
	[EQualificationSection.TESTING]: {
		badges: [{path: HTML_BADGE, name: 'Cypress'}],
	},
	[EQualificationSection.DESIGN]: {
		badges: [{path: HTML_BADGE, name: 'Figma'}],
	},
}

export const Qualification = () => (
	<Section wrapperClassName={'qualification'} title={'Constelation badges'} icon={faCertificate}>
		{(Object.keys(QUALIFICATION_CONFIG) as EQualificationSection[]).map((section) => (
			<QualificationSection key={section} title={section} badges={QUALIFICATION_CONFIG[section].badges} />
		))}
	</Section>
)
