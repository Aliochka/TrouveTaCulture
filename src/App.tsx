import styles from './App.module.scss'
import Map from './components/Map.tsx'

function App() {
  return (
    <div className={styles['content']}>
      <h1>Trouve ta culture</h1>
      <div className={styles['card']}>
        <button>Me géololocaliser</button>
      </div>
      <p className={styles['explanations']}>
        Utilise la carte pour trouver des lieux culturels autour de toi
      </p>
      <Map />
    </div>
  )
}

export default App
