import {faMugHot} from '@fortawesome/free-solid-svg-icons'
import {Section} from '../../utils/Section'
import {IBadge} from '../qualification/QualificationSection'
import {ProjectItem} from './ProjectItem'
import ANGULAR_BADGE from '../../../public/images/badges/front-end/angular-badge.svg'
import TYPESCRIPT_BADGE from '../../../public/images/badges/front-end/typescript-badge.svg'
import SASS_BADGE from '../../../public/images/badges/front-end/sass-badge.svg'
import BRASIL_IMAGE from '../../../public/images/projects/brasil.svg'

export interface IProjectItemProps {
	id: string
	name: string
	description: string
	badges: IBadge[]
	image: string
	goToCallback: () => void
}

const PROJECTS: IProjectItemProps[] = [
	{
		id: 'ibge-sql',
		name: 'IBGE-SQL',
		description:
			'Developed to help other software developers and companies overall to populate their database with the most recent SQL script with all the states and cities of the country.',
		badges: [
			{path: ANGULAR_BADGE, name: 'Angular'},
			{path: TYPESCRIPT_BADGE, name: 'Typescript'},
			{path: SASS_BADGE, name: 'SASS'},
		],
		image: BRASIL_IMAGE,
		goToCallback: () => window.open('https://ibge-sql.herokuapp.com/', '_newtab'),
	},
]

export const Projects = () => (
	<Section wrapperClassName={'projects'} title={'Projects'} icon={faMugHot}>
		<div className={'projects-grid'}>
			{PROJECTS.map((projectProps) => (
				<ProjectItem key={`${projectProps.id}-project-item`} {...projectProps} />
			))}
		</div>
	</Section>
)
