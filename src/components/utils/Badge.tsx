export const Badge = ({name, path, size, margin}: {name?: string; path: string; size: string; margin?: string}) => (
	<div className={'badge'} style={{margin}}>
		<img src={path} alt={`${name}-badge`} style={{width: size, height: size}} />
		{name && <span>{name}</span>}
	</div>
)
