"use client";
import styles from './weather.module.scss';

// import { Button } from "@material-tailwind/react";

import { ThemeProvider, Button } from "@material-tailwind/react";

export { ThemeProvider, Button };


import {useEffect} from 'react';


export default function Index(props) {
    useEffect(() => {
        // 👇 add class to body element
        document.body.classList.add(styles.weather);
    }, []);
    console.log(props.info)
    return (
        <>
            <main>
                <div className={styles.sidebar}>

                    <Button color="red">color blue</Button>

                </div>
                <div className={styles.content}>

                </div>
            </main>
        </>
    )
}
