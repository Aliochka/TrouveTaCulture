import { FunctionComponent, SVGProps } from 'react'
import styles from './VenueCard.module.scss'

interface ContactCardProps {
  Icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >
  name: string
  address: string
}

const ContactCard = ({ Icon, name, address }: ContactCardProps) => {
  return (
    <div className={styles['venue-card']}>
      <Icon />
      <h3>{name}</h3>
      <p>{address}</p>
    </div>
  )
}

export default ContactCard
