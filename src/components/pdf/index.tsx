import {Document, Page, StyleSheet, View} from '@react-pdf/renderer'
import {PDF_THEME} from '../../utils/pdf-theme'
import {EQualificationSection, QUALIFICATION_CONFIG} from '../main/qualification/Qualification'
import Abilities from './abilities/Abilities'
import AboutMe from './about-me/AboutMe'
import Contact from './contact/Contact'
import Education from './education/Education'
import PDFHeader, {PDF_HEADER_HEIGHT} from './PDFHeader'
import Projects from './projects/Projects'
import WorkExperience from './work-experience/WorkExperience'

const LEFT_CONTAINER_WIDTH = 35
const PAGE_HEIGHT = 841.7

const CurriculumPDF = () => (
	<Document
		title='Breno Prata - Curriculum'
		author='Breno Prata'
		creator='Breno Prata'
		subject='Curriculum'
		creationDate={new Date()}
		language='en'
		keywords='Breno Prata, Curriculum, '
	>
		<Page size='A4' style={styles.page}>
			<PDFHeader />
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Contact />
					<Education />
					<Abilities
						title={'Front-end Tech'}
						badges={QUALIFICATION_CONFIG[EQualificationSection.FRONT_END].badges}
						minHeight={341}
					/>
					<Abilities title={'Back-end Tech'} badges={QUALIFICATION_CONFIG[EQualificationSection.BACK_END].badges} />
					<Abilities title={'Testing Tech'} badges={QUALIFICATION_CONFIG[EQualificationSection.TESTING].badges} />
					<Abilities title={'Design Tech'} badges={QUALIFICATION_CONFIG[EQualificationSection.DESIGN].badges} />
				</View>
				<View style={styles.rightContainer}>
					<AboutMe />
					<WorkExperience />
					<Projects />
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
		height: `${PAGE_HEIGHT - PDF_HEADER_HEIGHT + PAGE_HEIGHT}`,
	},
	rightContainer: {
		width: `${100 - LEFT_CONTAINER_WIDTH}%`,
	},
})
