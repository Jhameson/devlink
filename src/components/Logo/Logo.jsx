import './Logo.style.css'
import DevLink from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link to="/">
      <img src={DevLink} alt="" />
    </Link>
  )
}
