import {Section} from '../../utils/Section'
import {faDownload, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {PDFDownloadLink} from '@react-pdf/renderer'
import CurriculumPDF from '../../pdf'

export const EMAIL = 'brenoprata@hotmail.com'

export const CONTACT_CONFIG = {
	email: 'brenoprata@hotmail.com',
	linkedIn: 'https://www.linkedin.com/in/breno-prata-355352118/',
	github: 'https://github.com/brenoprata10',
	phoneNumber: '+49 1590 1384025',
	address: 'Hannover, Germany',
}

export const Contact = () => (
	<Section wrapperClassName={'contact'} title={'Contact'} icon={faPhoneAlt}>
		<div className={'section'}>
			<b className={'section-title'}>PDF Curriculum</b>
			<PDFDownloadLink document={<CurriculumPDF />} fileName='Breno Prata - Curriculum.pdf'>
				{({blob, url, loading, error}) =>
					loading ? (
						'Loading document...'
					) : (
						<div>
							<FontAwesomeIcon icon={faDownload} onClick={() => window.open(CONTACT_CONFIG.linkedIn, '_newtab')} />
							&nbsp; Download PDF
						</div>
					)
				}
			</PDFDownloadLink>
		</div>
		<div className={'section'}>
			<b className={'section-title'}>Social Media</b>
			<FontAwesomeIcon size={'4x'} icon={faLinkedin} onClick={() => window.open(CONTACT_CONFIG.linkedIn, '_newtab')} />
		</div>
		<div className={'section'}>
			<b className={'section-title'}>E-mail</b>
			<a href={`mailto:${CONTACT_CONFIG.email}`}>{CONTACT_CONFIG.email}</a>
		</div>
	</Section>
)
