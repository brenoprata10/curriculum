import {faMugHot} from '@fortawesome/free-solid-svg-icons'
import {Section} from '../../utils/Section'
import {ProjectItem} from './ProjectItem'

export interface IProjectItemProps {
	id: string
	name: string
	image: string
}

const PROJECTS: IProjectItemProps[] = []

export const Projects = () => (
	<Section wrapperClassName={'projects'} title={'Projects'} icon={faMugHot}>
		<div className={'projects-grid'}>
			{PROJECTS.map((projectProps) => (
				<ProjectItem key={`${projectProps.id}-project-item`} {...projectProps} />
			))}
		</div>
	</Section>
)
