import React from "react";
import { Bar } from "react-chartjs-2";
import Title from "../../components/title";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
	Legend,
} from "chart.js";
import useBudgetContext from "../../hooks";

// Registrar os componentes do Chart.js que serão utilizados
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
	Legend
);

const FinanceChart: React.FC = () => {
	const { income, expense, saving } = useBudgetContext();

	// Configurações de dados para o gráfico
	const data = {
		labels: ["Income", "Expenses", "Saving"],
		datasets: [
			{
				label: "Operations",
				data: [income, expense, saving],
				backgroundColor: [
					"rgba(75, 192, 192, 0.6)",
					"rgba(255, 0, 0, 0.6)",
					"rgb(229, 255, 0)",
				],
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
		},
	};

	return (
		<div className="flex flex-col gap-4">
			<Title>See your operations chart!</Title>
			<Bar data={data} options={options} className="bg-black rounded-lg p-4" />
		</div>
	);
};

export default FinanceChart;
