import {faMugHot} from '@fortawesome/free-solid-svg-icons'
import {Section} from '../../utils/Section'
import {IBadge} from '../qualification/QualificationSection'
import {ProjectItem} from './ProjectItem'
import ANGULAR_BADGE from '../../../public/images/badges/front-end/angular-badge.svg'
import TYPESCRIPT_BADGE from '../../../public/images/badges/front-end/typescript-badge.svg'
import SASS_BADGE from '../../../public/images/badges/front-end/sass-badge.svg'
import REACT_BADGE from '../../../public/images/badges/front-end/react-badge.svg'
import JAVASCRIPT_BADGE from '../../../public/images/badges/front-end/javascript-badge.svg'
import REDUX_BADGE from '../../../public/images/badges/front-end/redux-badge.svg'
import SWIFT_BADGE from '../../../public/images/badges/front-end/swift-badge.svg'
import NODE_BADGE from '../../../public/images/badges/back-end/nodejs-badge.svg'
import BRASIL_IMAGE from '../../../public/images/projects/brasil.svg'
import TWITTER_IMAGE from '../../../public/images/projects/twitter.svg'
import WISHY_IMAGE from '../../../public/images/projects/wishy.svg'
import SCRIPTABLE_IMAGE from '../../../public/images/projects/scriptable.svg'
import GITHUB_IMAGE from '../../../public/images/projects/github-ribbon.svg'
import EXTERNAL_LINK_IMAGE from '../../../public/images/projects/external-link-ribbon.svg'

export interface IProjectItemProps {
	id: string
	name: string
	description: string
	badges: IBadge[]
	image: string
	ribbon?: string
	goToCallback?: () => void
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
		ribbon: GITHUB_IMAGE,
		goToCallback: () => window.open('https://ibge-sql.herokuapp.com/', '_newtab'),
	},
	{
		id: 'twitter-search-api',
		name: 'Twitter Search API',
		description:
			'Cool small challenge created for my ROI Hunter interview process. This project allows the user to fetch specific twitter posts and displays some analisys out of it.',
		badges: [
			{path: REACT_BADGE, name: 'React'},
			{path: JAVASCRIPT_BADGE, name: 'Javascript'},
			{path: REDUX_BADGE, name: 'Redux'},
		],
		image: TWITTER_IMAGE,
		ribbon: GITHUB_IMAGE,
		goToCallback: () => window.open('https://task-twitter.herokuapp.com/', '_newtab'),
	},
	{
		id: 'wishy',
		name: 'Wishy Game Tracker',
		description:
			'Native IOS app created with Node JS back-end that allowed users to track their game wishlist on Steam, Nintendo America, Nintendo Europe and Playstation.',
		badges: [
			{path: SWIFT_BADGE, name: 'Swift'},
			{path: NODE_BADGE, name: 'Node JS'},
		],
		image: WISHY_IMAGE,
		ribbon: EXTERNAL_LINK_IMAGE,
		goToCallback: () => window.open('https://www.99images.com/apps/ios-shopping/1480028778', '_newtab'),
	},
	{
		id: 'steam-wishlist',
		name: 'Steam Wishlist',
		description:
			'Widget for IOS created with Scriptable app. It displays the user steam wishlist based on the configured ID.',
		badges: [{path: JAVASCRIPT_BADGE, name: 'Javascript'}],
		image: SCRIPTABLE_IMAGE,
		ribbon: EXTERNAL_LINK_IMAGE,
		goToCallback: () => window.open('https://twitter.com/BrenoXDDD/status/1358729670221561856', '_newtab'),
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
