"use client";
import styles from '../weather.module.scss';
import Button from "../../theme/components/Button";
import { LuLocateFixed } from "react-icons/lu";
import WeatherImage from './WeatherImage';

export default function Sidebar(props) {
    return (
        <>
            <main className='main'>
                <div className={styles.sidebar}>
                    <div className={styles.sidebar_info}>
                        <div>
                            <Button
                                backgroundColor={'#6E707A'}
                                color={'white'} 
                                padding={'11px 18px 10px'}
                                text={'Seach for places'}
                                fontSize={'16px'}
                                classes={styles.sidebar_search}
                            />
                        </div>
                        <div>
                            <Button
                                backgroundColor={'#6E707A'}
                                color={'white'} 
                                borderRadius={'50%'}
                                fontSize={'22px'}
                                height={'40px'}
                                width={'40px'}
                                classes={styles.sidebar_icon}
                            >
                            <LuLocateFixed />
                            </Button>
                        </div>
                        <div className={styles.sidebar_info__weather_img}>
                            <WeatherImage {...props} />
                        </div>
                    </div>
                    
                </div>
                <div className={styles.content}>

                </div>
            </main>
        </>
    )
}
