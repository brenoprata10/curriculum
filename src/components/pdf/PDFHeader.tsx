import PDFSection from '../utils/PDFSection'
import {Text, View, Image, StyleSheet} from '@react-pdf/renderer'
import PROFILE_IMAGE from '../../public/images/profile-picture.png'
import {PDF_THEME} from '../../utils/pdf-theme'

export const PDF_HEADER_HEIGHT = 200

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
		gap: 65,
		height: PDF_HEADER_HEIGHT,
		paddingLeft: 30,
		paddingTop: 28,
	},
	headline: {
		fontSize: 35,
		fontFamily: 'Helvetica-Bold',
		lineHeight: 1,
	},
	role: {
		fontSize: 20,
		letterSpacing: 1,
		lineHeight: 1,
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
