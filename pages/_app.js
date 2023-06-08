// `pages/_app.js`
import '../styles/globals.css';
import '../styles/globals.scss';
import Container from "react-bootstrap/Container";
import Head from "next/head";
import {useEffect} from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        // 👇 add class to body element
        document.body.classList.add('body');
      }, []);
    

    return (
        <>
            <Head>
                <title>Bootstrap w/ React</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script src="http://localhost:8097"></script>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
        
                <Container>
                <Component {...pageProps} />
                </Container>
        </>
    )
  }

