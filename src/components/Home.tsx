import { useState, useEffect } from 'react'
import styles from './Home.module.scss'
import Map from './Map'
import VenueCard from './VenueCard'
import { ReactComponent as LibraryIcon } from '../assets/library.svg'
import SearchFields from './SearchFields'

function Home() {
  const [latitude, setLatitude] = useState<number | undefined>(undefined)
  const [longitude, setLongitude] = useState<number | undefined>(undefined)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
      error => {
        // Géolocalisation non autorisée ou erreur
        console.error(error)
      }
    )
  }, [])

  const options = [
    { value: 'option1', label: 'une librairie' },
    { value: 'option2', label: 'un disquaire' },
    { value: 'option3', label: 'un musée' },
    { value: 'option4', label: 'une discothèque' },
  ]

  return (
    <>
      <div className={styles['content']}>
        <h1>Trouve ta culture</h1>
        <p>Utilise la carte pour trouver des lieux culturels autour de toi</p>
        <SearchFields options={options} />
      </div>
      <Map latitude={latitude} longitude={longitude} />
      <div className={styles['content-venue']}>
        <VenueCard
          name="Ma librairie"
          Icon={LibraryIcon}
          address={'38 rue de Loiseau 78220 Virofly'}
        />
        <VenueCard
          name="Ma librairie"
          Icon={LibraryIcon}
          address={'38 rue de Loiseau 78220 Virofly'}
        />
        <VenueCard
          name="Ma librairie"
          Icon={LibraryIcon}
          address={'38 rue de Loiseau 78220 Virofly'}
        />
        <VenueCard
          name="Ma librairie"
          Icon={LibraryIcon}
          address={'38 rue de Loiseau 78220 Virofly'}
        />
        <VenueCard
          name="Ma librairie"
          Icon={LibraryIcon}
          address={'38 rue de Loiseau 78220 Virofly'}
        />
      </div>
    </>
  )
}

export default Home
