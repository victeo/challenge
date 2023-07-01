"use client";
import styles from './weather.module.scss';
import Button from "../theme/components/Button";
import {useEffect} from 'react';
import { LuLocateFixed } from "react-icons/lu";

export default function Index(props) {
    useEffect(() => {
        // 👇 add class to body element
        document.body.classList.add(styles.weather);
    }, []);
    const backgroundColor = '#6E707A';
    const color = 'white';
    const padding = '11px 18px 10px';
    const borderRadius = '0';
    const text = 'Seach for places';
    const fontSize = '16px'

    return (
        <>
            <main className='main'>
                <div className={styles.sidebar}>
                    <div>
                        <Button
                            backgroundColor={backgroundColor}
                            color={color} padding={padding}
                            borderRadius={borderRadius}
                            text={text}
                            fontSize={fontSize}
                            classes={styles.sidebar_search}
                        />
                    </div>
                    <div>
                        <Button
                            backgroundColor={backgroundColor}
                            color={color}
                            borderRadius={'50%'}
                            fontSize={'22px'}
                            height={'40px'}
                            width={'40px'}
                            classes={styles.sidebar_icon}
                            // icon={{ name: 'LuLocateFixed', family: 'react-icons/lu' }}
                        />
                    </div>

                </div>
                <div className={styles.content}>

                </div>
            </main>
        </>
    )
}
