import { BsFillArrowDownSquareFill } from "react-icons/bs";
import BudgetOperations from "../../components/budgetOperations";
import Title from "../../components/title";
import WalletCard from "../../components/walletCard";
import { GiReceiveMoney } from "react-icons/gi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaVault } from "react-icons/fa6";
import MainContainer from "../../components/mainContainer";

const DashboardPage = () => {
	return (
		<MainContainer>
			<div>
				<Title>My Balance</Title>
				<p className="text-[56px] font-bold text-white"> R$ 1.150,00</p>
			</div>
			<BudgetOperations
				operation="Expense"
				description="Mercado"
				price={49.9}
			/>
			<div className="flex gap-6">
				<WalletCard
					iconImport={BsFillArrowDownSquareFill}
					value={459.0}
					dataTransfer="Income"
					src="/public/flowAmarelo.png"
					alt="Image"
				/>
				<WalletCard
					iconImport={GiReceiveMoney}
					value={459.0}
					dataTransfer="Expenses"
					src="/public/flowVerde.png"
					alt="Image"
				/>
				<WalletCard
					iconImport={RiMoneyDollarBoxFill}
					value={459.0}
					dataTransfer="Balance"
					src="/public/flowAmarelo.png"
					alt="Image"
				/>
				<WalletCard
					iconImport={FaVault}
					value={459.0}
					dataTransfer="Saving"
					src="/public/flowVerde.png"
					alt="Image"
				/>
			</div>
		</MainContainer>
	);
};

export default DashboardPage