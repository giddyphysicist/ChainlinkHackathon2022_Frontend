import { abi } from '../constants/exchangeAbi'
import { useState, useEffect } from 'react'
import { useMoralis, useWeb3Contract } from 'react-moralis'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
)

import { Bar, Line, Scatter, Bubble } from 'react-chartjs-2'

export default function ChartDisplay() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'May', 'May'],
    datasets: [
      {
        data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3],
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: 'rgba(47,97,68,1)',
        fill: 'start',
        backgroundColor: 'rgba(47,97,68,0.3)',
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: { display: false },
    },
    responsive: true,
  }

  return (
    <div className="w-1/2 mx-auto p-4">
      <Line data={data} width={100} height={40} options={options} />
    </div>
  )
}
