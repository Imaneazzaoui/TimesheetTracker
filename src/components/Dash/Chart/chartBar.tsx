import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

export default function ChartComponent() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8088/entries/perMonth', {
          params: {
            startdate: '2022',
          },
        });

        const formattedData = [['Month', 'Developer', 'DevOps']];
        for (const entry of response.data) {
          const [value, profile, month] = entry;
          if (profile === 'Developer' || profile === 'DevOps' ) {
            formattedData.push([
              month,
              profile === 'Developer' ? value : null,
              profile === 'DevOps' ? value : null,
              
            ]);          }
        }

        setChartData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (!chartData.length) {
    return <div>Loading...</div>;
  }

  return (
    <Chart
      width={'850px'}
      height={'500px'}
      chartType="ComboChart"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        title: 'Monthly Consommation',
        vAxis: { title: 'Consommation by profile each month' },
        hAxis: { title: 'Month' },
        seriesType: 'bars',
        backgroundColor: 'transparent',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
}
