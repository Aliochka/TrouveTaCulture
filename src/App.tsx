import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import Map from './components/Map.tsx'
import VenueCard from './components/VenueCard.tsx'
import LibraryIcon from './assets/library.svg'

function App() {
  const [latitude, setLatitude] = useState<number | undefined>(undefined)
  const [longitude, setLongitude] = useState<number | undefined>(undefined)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        console.log('coordonnées', latitude, longitude)
      },
      error => {
        // Géolocalisation non autorisée ou erreur
        console.error(error)
      }
    ),
      []
  })

  return (
    <div className={styles['content']}>
      <h1>Trouve ta culture</h1>
      <p className={styles['explanations']}>
        Utilise la carte pour trouver des lieux culturels autour de toi
      </p>
      <Map latitude={latitude} longitude={longitude} />
      <VenueCard
        name="Ma librairie"
        icon={LibraryIcon}
        address={'38 rue de Loiseau 78220 Virofly'}
      />
      <VenueCard
        name="Ma librairie"
        icon={LibraryIcon}
        address={'38 rue de Loiseau 78220 Virofly'}
      />
      <VenueCard
        name="Ma librairie"
        icon={LibraryIcon}
        address={'38 rue de Loiseau 78220 Virofly'}
      />
      <VenueCard
        name="Ma librairie"
        icon={LibraryIcon}
        address={'38 rue de Loiseau 78220 Virofly'}
      />
      <VenueCard
        name="Ma librairie"
        icon={LibraryIcon}
        address={'38 rue de Loiseau 78220 Virofly'}
      />
    </div>
  )
}

export default App
