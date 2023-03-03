import Link from "next/link";
import { list } from '../data/list'
import { useState } from 'react'
import Product from "@/components/Product";
import styles from "@/components/Product/Product.module.css"

export default function Dashboard() {
    const [data, setData] = useState()

    const addingData = () => {
        console.log("working");
        setData(list);
        console.log(data);
    }

    return (
        <>
            <main className={styles.main}>
                <h1>Dashboard</h1>
                <Link href="/">Home</Link>
                {
                    data && data.clothing.map((item, index) => {
                        if (item.category == "Hoodies" || item.category == "Jackets" || item.category == "Headgear") {
                            return (
                                <div key={index}>
                                    <h2>{item.title}</h2>
                                    <img src={item.image} alt={item.title} className={styles.images} />
                                    <p>{item.cost}</p>
                                </div>
                            )
                        }
                    })
                }
                <div>
                    <button onClick={addingData}>Add Data</button>
                </div>
            </main>
        </>
    )
}