import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

function Map() {
  const mapRef = useRef<HTMLDivElement | string>('')

  useEffect(() => {
    const map = L.map(mapRef.current).setView([48.505, 2.49], 8)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map)

    return () => {
      map.remove()
    }
  }, [])

  // @ts-expect-error - mapRef type is incorrerect
  return <div ref={mapRef} style={{ width: '100%', height: '800px' }}></div>
}

export default Map
