import React from 'react';
import styles from './Home.module.css';


const Home =() => {
    const carouselItems = [
        {
            id: 1 ,
            backgroud: 'african-family-animate.svg',
            front: 'mouses/mouse1 2.png',
            tag: 'Group 115.png',
            title: 'Mouse'

        }
    
    ];

    return (
        

        <main>
            <section className={styles.hero}>
                <div className={styles.interface}>
                    <div className={styles.flex}>
                        <div className={styles.letreiro}>
                            <h1>A blue Tech tem os melhores produtos de Tecnologia</h1>
                            <h3 className={styles.Subtitulo}>Com as melhores ofertas de <span clasName={styles.span}>2025</span></h3>
                            <button className={style.buttonSaiba}>
                                <img src="/assets/images/iconbutton.png"></img>
                                Saiba mais
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );

};

export default Home;