export interface IBadge {
	path: string
	name: string
}

export const QualificationSection = ({title, badges}: {title: string; badges: IBadge[]}) => (
	<div className={'section'}>
		<b>{title}</b>
		<div className={'badges-grid'}>
			{badges.map(({path, name}) => (
				<div key={`${name}-badge`}>
					<span>
						{name} - {path}
					</span>
				</div>
			))}
		</div>
	</div>
)
