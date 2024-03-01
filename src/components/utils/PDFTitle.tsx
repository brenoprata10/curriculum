import {Text, StyleSheet} from '@react-pdf/renderer'

const PDFTitle = ({children}: {children: React.ReactNode}) => <Text style={styles.title}>{children}</Text>

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingVertical: 10,
	},
})

export default PDFTitle
