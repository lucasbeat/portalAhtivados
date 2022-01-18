import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header';
import imgProcessos from './img/processos22.png';
import imgAta from './img/imgAta.png';
import imgBoletim from './img/boletim2.jpg';

function Home() {
    return (
        <>
        <Header title="Página inicial"/>
        <div id='mainpage-info'> 
        <div className="square-link-processos">
            <a style={{'textDecoration': 'none'}} target="_blank" href="https://drive.google.com/drive/folders/1TAWNW0fyp3SoZLQ2K1qpnPzyxkQDR-m7" rel="noreferrer">
            <h1 className='title-processos'>Processo dos ahtivados</h1>
            <img className='img-processos' src={imgProcessos} alt='processos' ></img>
        </a>
        </div>
        <div className="square-link-ata">
            <a style={{'textDecoration': 'none'}} target="_blank" href="https://www.google.com" rel="noreferrer">
                <h1 className='title-processos'>Link das ATAs das reuniões</h1>
                <img className='img-ata' src={imgAta} alt='img-ata' ></img>
            </a>
        </div>

        <div className="square-link-boletim">
            <a style={{'textDecoration': 'none'}} target="_blank" href="https://drive.google.com/drive/folders/1o-uJXaypJLUvjZhZpXuMqpTV3TV0bl-2" rel="noreferrer">
                <h1 className='title-boletim'>Boletim semanal</h1>
                <img className='img-boletim' src={imgBoletim} alt='img-boletim' ></img>
            </a>
        </div>
        </div>
        </>
    )
}

export default Home;
