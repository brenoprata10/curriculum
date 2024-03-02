import {Text, View} from '@react-pdf/renderer'
import {IBadge} from '../../main/qualification/QualificationSection'
import PDFSection from '../../utils/PDFSection'
import PDFTitle from '../../utils/PDFTitle'

const Abilities = ({title, badges, minHeight}: {title: string; badges: IBadge[]; minHeight?: number}) => (
	<View style={{minHeight}}>
		<PDFSection>
			<PDFTitle>{title}</PDFTitle>
			{badges.map((badge) => (
				<Text>- {badge.name}</Text>
			))}
		</PDFSection>
	</View>
)

export default Abilities
