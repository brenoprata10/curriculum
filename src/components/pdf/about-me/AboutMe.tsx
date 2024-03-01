import {Text, StyleSheet, View, Image} from '@react-pdf/renderer'
import PDFSection from '../../utils/PDFSection'
import PROFILE_IMAGE from '../../../public/images/profile-picture.png'
import {CONTACT_CONFIG} from '../../main/contact/Contact'
import PDFTitle from '../../utils/PDFTitle'

const AboutMe = () => (
	<>
		<PDFSection withoutMargin={true}>
			<View style={styles.header}>
				<Image src={PROFILE_IMAGE} style={styles.profileImage} />
				<View style={styles.profile}>
					<Text style={styles.headline}>Breno Prata</Text>
					<Text style={styles.role}>Software Engineer</Text>
				</View>
			</View>
		</PDFSection>
		<PDFSection>
			<View style={styles.about}>
				<PDFTitle>About Me</PDFTitle>
				<Text>
					Software developer, following a path towards professional success, studious, dedicated and very demanding with
					myself. I love studying new technologies and I will always accept a good challenge!
				</Text>
			</View>
		</PDFSection>
	</>
)

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: '#203e60',
		backgroundColor: '#c8d6e6',
		width: '100%',
		padding: 40,
		paddingBottom: 10,
		gap: 50,
	},
	headline: {
		fontSize: 35,
		fontFamily: 'Helvetica-Bold',
	},
	role: {
		fontSize: 20,
	},
	profile: {
		display: 'flex',
		gap: 10,
	},
	profileImage: {
		width: 150,
		height: 150,
		marginLeft: 15,
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
