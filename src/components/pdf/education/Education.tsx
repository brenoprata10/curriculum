import PDFSection from '../../utils/PDFSection'
import {Text} from '@react-pdf/renderer'
import PDFTitle from '../../utils/PDFTitle'

const Education = () => (
	<PDFSection>
		<PDFTitle>Education</PDFTitle>
		<Text>Bachelor's degree:</Text>
		<Text>Information Systems</Text>
		<Text>Universidade Católica de Brasília</Text>
	</PDFSection>
)

export default Education
