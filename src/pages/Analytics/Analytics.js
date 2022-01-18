import React from 'react';
import './styles.css';

import Header from '../../components/Header/Header';
import SegQTD from './Reports/SegQTD';
import SegPercentageTickets from './Reports/SegPercentageTickets';
import SegAvaliacao from './Reports/SegAvaliacao';
import AgentQTD from './Reports/AgentQTD';
import AgentMedia from './Reports/AgentMedia';


function Analytics() {
    return (
        <>
        <Header  title="Indicadores" />  
        <div className='squares'>
          <button  className='button-indicadores'>Indicadores avançados</button>
        <div className="square-analytics">
            <h1 className="square-title">Quantidade de tickets por segmento</h1>
            <SegQTD />
        </div>
        <div className="square-analytics">
            <h1 className='square-title'>Media anual de CSAT por segmento</h1>
            <SegAvaliacao />
        </div>
        <div className="square-segpercent">
            <h1 className="square-title">Percentual de abertura de tickets por data</h1>
            <SegPercentageTickets />
        </div>
        <div className="square-analytics-agQtd">
        <h1 className='square-title'>Quantidade de tickets resolvidos por agente</h1>
            <AgentQTD />
        </div>
        <div className="square-analytics-agMedia">
        <h1 className='square-title'>Media CSAT por agente</h1>
            <AgentMedia />
        </div>
        </div> 
        </>
    )
}

export default Analytics;
