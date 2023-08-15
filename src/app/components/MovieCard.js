import React from 'react';
import styles from "@/styles/common.module.css"
import Link from "next/link";

const MovieCard = (curElem) => {

    const {id, type, title, synopsis} = curElem.jawSummary;
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>

                    <img src={curElem.jawSummary.backgroundImage.url} alt={title} width={250} height={250}/>
                </div>
                <div className={styles.card_data}>
                    <h2>{title.substr(0,18)}</h2>
                    <p>
                        {synopsis.substr(0,66)}
                    </p>
                    <Link href={`/movie/${id}`}>
                        <button>
                            Read more
                        </button>
                    </Link>
                </div>

            </div>
        </>
    );
};

export default MovieCard;