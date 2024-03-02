import {Document, Page, StyleSheet, View, Image, Link} from '@react-pdf/renderer'
import {PDF_THEME} from '../../utils/pdf-theme'
import {EQualificationSection, QUALIFICATION_CONFIG} from '../main/qualification/Qualification'
import Abilities from './abilities/Abilities'
import AboutMe from './about-me/AboutMe'
import Contact from './contact/Contact'
import Education from './education/Education'
import PDFHeader, {PDF_HEADER_HEIGHT} from './PDFHeader'
import Projects from './projects/Projects'
import WorkExperience from './work-experience/WorkExperience'
import QR_CODE from '../../public/images/curricullum-qr-code.png'
import PDFTitle from '../utils/PDFTitle'
import PDFSection from '../utils/PDFSection'

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
					<View>
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
					<PDFSection>
						<PDFTitle>Online CV</PDFTitle>
						<View style={styles.qrCodeContainer}>
							<Image src={QR_CODE} style={styles.qrCode} />
							<Link src={'https://brenoprata10.github.io/curriculum'} style={styles.curriculumLink}>
								Curriculum Link
							</Link>
						</View>
					</PDFSection>
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
		justifyContent: 'space-between',
	},
	rightContainer: {
		width: `${100 - LEFT_CONTAINER_WIDTH}%`,
	},
	qrCodeContainer: {
		marginBottom: 40,
		gap: 5,
	},
	qrCode: {
		width: 120,
		height: 120,
	},
	curriculumLink: {
		marginLeft: 15,
	},
})
