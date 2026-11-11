
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHouse, faUsers, faUserPlus, faStar, faVoteYea, faChartColumn, faUser, faFile } from '@fortawesome/free-solid-svg-icons'

const menuBienestar = [
  {
    id: 'inicio',
    label: 'Inicio',
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    id: 'aprendices',
    label: 'Aprendices',
    icon: <FontAwesomeIcon icon={faUsers} />,
  },
  {
    id: 'postulaciones',
    label: 'Postulaciones',
    icon: <FontAwesomeIcon icon={faUserPlus} />,
  },
  {
    id: 'candidatos',
    label: 'Candidatos',
    icon: <FontAwesomeIcon icon={faStar} />,
  },
  {
    id: 'votaciones',
    label: 'Votaciones',
    icon: <FontAwesomeIcon icon={faVoteYea} />,
  },
  {
    id: 'resultados',
    label: 'Resultados',
    icon: <FontAwesomeIcon icon={faChartColumn} />,
  },
  {
    id: 'Acta',
    label: 'Acta',
    icon: <FontAwesomeIcon icon={faFile} />,
  },
  {
    id: 'perfil',
    label: 'Perfil',
    icon: <FontAwesomeIcon icon={faUser} />,
  },
]

export default menuBienestar
