import {Text, View, Image, StyleSheet} from '@react-pdf/renderer'
import {CONTACT_CONFIG} from '../../main/contact/Contact'
import PDFSection from '../../utils/PDFSection'
import PDFTitle from '../../utils/PDFTitle'

const Contact = () => (
	<PDFSection>
		<PDFTitle>Contact</PDFTitle>

		<Text>{CONTACT_CONFIG.address}</Text>
		<Text>{CONTACT_CONFIG.phoneNumber}</Text>
		<Text>{CONTACT_CONFIG.email}</Text>
		<Text>{CONTACT_CONFIG.linkedIn}</Text>
	</PDFSection>
)

export default Contact
