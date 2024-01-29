import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

const DonutChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8088/entries/percentage'); // Update the endpoint URL
        const data = response.data;

        // Transform the data into the required format for the chart
        const formattedData = [['Task', 'Pourcentage']];
        for (const [task, percentage] of Object.entries(data)) {
          formattedData.push([task, percentage]);
        }

        setChartData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '80px' }}>
      <Chart
        width={'650px'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          pieHole: 0.5,
          backgroundColor: 'transparent',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
};

export default DonutChart;
