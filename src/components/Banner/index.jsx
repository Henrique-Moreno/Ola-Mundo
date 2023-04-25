import React from 'react'
import styles from './Banner.module.css';
import circuloColorido  from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <div className={styles.conteudo}>
                <h1 className={styles.titulo}>
                    Olá, Mundo
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    src={circuloColorido}
                    alt='teste' 
                    className={styles.circuloColorido}
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto} 
                    alt="foto do ...." 
                />

            </div>
        </div>
        
    </div>
  )
}
