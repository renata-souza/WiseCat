import styles  from './Header.module.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={styles.header_container}>
            <Link to="/"> <img src={logo} alt="logo" /> </Link>
        </div>
    )
}

export default Header