import { useEffect, useState } from 'react';
import '../styles.css';


import api from '../../../services/api';
import { Doughnut } from 'react-chartjs-2';

import colors from '../../../utils/colors';

function SegAvaliacao() {
    const [listAvaliacaoSeg, setlistAvaliacaoSeg] = useState([]);

    const labels = colors;
    const backgroundColor = [];
    const borderColor = [];
    for(let i = 0; i < labels.length; i++){
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      backgroundColor.push('rgba('+r+', '+g+', '+b+', 0.5)');
      borderColor.push('rgba('+r+', '+g+', '+b+', 1)');
    }
  
    
    const chartlistAvaliacaoSeg = () => {
      let listAmount = [];
      let listName = [];
  
  
      api.get('listAvaliacaoSeg')
      .then(res => {
        for(const dataObj of res.data){
          listAmount.push(parseFloat(dataObj.AVALIACAO));
          listName.push(String(dataObj.SEGMENTO));
        }
  
        setlistAvaliacaoSeg({
          labels: listName,
          datasets: [
            {
              label: 'MEDIA POR SEGMENTO',
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
      chartlistAvaliacaoSeg()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <div className='seg-avaliacao'>
      <Doughnut  height={160} width={200} data={listAvaliacaoSeg} />
    </div>
  )
}

export default SegAvaliacao;
