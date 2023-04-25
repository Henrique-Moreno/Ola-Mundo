import React from 'react';
import styles from './Header.module.css';
import MenuLink from '../MenuLink';


export default function Header() {

  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink to="/">
              Home
            </MenuLink>

            <MenuLink to="/about">
              Sobre
            </MenuLink>
           
        </nav>
    </header>
  )
}
