import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStar, faVoteYea, faChartColumn,} from '@fortawesome/free-solid-svg-icons'

const menuBienestar = [
  {
    id: 'inicio',
    label: 'Inicio',
    icon: <FontAwesomeIcon icon={faHouse} />,
  },

  {
    id: 'candidatos',
    label: 'Candidatos',
    icon: <FontAwesomeIcon icon={faStar} />,
  },
  {
    id: 'votaciones',
    label: 'Votar',
    icon: <FontAwesomeIcon icon={faVoteYea} />,
  },
  {
    id: 'resultados',
    label: 'Resultados',
    icon: <FontAwesomeIcon icon={faChartColumn} />,
  },
]

export default menuBienestar