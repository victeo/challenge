"use client"
import React from 'react';
import styles from './quote.module.scss';



export default function Quote(props) {
    let quotes = props.info;
    console.log(quotes)

    let author = [];
    quotes.forEach(function(value){
        if(value.quoteAuthor){
            author.push(value.quoteAuthor)
        }
    });

    let quoteRender = [];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      let x = getRandomInt(quotes.length)

      quotes.forEach(function(value, key){
        if(value.quoteAuthor === author[x]){
            quoteRender.push(value)
        }
    });

    return (
        <>
            <div className={ `container ${styles.quote}`} >
                {
                    quoteRender.map((item, index) => (
                        <div className={`box ${styles.box}`}  key={index}>
                            <p className={styles.box__text}  id={item._id}>{item.quoteText}</p>
                            <p className={styles.box__author}  id={item._id}>{item.quoteAuthor}</p> 
                        </div>
                    ))
                }
            </div>
        </>
    );

}