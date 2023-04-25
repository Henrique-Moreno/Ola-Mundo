import React from 'react';
import styles from './Postmodelo.module.css'

export default function PostModelos({children, fotoCapa, titulo }) {
  return (
    <article className={styles.postModeloContainer}>
        <div 
            className={styles.fotoCapa}
            style={{backgroundImage: `url(${fotoCapa})`}}
        >
            <h2 className={styles.titulo}>
                {titulo}

            </h2>

            <div className={styles.postConteudoContainer}>
                {children}

            </div>
        </div>
    </article>
  )
}
