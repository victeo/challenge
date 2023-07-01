"use client";
import styles from '../weather.module.scss';
import Button from "../../theme/components/Button";
import { LuLocateFixed } from "react-icons/lu";

export default function Sidebar(props) {

    return (
        <>
            <main className='main'>
                <div className={styles.sidebar}>
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
                            backgroundColor={backgroundColor}
                            color={color}
                            borderRadius={'50%'}
                            fontSize={'22px'}
                            height={'40px'}
                            width={'40px'}
                            classes={styles.sidebar_icon}
                        >
                           <LuLocateFixed/>
                        </Button>
                    </div>
                </div>
                <div className={styles.content}>

                </div>
            </main>
        </>
    )
}
