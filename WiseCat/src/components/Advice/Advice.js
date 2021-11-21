import Header from "../Header/Header"
import styles from './Advice.module.css'
import LinkButton from "../LinkButton/LinkButton"
import { useEffect, useState } from 'react'

function Advices() {

    const [advice, setAdvice] = useState()
    const [cat, setCat] = useState()

   async function newAdvice() {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        return data.slip.advice
    }

    async function newCat() { 
        const response = await fetch('https://api.thecatapi.com/v1/images/search')
        const data = await response.json()
        return data[0].url
    }

    async function loadData() {
        const [advice, cat] = await Promise.all([
            newAdvice(), 
            newCat()
        ])
    
        setAdvice(advice)
        setCat(cat)
    }
    
    useEffect(() => {
        loadData()
    },[])

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
                        <LinkButton event={loadData} text="New Advice"></LinkButton>
                    </div>
                    <img src={cat} alt="cat picture" />
                </div>
            </div>
        </>
    )
}

export default Advices
