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
import WalletCard from "../walletCard";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaVault } from "react-icons/fa6";

// Registrar os componentes do Chart.js que serão utilizados
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
	Legend
);

const FinanceChart: React.FC = () => {
	const { income, expense, saving, balance } = useBudgetContext();

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
			<div className="grid grid-cols-2 gap-2 md:hidden">
					<WalletCard
						iconImport={BsFillArrowDownSquareFill}
						value={income}
						dataTransfer="Income"
						src="/flowAmarelo.png"
						alt="Image"
					/>
					<WalletCard
						iconImport={GiReceiveMoney}
						value={expense}
						dataTransfer="Expenses"
						src="/flowVerde.png"
						alt="Image"
					/>
					<WalletCard
						iconImport={RiMoneyDollarBoxFill}
						value={balance}
						dataTransfer="Balance"
						src="/flowAmarelo.png"
						alt="Image"
					/>
					<WalletCard
						iconImport={FaVault}
						value={saving}
						dataTransfer="Saving"
						src="/flowVerde.png"
						alt="Image"
					/>
				</div>
		</div>
	);
};

export default FinanceChart;
