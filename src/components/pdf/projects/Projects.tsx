import {PROJECTS} from '../../main/projects/Projects'
import {Text, StyleSheet, View, Image} from '@react-pdf/renderer'
import PDFSection from '../../utils/PDFSection'
import PDFTitle from '../../utils/PDFTitle'

const Projects = () => {
	return (
		<PDFSection>
			<PDFTitle>Projects</PDFTitle>
			{PROJECTS.map((project) => (
				<View>
					<Text>{project.name}</Text>
				</View>
			))}
		</PDFSection>
	)
}

export default Projects
