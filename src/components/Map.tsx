import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './Map.module.scss'

interface MapProps {
  latitude?: number
  longitude?: number
}

function Map({ latitude = 48.505, longitude = 2.49 }: MapProps) {
  const mapRef = useRef<HTMLDivElement | string>('')

  useEffect(() => {
    const map = L.map(mapRef.current).setView([latitude, longitude], 15)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map)

    return () => {
      map.remove()
    }
  }, [latitude, longitude])

  // @ts-expect-error - mapRef type is incorrerect
  return <div ref={mapRef} className={styles['map']}></div>
}

export default Map
