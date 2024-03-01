import {View, StyleSheet} from '@react-pdf/renderer'

const PDFSection = ({withoutMargin, children}: {withoutMargin?: boolean; children: React.ReactNode}) => (
	<View
		style={{
			...styles.section,
			marginVertical: withoutMargin ? 0 : styles.section.marginVertical,
			marginHorizontal: withoutMargin ? 0 : styles.section.marginHorizontal,
		}}
	>
		{children}
	</View>
)

const styles = StyleSheet.create({
	section: {
		marginVertical: 15,
		marginHorizontal: 40,
	},
})

export default PDFSection
