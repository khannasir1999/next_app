import React from 'react';
import heroStyles from "@/styles/herosection.module.css"
import styles from "@/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";
import { Mulish } from 'next/font/google';
const mulish = Mulish({
    weight: ['300','400','500','600','700','800','900','1000'],
    subsets: ['latin'],
    display: 'swap'
})
const Herosection = ({title,img}) => {
    return (
       <main className={heroStyles.main_section}>
        <div className={styles.container}>
            <div className={styles.grid_two_section}>
                <div className={heroStyles.hero_content}>
                    <h1>{title}</h1>
                    <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                        our
                        selection of the latest and greatest movies, and find your new favorite today.
                    </p>
                    <Link href="/movie">
                        <button className={mulish.className}>
                            Explore Movies
                        </button>
                    </Link>

                </div>
                <div className={heroStyles.hero_image}>
                    <img src={img} alt="about img" width={500} height={300}/>

                </div>

            </div>

        </div>
       </main>
    );
};

export default Herosection;