import {PROJECTS} from '../../main/projects/Projects'
import {Text, StyleSheet, View, Link} from '@react-pdf/renderer'
import PDFSection from '../../utils/PDFSection'
import PDFTitle from '../../utils/PDFTitle'
import {PDF_THEME} from '../../../utils/pdf-theme'

const Projects = () => {
	return (
		<PDFSection>
			<PDFTitle>Personal Projects</PDFTitle>
			<View style={styles.listContainer}>
				{PROJECTS.map((project) => (
					<View>
						<Link src={project.url} style={styles.name}>
							{project.name}:
						</Link>
						<Text>{project.description}</Text>
					</View>
				))}
			</View>
		</PDFSection>
	)
}

const styles = StyleSheet.create({
	listContainer: {
		gap: 20,
	},
	name: {
		fontFamily: 'Helvetica-Bold',
		color: PDF_THEME.secondaryColor,
	},
})

export default Projects
