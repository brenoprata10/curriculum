import PDFSection from '../utils/PDFSection'
import {Text, View, Image, StyleSheet} from '@react-pdf/renderer'
import PROFILE_IMAGE from '../../public/images/profile-picture.png'
import {PDF_THEME} from '../../utils/pdf-theme'

const PDFHeader = () => {
	return (
		<PDFSection withoutMargin={true}>
			<View style={styles.header}>
				<Image src={PROFILE_IMAGE} style={styles.profileImage} />
				<View style={styles.profile}>
					<Text style={styles.headline}>Breno Prata</Text>
					<Text style={styles.role}>Software Engineer</Text>
				</View>
			</View>
		</PDFSection>
	)
}

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: PDF_THEME.secondaryColor,
		backgroundColor: PDF_THEME.primaryColor,
		width: '100%',
		padding: 40,
		paddingBottom: 10,
		paddingLeft: 30,
		gap: 65,
	},
	headline: {
		fontSize: 35,
		fontFamily: 'Helvetica-Bold',
	},
	role: {
		fontSize: 20,
		letterSpacing: 1,
	},
	profile: {
		display: 'flex',
		gap: 10,
	},
	profileImage: {
		width: 150,
		height: 150,
	},
})

export default PDFHeader
