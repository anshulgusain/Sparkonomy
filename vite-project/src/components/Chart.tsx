import { Chart as ReactChart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  // Import the controllers for the chart types
  BarController,
  LineController
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  // Register the imported controllers
  BarController,
  LineController
);

function IncomeChart() {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        type: "bar" as const,
        label: "income",
        data: [3000, 4500, 7000, 3500, 6500, 2000],
        backgroundColor: "#a855f7", // purple
        borderRadius: 8,
        yAxisID: "y",
        barThickness: 28,
      },
      {
        type: "line" as const,
        label: "momGrowth",
        data: [20, 35, 50, -30, 60, -90],
        borderColor: "#8b0000", // dark red/brown
        borderWidth: 2,
        pointBackgroundColor: "#8b0000",
        fill: false,
        tension: 0.3,
        yAxisID: "y1",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          font: { size: 12 },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        position: "left" as const,
        ticks: {
          callback: (value: any | string) => `$${value / 1000}k`,
        },
      },
      y1: {
        beginAtZero: true,
        position: "right" as const,
        grid: { drawOnChartArea: false },
        ticks: {
          callback: (value: number | string) => `${value}%`,
        },
      },
      x: {
        ticks: { font: { size: 12 } },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow">
      <h3 className="text-gray-700 font-semibold text-base sm:text-lg">Income Trend</h3>
      <p className="text-gray-500 text-xs sm:text-sm mb-4">
        Your monthly income and growth for the last 6 months.
      </p>
      <div className="h-64 sm:h-80">
        <ReactChart type="bar" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default IncomeChart;