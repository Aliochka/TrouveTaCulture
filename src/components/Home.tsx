import { useState, useEffect } from 'react'
import styles from './Home.module.scss'
import Map, { Marker } from './Map'
import VenueCard from './VenueCard'
import { ReactComponent as LibraryIcon } from '../assets/library.svg'
import SearchFields from './SearchFields'

interface CategoryResponse {
  id: number
  name: string
  publicName: string
}

interface PlaceResponse {
  id: number
  name: string
  address: string
  coordinates: [number, number]
  placeType: string[]
  isPassCulturePartner: boolean
}

function Home() {
  const [latitude, setLatitude] = useState<number | undefined>(undefined)
  const [longitude, setLongitude] = useState<number | undefined>(undefined)
  const [options, setOptions] = useState([])
  const [markers, setMarkers] = useState<Marker[]>([])
  const [filters, setFilters] = useState<string[]>([])

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

  useEffect(() => {
    fetch('http://localhost:5001/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setOptions(
          data.map((d: CategoryResponse) => ({
            value: d.id,
            label: d.publicName,
            name: d.name,
          }))
        )
      })
      .catch(error => {
        // Gestion des erreurs
        console.error(error)
      })
  }, [])

  const handleOnCLick = () => {
    fetch('http://localhost:5001/places', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        placeType: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        position: [48.8669667, 2.3116348],
        range: 10000,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Traitement de la réponse
        setMarkers(
          data.map((d: PlaceResponse) => ({
            latitude: d.coordinates[0],
            longitude: d.coordinates[1],
            name: d.name,
            address: d.address,
            placeType: d.placeType[0],
            isPassCulturePartner: d.isPassCulturePartner,
          }))
        )
      })
      .catch(error => {
        // Gestion des erreurs
        console.error({ error })
      })
  }

  return (
    <>
      <div className={styles['content']}>
        <h1>Trouve ta culture</h1>
        <p>Utilise la carte pour trouver des lieux culturels autour de toi</p>
        <SearchFields options={options} setFilters={setFilters} />
        <button onClick={handleOnCLick} type="submit">
          LANCE LA RECHERCHE LLAMA GPT
        </button>
      </div>
      <Map
        latitude={latitude}
        longitude={longitude}
        markers={markers}
        filters={filters}
      />
      <div className={styles['content-venue']}>
        {markers.map(marker => {
          return (
            <VenueCard
              name={marker.name}
              Icon={LibraryIcon}
              address={marker.address}
            />
          )
        })}
      </div>
    </>
  )
}

export default Home
