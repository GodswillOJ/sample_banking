'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define props for DoughnutChart
interface DoughnutChartProps {
  accounts: Account[];
}

// Update DoughnutChart to accept props
const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: accounts.map(account => account.balance), // Replace with appropriate data field
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
      },
    ],
    labels: accounts.map(account => account.name), // Replace with appropriate label field
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-container w-full h-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
