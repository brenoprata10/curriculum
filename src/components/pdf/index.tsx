import {Page, Document, StyleSheet} from '@react-pdf/renderer'
import AboutMe from './about-me/AboutMe'
import WorkExperience from './work-experience/WorkExperience'

const styles = StyleSheet.create({
	page: {
		fontFamily: 'Helvetica',
		fontSize: 13,
		justifyContent: 'flex-start',
	},
})

const CurriculumPDF = () => (
	<Document>
		<Page size='A4' style={styles.page}>
			<AboutMe />
			<WorkExperience />
		</Page>
	</Document>
)

export default CurriculumPDF
