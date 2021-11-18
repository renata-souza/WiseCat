import styles from './LinkButton.module.css'

function LinkButton({type, text, event}) {
    return <button onClick={event} type={type} className={styles.btn}>{text}</button>
}

export default LinkButton
