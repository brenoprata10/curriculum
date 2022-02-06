import {Section} from '../../utils/Section'
import {faCertificate} from '@fortawesome/free-solid-svg-icons'
import {IBadge, QualificationSection} from './QualificationSection'

enum EQualificationSection {
	FRONT_END = 'Front-end',
	BACK_END = 'Back-end',
	TESTING = 'Testing',
	DESIGN = 'Design',
}

const PUBLIC_BADGES_PATH = `${process.env.PUBLIC_URL}/images/badges`

const QUALIFICATION_CONFIG: {
	[section in EQualificationSection]: {rootPath: string; badges: IBadge[]}
} = {
	[EQualificationSection.FRONT_END]: {
		rootPath: `${PUBLIC_BADGES_PATH}/front-end`,
		badges: [{path: 'html5-badge', name: 'HTML 5'}],
	},
	[EQualificationSection.BACK_END]: {
		rootPath: `${PUBLIC_BADGES_PATH}/back-end`,
		badges: [{path: 'kotlin-badge', name: 'Kotlin'}],
	},
	[EQualificationSection.TESTING]: {
		rootPath: `${PUBLIC_BADGES_PATH}/testing`,
		badges: [{path: 'cypress-badge', name: 'Cypress'}],
	},
	[EQualificationSection.DESIGN]: {
		rootPath: `${PUBLIC_BADGES_PATH}/design`,
		badges: [{path: 'figma-badge', name: 'Figma'}],
	},
}

export const Qualification = () => (
	<Section wrapperClassName={'qualification'} title={'Constelation badges'} icon={faCertificate}>
		{(Object.keys(QUALIFICATION_CONFIG) as EQualificationSection[]).map((section) => {
			const qualificationSection = QUALIFICATION_CONFIG[section]
			return (
				<QualificationSection
					key={section}
					title={section}
					badges={qualificationSection.badges.map((badge) => ({
						...badge,
						path: `${qualificationSection.rootPath}/${badge.path} `,
					}))}
				/>
			)
		})}
	</Section>
)
