import {Text, StyleSheet, View} from '@react-pdf/renderer'
import PDFSection from '../../utils/PDFSection'
import PDFTitle from '../../utils/PDFTitle'

const WorkExperience = () => (
	<PDFSection>
		<PDFTitle>Work Experience</PDFTitle>
		<Text>
			Software developer, following a path towards professional success, studious, dedicated and very demanding with
			myself. I love studying new technologies and I will always accept a good challenge!
		</Text>
	</PDFSection>
)

const styles = StyleSheet.create({})

export default WorkExperience
