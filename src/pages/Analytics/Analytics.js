import React from 'react';
import './styles.css';

import SegQTD from './Reports/SegQTD';
import Header from '../../components/Header/Header';

function Analytics() {
    return (
        <>
        <Header title="Relatórios"/>
        <div className="square-analytics">
            <h1 className="square-title">Quantidade de tickets por segmento</h1>
            <SegQTD />
        </div>
        <div className="square-analytics"></div>
        <div className="square-analytics"></div>
        <div className="square-analytics"></div>
        </>
    )
}

export default Analytics;
