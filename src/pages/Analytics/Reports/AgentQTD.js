import { useEffect, useState } from 'react';
import '../styles.css';

import api from '../../../services/api';
import {  Bar } from 'react-chartjs-2';

import colors from '../../../utils/colors';

function Home() {
    const [ticketsQTD, setticketsQTD] = useState([]);

    const labels = colors;
    const backgroundColor = [];
    const borderColor = [];
    for(let i = 0; i < labels.length; i++){
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      backgroundColor.push('rgba('+r+', '+g+', '+b+', 0.6)');
      borderColor.push('rgba('+r+', '+g+', '+b+', 7)');
    }
  
  
    // Quantidade de tickets por agente
    const chartTickets = () => {
      let segTicketQtd = [];
      let segTicketName = [];
  
      api.get('listTickets')
      .then(res => {
        for(const dataObj of res.data){
          segTicketQtd.push(parseInt(dataObj.QTD_TICKTS));
          segTicketName.push(String(dataObj.RESPONSAVEL));
        }
        setticketsQTD({
          labels: segTicketName,
          datasets: [
            {
              label: '',
              data: segTicketQtd,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
              hoverOffset: 4
            }
          ]
        })
  
      }).catch(err => {
        console.error(err);
      })
    }
  
    useEffect(() => {
      chartTickets()
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    return (
      <div className='agent-qtd'>
      <Bar  height={60} width={200}data={ticketsQTD} />
    </div>
  )
}

export default Home;
