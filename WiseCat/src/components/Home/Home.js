import cat from '../../img/cat.png'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import LinkButton from '../LinkButton/LinkButton'

function Home() {
    return(
        <div className={styles.home_container}>
            <div>
                <div className={styles.text_container}>
                    <h1>Wise</h1>
                    <p>Cat</p>
                </div>
                   <Link to="/advices"> <LinkButton type='button' text='Ask for Advice' /> </Link>
            </div>
            <img src={cat} alt="cat" />
        </div>
    )
}

export default Home
