import React from 'react'
import '../../App.css'

import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/sideBar';
import construcao from './img/construcao.png'

function Challenges() {
    return (
        <>
        <SideBar />
        <div className='content'>
        <Header title="Desafios"/>
        <div className="square">
         <img className='page-construcao' src={construcao} alt='construcao'></img>
        </div>
        </div>
        </>
    )
}

export default Challenges;
