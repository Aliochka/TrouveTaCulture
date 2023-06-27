import styles from './VenueCard.module.scss'

interface ContactCardProps {
  icon: string
  name: string
  address: string
}

const ContactCard = ({ icon, name, address }: ContactCardProps) => {
  return (
    <div className={styles['venue-card']}>
      <img src={icon} />
      <h3>{name}</h3>
      <p>{address}</p>
    </div>
  )
}

export default ContactCard
