import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '@fortawesome/fontawesome-svg-core/styles.css'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'



export default function Contact({ contact }) {
	const byType = {
		phone: faPhone,
		telegram: faTelegram,
	}

	const getHref = (value) => {
		switch (value) {
            case 'phone':
                return `tel:${value}`
            case 'telegram':
                return `https://t.me/${value.replace('@', '').replace('https://t.me/', '')}`
            default:
                return ''
        }
	}

	return <div>
		<Link href={getHref(contact.value)} className="text-2xl">
			<FontAwesomeIcon icon={byType[contact.title]}></FontAwesomeIcon>
		</Link>
	</div>
}
