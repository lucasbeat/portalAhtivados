import { useEffect, useState } from 'react';
import '../styles.css';

import api from '../../../services/api';
import {  Bar} from 'react-chartjs-2';

import colors from '../../../utils/colors';

function AgentMedia() {
    const [listSatisfacao, setlistSegmentacao] = useState([]);

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
    //Media de notas por agente
    const chartSegmentacao = () => {
      let listAmount = [];
      let listName = [];
  
  
      api.get('listSatisfacao')
      .then(res => {
        for(const dataObj of res.data){
          listAmount.push(parseFloat(dataObj.MEDIA));
          listName.push(String(dataObj.RESPONSAVEL));
        }
  
        setlistSegmentacao({
          labels: listName,
          options: {cutoutPercentage: 80},
          datasets: [
            {
              label: 'MEDIA POR AGENTE',
              data: listAmount,
              options: {
                layout: {
                    padding: {
                        left: 100,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            },
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
            },
            
          ]
         
      })
  
      }).catch(err => {
        console.error(err);
      })
    }
  

    useEffect(() => {
      chartSegmentacao()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <div className='agent-media'>
      <Bar  height={70} width={300} data={listSatisfacao} /> 
    </div>
  )
}

export default AgentMedia;
