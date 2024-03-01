import {Text, View} from '@react-pdf/renderer'
import PDFSection from '../../utils/PDFSection'
import PDFTitle from '../../utils/PDFTitle'

const AboutMe = () => (
	<PDFSection>
		<View>
			<PDFTitle>About Me</PDFTitle>
			<Text>
				Software developer, following a path towards professional success, studious, dedicated and very demanding with
				myself. I love studying new technologies and I will always accept a good challenge!
			</Text>
		</View>
	</PDFSection>
)

export default AboutMe
