import {Text} from '@react-pdf/renderer'
import {IBadge} from '../../main/qualification/QualificationSection'
import PDFSection from '../../utils/PDFSection'
import PDFTitle from '../../utils/PDFTitle'

const Abilities = ({title, badges}: {title: string; badges: IBadge[]}) => (
	<PDFSection>
		<PDFTitle>{title}</PDFTitle>
		{badges.map((badge) => (
			<Text>- {badge.name}</Text>
		))}
	</PDFSection>
)

export default Abilities
