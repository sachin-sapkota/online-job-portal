import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { randomBytes } from 'crypto';

function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

export default BarChart;
