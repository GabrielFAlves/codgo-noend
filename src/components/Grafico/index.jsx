import React, {useEffect, useRef} from "react";
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


function Grafico({status1, status2, status3}) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: 'pie',
      data: {
        labels: [status1, status2, status3],
        datasets: [
          {
            data: [19, 12, 8],
            backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 206, 86, 0.6)'],
            borderColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 206, 86, 0.6)'],
            borderWidth: 1,
          },
        ],
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};


export default Grafico;
