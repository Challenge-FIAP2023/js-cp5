import {  } from 'react';
import FotoVictor from '../assets/img/foto-victor.jpeg'
import FotoHenri from '../assets/img/foto-henri.webp'
import sobreStyles from './styles.module.css'

function Sobre() {

  return (
    <>
      <section>
        <h1>Sobre Nós</h1>
        <div className={sobreStyles.fotoContainer}>
          <img src={FotoVictor} alt="Foto do Victor" />
          <p>Victor Marcondes Nuzzi</p>
        </div>
        <div className={sobreStyles.fotoContainer}>
          <img src={FotoHenri} alt="Foto do Henri" />
          <p>Henri de Oliveira Lopes</p>
        </div>
      </section>
    </>
  )
}

export default Sobre
