"use client";
import styles from './weather.module.scss';
import {useEffect} from 'react';
import Sidebar from './components/sidebar';

export default function Index(props) {
    useEffect(() => {
        // 👇 add class to body element
        document.body.classList.add(styles.weather);
    }, []);
    const backgroundColor = '#6E707A';


    return (
        <>
            <main className='main'>
                <Sidebar/>
                
            </main>
        </>
    )
}
