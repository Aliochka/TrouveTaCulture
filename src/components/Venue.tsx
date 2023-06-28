// import { useEffect, useState } from 'react'
import styles from './Venue.module.scss'
import 'animate.css'
function Venue() {
  return (
    <>
      <div className="content">
        <div className={styles['lieu']}></div>

        <h1>ZooParc</h1>

        <p>
          À travers son association Beauval Nature, Beauval soutient des actions
          dans le monde entier afin de préserver le milieu naturel, protéger les
          espèces animales et végétales, favoriser les études scientifiques et
          le partage de connaissances. Nouveau programme de conservation confié
          à Beauval Nature, Help Congo vient en aide aux chimpanzés dans le parc
          national de Conkouati-Douli depuis plus de 30 ans. Missions de
          protection des primates, travaux de recherche, recensement de la faune
          locale, sensibilisation des populations... les projets à mener sont
          très nombreux par les équipes de Beauval Nature dépêchées sur place et
          les équipes locales. Une reconnaissance supplémentaire du
          professionnalisme de Beauval Nature dans la conservation d'espèces !
        </p>

        <img src="/src/assets/zoo.jpeg" alt="ZooParc" />

        <div className="cardVenue">
          <h1>Autres destinations</h1>

          <button>Ajouter au passculture</button>

          <div className={`${styles.lieu} animate__animated animate__bounce`}>
            <a href="#" className="picture">
              <p></p>
              <img
                src="/src/assets/lieu.png"
                alt="Lieu"
                style={{ width: '300px', height: '300px' }}
              />
            </a>
            <h2>
              Nom : <a href="#">ZooParc de Beauvais</a>
            </h2>
            <p className="price">Prix : 80 €</p>
            <p className="location">Ou : Beauvais</p>
            <div className="favori">
              Donner avie :<button>♡</button>
            </div>
          </div>
        </div>
        <div className="spinner"></div>
      </div>
    </>
  )
}

// function VenueSpinner() {
//   const [showSpinner, setShowSpinner] = useState(false)

//   // Utilisez useEffect pour afficher progressivement le spinner après un certain délai (par exemple, 1 seconde)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSpinner(true)
//     }, 6000)

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <>
//       <div className="content">
//         {/* ... Votre code existant ... */}

//         <div
//           className={`spinner ${
//             showSpinner ? 'animate__animated animate__fadeIn' : ''
//           }`}
//         ></div>
//       </div>
//     </>
//   )
// }

export default Venue
