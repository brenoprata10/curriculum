import {Text} from '@react-pdf/renderer'
import {EQualificationSection, QUALIFICATION_CONFIG} from '../../main/qualification/Qualification'
import PDFSection from '../../utils/PDFSection'
import PDFTitle from '../../utils/PDFTitle'

const Abilities = () => (
	<PDFSection>
		<PDFTitle>Tech</PDFTitle>
		{QUALIFICATION_CONFIG[EQualificationSection.FRONT_END].badges.map((badge) => (
			<Text>- {badge.name}</Text>
		))}
	</PDFSection>
)

export default Abilities
