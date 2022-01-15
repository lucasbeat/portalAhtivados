import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header';
import imgProcessos from './img/processos.png';
import imgAta from './img/imgAta.png';

function Home() {
    return (
        <>
        <Header title="Página inicial"/>
        <div className="square-link-processos">
            <a style={{'textDecoration': 'none'}} target="_blank" href="https://www.google.com" rel="noreferrer">
            <h1 className='title-processos'>Processo dos ativados</h1>
            <img className='img-processos' src={imgProcessos} alt='processos' ></img>
        </a>
        </div>
        <div className="square-link-ata">
            <a style={{'textDecoration': 'none'}} target="_blank" href="https://www.google.com" rel="noreferrer">
                <h1 className='title-processos'>Link das ATAs das reuniões</h1>
                <img className='img-ata' src={imgAta} alt='img-ata' ></img>
            </a>
        </div>
        </>
    )
}

export default Home;
