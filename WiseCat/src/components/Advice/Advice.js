import Header from "../Header/Header"
import styles from './Advice.module.css'
import LinkButton from "../LinkButton/LinkButton"
import { useEffect, useState } from 'react'

function Advices() {

    const [advice, setAdvice] = useState()
    const [cat, setCat] = useState()

    function newAdvice() {

        setTimeout(() => {
            
            fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(res => {
                setAdvice(res.slip.advice)
            })
            .catch(err => console.log(err))

        }, 1000)

        fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(cats => {
            setCat(cats[0].url)
        })
        .catch(err => console.log(err))
        
    }

    useEffect(() => {
        newAdvice()
    }, [])

    function refresh() {
        newAdvice()
    }

    return (
        <>
            <Header />
            <div className={styles.advice_container}>
                <div className={styles.advice}>
                    <div className={styles.advice_area}>
                        <div className={styles.advice_text}>
                            <blockquote>"{advice}"</blockquote>
                            <span>- Cat</span>
                        </div>
                        <LinkButton event={refresh} text="New Advice"></LinkButton>
                    </div>
                    <img src={cat} alt="" />
                </div>
            </div>
        </>
    )
}

export default Advices
