import {Text, StyleSheet, View, Image} from '@react-pdf/renderer'
import {JOURNEY_LOG} from '../../main/journey-log/JourneyLog'
import PDFSection from '../../utils/PDFSection'
import PDFTitle from '../../utils/PDFTitle'

const WorkExperience = () => (
	<PDFSection>
		<PDFTitle>Work Experience</PDFTitle>
		<View style={styles.container}>
			{JOURNEY_LOG.map((company) => (
				<View style={styles.company}>
					<Image src={company.image} style={styles.logo} />
					<View style={styles.companyDescription}>
						<Text>{company.name}</Text>
						<Text>{company.role}</Text>
						<Text>{company.date.replace('Docked', 'Ongoing')}</Text>
					</View>
				</View>
			))}
		</View>
	</PDFSection>
)

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		gap: 20,
		minHeight: 430,
	},
	company: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		fontSize: 12,
		gap: 20,
	},
	companyDescription: {},
	logo: {
		width: 50,
		height: 50,
	},
})

export default WorkExperience
