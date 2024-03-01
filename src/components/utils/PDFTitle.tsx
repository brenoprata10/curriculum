import {Text, StyleSheet, View} from '@react-pdf/renderer'
import {PDF_THEME} from '../../utils/pdf-theme'

const PDFTitle = ({children}: {children: React.ReactNode}) => (
	<View style={styles.container}>
		<Text style={styles.title}>{children}</Text>
		<View style={styles.bottomBorder}>&nbsp;</View>
	</View>
)

const styles = StyleSheet.create({
	container: {
		paddingVertical: 14,
		display: 'flex',
		gap: 8,
	},
	title: {
		fontSize: 12,
		fontFamily: 'Helvetica-Bold',
		textTransform: 'uppercase',
		letterSpacing: 3,
		color: PDF_THEME.secondaryColor,
		lineHeight: 1,
	},
	bottomBorder: {
		width: 50,
		height: 3,
		backgroundColor: PDF_THEME.secondaryColor,
	},
})

export default PDFTitle
