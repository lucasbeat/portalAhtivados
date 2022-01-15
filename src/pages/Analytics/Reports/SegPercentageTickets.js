import React, { useEffect, useState } from "react";
import br from 'date-fns/locale/pt-BR'

import "react-datepicker/dist/react-datepicker.css";
import '../styles.css';

import { Doughnut } from "react-chartjs-2";

import api from '../../../services/api';
import  DatePicker  from 'react-datepicker';

import moment from "moment";

const SegPercentageTickets= () => {
  const [filterData, setFilterData] = useState([]);
  const [startDate, setStartDate] = useState(new Date("01/04/2021"));
  const [endDate, setEndDate] = useState(new Date("01/04/2021"));

  const start = moment(startDate).format('DD/MM/YYYY');
  const end = moment(endDate).format('DD/MM/YYYY');

  const formatedStartDate = [];
  const formatedEndDate = [];

  const dateStartHandle = (date) => {
    setStartDate(date)
  }

  const dateEndHandle = (date) => {
    setEndDate(date)
  }

  formatedStartDate.push(start)
  formatedEndDate.push(end)
  
  const data = {
    "startDate": `${formatedStartDate[0]}`,
    "endDate": `${formatedEndDate[0]}`
  }

  const filtro = () => {
      const labels = [];
      const dataPoints = [];
    
      api.post('filterPercent', data).then(res => {
        
      labels.push(Object.keys(res.data));
      dataPoints.push(Object.values(res.data));

      setFilterData( {
        labels: labels[0],
        datasets: [
          {
            label: '# of Votes',
            data: dataPoints[0],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1.5,
          },
        ],
        tooltips: {
          enabled: false
        }
      })
      }
    ).catch(err => {
      console.error(err);
    })
  }

  useEffect(() => {
    filtro()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate] 
  );

  useEffect(() => {
    filtro()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDate]);


 return (
   <div className="segpercent">
     <div className="segpercent-chart">
     <Doughnut data={filterData} height={160} width={200} />
     </div>
    <div className="segpercent-date">
      <div id="seg-date-start">
       <DatePicker  selected={startDate} onChange={dateStartHandle}  dateFormat="dd/MM/yyyy" locale={br} />
       </div>
       <div id="seg-date-end">
      <DatePicker  selected={endDate} onChange={dateEndHandle} dateFormat="dd/MM/yyyy" locale={br} />
      </div>
   </div>
   </div>
  )
}


export default SegPercentageTickets;