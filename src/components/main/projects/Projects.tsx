import {faMugHot} from '@fortawesome/free-solid-svg-icons'
import {Section} from '../../utils/Section'
import {IBadge} from '../qualification/QualificationSection'
import {ProjectItem} from './ProjectItem'
import ANGULAR_BADGE from '../../../public/images/badges/front-end/angular-badge.svg'
import TYPESCRIPT_BADGE from '../../../public/images/badges/front-end/typescript-badge.svg'
import SASS_BADGE from '../../../public/images/badges/front-end/sass-badge.svg'
import REACT_BADGE from '../../../public/images/badges/front-end/react-badge.svg'
import NEXT_JS_BADGE from '../../../public/images/badges/front-end/next-js-badge.svg'
import ELECTRON_BADGE from '../../../public/images/badges/front-end/electron-badge.svg'
import JAVASCRIPT_BADGE from '../../../public/images/badges/front-end/javascript-badge.svg'
import REDUX_BADGE from '../../../public/images/badges/front-end/redux-badge.svg'
import NODE_BADGE from '../../../public/images/badges/back-end/nodejs-badge.svg'
import LUA_BADGE from '../../../public/images/badges/back-end/lua-badge.svg'
import BRASIL_IMAGE from '../../../public/images/projects/brasil.svg'
import TWITTER_IMAGE from '../../../public/images/projects/twitter.svg'
import WISHY_IMAGE from '../../../public/images/projects/wishy.svg'
import SCRIPTABLE_IMAGE from '../../../public/images/projects/scriptable.svg'
import GITHUB_IMAGE from '../../../public/images/projects/github-ribbon.svg'
import EXTERNAL_LINK_IMAGE from '../../../public/images/projects/external-link-ribbon.svg'
import NEOVIM_LOGO from '../../../public/images/projects/neovim-logo.svg'
import STEAM_DECK from '../../../public/images/projects/steam-deck.svg'
import VERCEL from '../../../public/images/projects/vercel.svg'

export interface IProjectItemProps {
	id: string
	name: string
	description: string
	badges: IBadge[]
	image: string
	githubRepositoryName?: string
	ribbon?: string
	url?: string
}

export const PROJECTS: IProjectItemProps[] = [
	{
		id: 'nvim-highlight-colors',
		name: 'Nvim Highlight Colors Plugin',
		githubRepositoryName: 'nvim-highlight-colors',
		description: 'Neovim plugin that displays colors on the editor based on their HEX/rgb/rgba value.',
		badges: [{path: LUA_BADGE, name: 'Lua'}],
		image: NEOVIM_LOGO,
		ribbon: GITHUB_IMAGE,
		url: 'https://github.com/brenoprata10/nvim-highlight-colors',
	},
	{
		id: 'steam-deck-romate',
		name: 'Steam Deck Romate',
		githubRepositoryName: 'steam-deck-romate',
		description:
			'A beautiful Steam ROM manager built from the ground up to work perfectly with Windows, Linux and primarily Steam Deck devices.',
		badges: [
			{path: REACT_BADGE, name: 'React'},
			{path: ELECTRON_BADGE, name: 'Electron'},
			{path: NODE_BADGE, name: 'Node JS'},
		],
		image: STEAM_DECK,
		ribbon: GITHUB_IMAGE,
		url: 'https://github.com/brenoprata10/steam-deck-romate',
	},
	{
		id: 'ibge-sql',
		name: 'IBGE-SQL',
		githubRepositoryName: 'ibge-sql',
		description:
			'Developed to help other software developers and companies overall to populate their database with the most recent SQL script with all the states and cities of the country.',
		badges: [
			{path: ANGULAR_BADGE, name: 'Angular'},
			{path: TYPESCRIPT_BADGE, name: 'Typescript'},
			{path: SASS_BADGE, name: 'SASS'},
		],
		image: BRASIL_IMAGE,
		ribbon: GITHUB_IMAGE,
		url: 'https://github.com/brenoprata10/ibge-sql',
	},
	{
		id: 'adlass',
		name: 'ADLASS Blog',
		description: 'Video Game news and reviews. Personal Blog built from scratch with NextJS.',
		badges: [
			{path: NEXT_JS_BADGE, name: 'NEXT.js'},
			{path: REACT_BADGE, name: 'React'},
			{path: TYPESCRIPT_BADGE, name: 'Typescript'},
		],
		image: VERCEL,
		ribbon: EXTERNAL_LINK_IMAGE,
		url: 'https://adlass.vercel.app',
	},
	{
		id: 'steam-wishlist',
		name: 'Steam Wishlist',
		description:
			'Widget for IOS created with Scriptable app. It displays the user steam wishlist based on the configured ID.',
		badges: [{path: JAVASCRIPT_BADGE, name: 'Javascript'}],
		image: SCRIPTABLE_IMAGE,
		ribbon: EXTERNAL_LINK_IMAGE,
		url: 'https://twitter.com/BrenoXDDD/status/1358729670221561856',
	},
	{
		id: 'twitter-search-api',
		name: 'Twitter Search API',
		githubRepositoryName: 'roi-task',
		description:
			'Cool small challenge created for my ROI Hunter interview process. This project allows the user to fetch specific twitter posts and displays some analisys out of it.',
		badges: [
			{path: REACT_BADGE, name: 'React'},
			{path: JAVASCRIPT_BADGE, name: 'Javascript'},
			{path: REDUX_BADGE, name: 'Redux'},
		],
		image: TWITTER_IMAGE,
		ribbon: GITHUB_IMAGE,
		url: 'https://github.com/brenoprata10/roi-task',
	},
	{
		id: 'well-played',
		name: 'WP: Track Game Deals',
		description:
			'React Native app that allow users to track their game wishlist on Steam, Nintendo America, Nintendo Europe.',
		badges: [
			{path: REACT_BADGE, name: 'React Native'},
			{path: NODE_BADGE, name: 'Node JS'},
		],
		image: WISHY_IMAGE,
		ribbon: EXTERNAL_LINK_IMAGE,
		url: 'https://play.google.com/store/apps/details?id=com.brenoprata.GameQuest',
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
