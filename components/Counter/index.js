import { useState } from 'react'
import styles from './Counter.module.css'

export default function Counter() {

    const [number, setNumber] = useState(0);

    const incrementNumber = () => {
        setNumber(number + 2);
    };
    const decrementNumber = () => {
        setNumber(number - 2);
    };

    return (
        <>
            <div className={styles.container}>
                <button id={styles.plusTwo} onClick={decrementNumber}>
                    Decremet By 2
                </button>
                <span id={styles.showNumber}> {number} </span>
                <button id={styles.minusTwo} onClick={incrementNumber}>
                    Increment By 2
                </button>
            </div>
        </>
    )
}


