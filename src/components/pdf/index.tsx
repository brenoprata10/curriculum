import {Page, Document, StyleSheet, View} from '@react-pdf/renderer'
import AboutMe from './about-me/AboutMe'
import PDFHeader from './PDFHeader'
import WorkExperience from './work-experience/WorkExperience'

const CurriculumPDF = () => (
	<Document>
		<Page size='A4' style={styles.page}>
			<PDFHeader />
			<View style={styles.container}>
				<View style={styles.leftContainer}></View>
				<View style={styles.rightContainer}>
					<AboutMe />
					<WorkExperience />
				</View>
			</View>
		</Page>
	</Document>
)

export default CurriculumPDF

const styles = StyleSheet.create({
	page: {
		fontFamily: 'Helvetica',
		fontSize: 13,
		justifyContent: 'flex-start',
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
	},
	leftContainer: {
		width: '35%',
	},
	rightContainer: {
		width: '65%',
	},
})
