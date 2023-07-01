"use client"
import styles from './quote.module.scss';
import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";


export default function Quote(props) {
    let quotes = props.info;
    const [quoteRender, setQuoteRenders] = useState([]);


    let author = [];
    quotes.forEach(function (value) {
        if (value.quoteAuthor) {
            author.push(value.quoteAuthor)
        }
    });

    const handleClick = () => {
        let quoteSelected = [];

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        let x = getRandomInt(quotes.length)
        quotes.forEach(function (value, key) {
            if (value.quoteAuthor === author[x]) {
                quoteSelected.push(value)
            }
        });

        setQuoteRenders(quoteSelected)
    };


    return (
        <>
            <Container>
                <button onClick={handleClick}>random</button>
                <div className={`container ${styles.quote}`}>
                    {
                        quoteRender.map((item, index) => (
                            <div className={`box ${styles.box}`} key={index}>
                                <p className={styles.box__text} id={item._id}>{item.quoteText}</p>
                                <p className={styles.box__author} id={item._id}>{item.quoteAuthor}</p>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </>
    );

}