import {Text, StyleSheet, View, Image} from '@react-pdf/renderer'
import PDFSection from '../../utils/PDFSection'
import {CONTACT_CONFIG} from '../../main/contact/Contact'
import PDFTitle from '../../utils/PDFTitle'

const AboutMe = () => (
	<PDFSection>
		<View style={styles.about}>
			<PDFTitle>About Me</PDFTitle>
			<Text>
				Software developer, following a path towards professional success, studious, dedicated and very demanding with
				myself. I love studying new technologies and I will always accept a good challenge!
			</Text>
		</View>
	</PDFSection>
)

const styles = StyleSheet.create({
	role: {
		fontSize: 20,
		letterSpacing: 1,
	},
	about: {
		marginTop: 20,
	},
})

export default AboutMe

/*
 *
				<Text>{CONTACT_CONFIG.address}</Text>
				<Text>{CONTACT_CONFIG.phoneNumber}</Text>
				<Text>{CONTACT_CONFIG.email}</Text>
				<Text>{CONTACT_CONFIG.linkedIn}</Text>
 */
