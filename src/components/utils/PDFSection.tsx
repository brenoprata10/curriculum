import {View, StyleSheet} from '@react-pdf/renderer'

const PDFSection = ({withoutMargin, children}: {withoutMargin?: boolean; children: React.ReactNode}) => (
	<View
		style={{
			...styles.section,
			marginTop: withoutMargin ? 0 : styles.section.marginTop,
			marginHorizontal: withoutMargin ? 0 : styles.section.marginHorizontal,
		}}
	>
		{children}
	</View>
)

const styles = StyleSheet.create({
	section: {
		marginTop: 15,
		marginHorizontal: 30,
	},
})

export default PDFSection
