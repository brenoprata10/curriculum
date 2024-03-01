import {Page, Document, StyleSheet, View} from '@react-pdf/renderer'
import {PDF_THEME} from '../../utils/pdf-theme'
import Abilities from './abilities/Abilities'
import AboutMe from './about-me/AboutMe'
import Contact from './contact/Contact'
import Education from './education/Education'
import PDFHeader, {PDF_HEADER_HEIGHT} from './PDFHeader'
import WorkExperience from './work-experience/WorkExperience'

const LEFT_CONTAINER_WIDTH = 35
const PAGE_HEIGHT = 841.7

const CurriculumPDF = () => (
	<Document>
		<Page size='A4' style={styles.page}>
			<PDFHeader />
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Contact />
					<Education />
					<Abilities />
				</View>
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
		lineHeight: 1.5,
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
	},
	leftContainer: {
		width: `${LEFT_CONTAINER_WIDTH}%`,
		backgroundColor: PDF_THEME.ternaryColor,
		height: PAGE_HEIGHT - PDF_HEADER_HEIGHT,
	},
	rightContainer: {
		width: `${100 - LEFT_CONTAINER_WIDTH}%`,
	},
})
