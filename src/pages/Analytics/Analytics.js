import React from 'react';
import './styles.css';

import Header from '../../components/Header/Header';
import SegQTD from './Reports/SegQTD';
import SegAvaliacao from './Reports/SegAvaliacao';
import AgentQTD from './Reports/AgentQTD';
import AgentMedia from './Reports/AgentMedia';


function Analytics() {
    return (
        <>
        <Header title="Relatórios"/>
        <div className="square-analytics">
            <h1 className="square-title">Quantidade de tickets por segmento</h1>
            <SegQTD />
        </div>
        <div className="square-analytics">
            <h1 className='square-title'>Media por segmento</h1>
            <SegAvaliacao />
        </div>
        <div className="square-analytics-agQtd">
        <h1 className='square-title'>Quantidade de tickets resolvidos por agente</h1>
            <AgentQTD />
        </div>
        <div className="square-analytics-agMedia">
        <h1 className='square-title'>Media de notas por agente</h1>
            <AgentMedia />
        </div>
        </>
    )
}

export default Analytics;
