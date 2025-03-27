import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/images/logo.png" alt="Logo Blue Tech" />
      </div>

      <nav className={styles.navbar}>
        <select className={styles.select}>
          <option value="Categorias">Categoria</option>
          <option value="celulares">Celulares</option>
          <option value="monitor">Monitores</option>
          <option value="cadeiras">Cadeiras</option>
        </select>
        
        <Link to="/cupons" className={styles.navLink}>Cupons</Link>
        <Link to="/ofertas" className={styles.textcolor}>Ofertas</Link>
      </nav>

      <div className={styles.buttons}>
        <div className={styles.searchContainer}>
          <img src="/assets/images/icons/icondepesquisa.png" alt="Pesquisar" />
          <input type="text" placeholder="Procurar..." />
        </div>
        <Link to="/login" className={styles.button}>Entrar</Link>
        <Link to="/cadastro" className={`${styles.button} ${styles.criarConta}`}>Criar Conta</Link>
      </div>
    </header>
  );
};

export default Header;