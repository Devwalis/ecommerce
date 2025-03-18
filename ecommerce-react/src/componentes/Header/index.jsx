import styles from '.Header.module.css';
import React from 'react';

const Header = () => {
    return(
        <header className={styles.header}>
        <div  className={style.logo}>
            <img src="/assets/images/logo.png" alt="Logo Blue Tech"/>
        </div>


        <nav className={style.navbar}>
            <select className={styles.select}> Categorias
                <opition value="Celulares">Celulares</opition>
                <opition value="monitores">Monitores</opition>
                <opition value="Cadeiras">Cadeiras</opition>
                <opition value="Notbooks">Notbooks</opition>
            </select>

            <Link to="/cupons" className={styles.navLink}>Cupons</Link>
            <Link to="/fertas" className={styles.textcolor}>Ofertas</Link>

        </nav>

        <div className={styles.buttons}>
            <div className={styles.searchContainer}>
                <img src="assers/images/icons/iscondepesquisa.png" alt="Pesquisa"></img>
                <input type="text" placeholder="Procurar..." />
            </div>
            <Link to="/login" className={styles.button}>Entrar</Link>
            <Link to="/cadastro" className={`${styles.button} ${styles.criarConta}`}>Criar conta</Link>
        </div>
</header>
    );
};
export default Header;

