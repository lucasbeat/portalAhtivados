import React from 'react'
import '../../App.css'

import Header from '../../components/Header/Header';
import construcao from './img/construcao.png'

function Challenges() {
    return (
        <>
        <Header title="Desafios"/>
        <div className="square">
         <img className='page-construcao' src={construcao} alt='construcao'></img>
        </div>
        </>
    )
}

export default Challenges;
