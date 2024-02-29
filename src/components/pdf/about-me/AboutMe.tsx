import {Text, View, StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
})

const AboutMe = () => (
	<View style={styles.section}>
		<Text>Section #1</Text>
	</View>
)

export default AboutMe
