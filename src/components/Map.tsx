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

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution:
    //     'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    // }).addTo(map)

    L.tileLayer(
      'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Tiles &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
      }
    ).addTo(map)

    // L.tileLayer('https://a.tile.opentopomap.org/{z}/{x}/{y}.png', {
    //   attribution:
    //     'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Tiles by <a href="https://openstreetmap.se/">OSM Bright</a>',
    //   subdomains: 'abc',
    // }).addTo(map)

    L.marker([49.505, 2.49]).addTo(map).bindPopup('KIKOU')

    return () => {
      map.remove()
    }
  }, [latitude, longitude])

  // @ts-expect-error - mapRef type is incorrerect
  return <div ref={mapRef} className={styles['map']}></div>
}

export default Map
