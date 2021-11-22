import Header from "../Header/Header"
import styles from './Advice.module.css'
import LinkButton from "../LinkButton/LinkButton"
import { useEffect, useState } from 'react'

function Advices() {

    const [advice, setAdvice] = useState()
    const [cat, setCat] = useState()
    const [imageLoaded, setImageLoaded] = useState(false)

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
        setImageLoaded(false)
        
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
                    <img src={cat} className={imageLoaded ? styles.visible : styles.hidden} alt="cat" onLoad={() => setImageLoaded(true)}
                    />
                    {imageLoaded ? (
                        <div className={styles.advice_area}>
                                <p>"{advice}"</p>
                            <LinkButton event={loadData} text="New Advice"></LinkButton>
                        </div>
                    ) : (
                        <span>Loading...</span>
                    )}
                </div>
            </div>
        </>
    )
}

export default Advices
