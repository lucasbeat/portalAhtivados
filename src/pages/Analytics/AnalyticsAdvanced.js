import React from 'react';

import '../../App.css';
import './styles.css';

import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/sideBar';

function AnalyticsAdvanced() {
    return (
        <>
         <SideBar />
        <div className='content'>
        <Header title='Indicadores Avançados'></Header>
        <div>
            <h1>Indicadores que serão mais avançados</h1>
        </div>
        </div>
        </>
    )
}

export default AnalyticsAdvanced
