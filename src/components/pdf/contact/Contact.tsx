import {Text, View, Image, StyleSheet, Link} from '@react-pdf/renderer'
import {CONTACT_CONFIG} from '../../main/contact/Contact'
import PDFSection from '../../utils/PDFSection'
import PDFTitle from '../../utils/PDFTitle'

const Contact = () => (
	<PDFSection>
		<PDFTitle>Contact</PDFTitle>

		<ContactItem label={CONTACT_CONFIG.address} />
		<ContactItem label={CONTACT_CONFIG.phoneNumber} />
		<ContactItem label={CONTACT_CONFIG.email} />
		<ContactLinkItem src={CONTACT_CONFIG.linkedIn} label={'LinkedIn'} />
		<ContactLinkItem src={CONTACT_CONFIG.github} label={'Github'} />
	</PDFSection>
)

const ContactItem = ({label}: {label: string}) => <Text style={styles.contact}>{label}</Text>

const ContactLinkItem = ({label, src}: {label: string; src: string}) => (
	<Link src={src} style={styles.contact}>
		{label}
	</Link>
)

export default Contact

const styles = StyleSheet.create({
	contact: {
		fontSize: 12,
	},
})
