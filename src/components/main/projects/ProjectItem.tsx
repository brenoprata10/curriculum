import {useEffect, useState} from 'react'
import {Badge} from '../../utils/Badge'
import {IProjectItemProps} from './Projects'

const GITHUB_API_URL = 'https://api.github.com/repos/brenoprata10'

type TGithubRepositoryData = {
	stargazers_count: number
}

export const ProjectItem = ({
	name,
	description,
	image,
	badges,
	ribbon,
	githubRepositoryName,
	goToCallback,
}: IProjectItemProps) => {
	const [githubStarCount, setGithubStarCount] = useState<number | undefined>()

	useEffect(() => {
		const loadGithubStarCount = async () => {
			const response = await fetch(`${GITHUB_API_URL}/${githubRepositoryName}`)
			const githubRepositoryData = (await response.json()) as TGithubRepositoryData

			setGithubStarCount(githubRepositoryData.stargazers_count)
		}

		loadGithubStarCount()
	}, [githubRepositoryName])

	return (
		<div className={'project-item'}>
			{githubStarCount && (
				<div className='github-overview'>
					<div>
						★ <span>{githubStarCount}</span>
					</div>
				</div>
			)}
			{ribbon && <img src={ribbon} className={'ribbon'} alt={'external-link-ribbon'} onClick={goToCallback} />}
			<div className={'image-data-container'}>
				<img src={image} alt={name} />
				<div className={'description-wrapper'}>
					<b className={'description-wrapper-title'}>{name}</b>
					<span className={'description-wrapper-value'}>{description}</span>
					<b className={'created-with'}>Created with:</b>
					<div className={'badges-list'}>
						{badges.map((badge, index) => (
							<Badge key={`${name}-badge-${index}`} {...badge} size={'4.5em'} margin={'0 1.5em 0 1.5em'} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
