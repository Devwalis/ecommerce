import React from 'react';
import { Link } from 'react-router-fom';
import styles from './Header.module.css';


const AuthHeader = ({ user }) => {
    return(
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="/images/logo.png" alt="Logo" className={styles.logo}/>
            </div>
  


<nav className={styles.navbar}>
    <select className={styles.select}>
        <option value='Categorias'>Categoria</option>
        <option value='Calulares'>Celulares</option>
        <option values='Monitores'>Monitores</option>
        <option values='Cadeiras'>Cadeiras</option>
    </select>

    <Link to ="/cupons" className={styles.navLink}>Cupons</Link>
    <Link to="/ofertas" className={styles.redLink}>Ofertas</Link>


</nav>

<div className="styles.actions">
        <div className={styles.userControls}>
            <Link to="/carrinho" className={styles.iconButton}>
            <img src="/images/icons/carrinho.png" alt="Carrinho" />
            </Link>
        </div>

        <div className={styles.notification}>
            <img src="/images/icons/notificacao.png" alt="Notificações" />
            <span className={styles.badge}>3</span>
        </div>

        <div className={styles.home}>
            <img src="/images/icons/home.png" alt="home" />
            <span className={styles.badge}>3</span>
        </div>

        <div className={styles.profileDropdown}>
            <img 
            src={user.photo || '/images/avatar-placegolder.png'} 
            alt="perfil" 
            className={styles.profilePhoto}/>
        </div>



</div>
    
   </header> 
    )
   };