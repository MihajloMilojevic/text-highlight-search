import React, { useRef, useState } from "react";
import styles from "../styles/homepage.module.css"
import Text from "../components/Text/Text";
import json_data from "../data/paragraphs.json"
import { useStateContext } from "../context/contextProvider";

export default function HomePage() {

    const {setSearchText} = useStateContext()
    const [data, setData] = useState(json_data)

    function handleTextChange(e) {
        setSearchText(e.target.value.trim())
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}><Text text="Search Text Highlight"/></h1>
            <input placeholder="Enter search text" name="search" type="search" className={styles.search_input} onChange={handleTextChange}/>
            {
                data.map(paragraph => (
                    <p key={paragraph.id} className={styles.paragraph}> 
                        <Text text={paragraph.text} />
                    </p>
                ))
            }
            <footer className={styles.footer}>
                &copy; {new Date().getFullYear()} Mihajlo Milojević
            </footer>
        </div>
    )
}