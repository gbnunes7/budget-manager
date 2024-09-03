import { BsFillArrowDownSquareFill } from "react-icons/bs";
import Title from "../../components/title";
import WalletCard from "../../components/walletCard";
import { GiReceiveMoney } from "react-icons/gi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaVault } from "react-icons/fa6";
import MainContainer from "../../components/mainContainer";
import AnimatedDiv from "../../components/animatedDiv";
import BudgetOperations from "../../components/budgetOperations";
import useBudgetContext from "../../hooks";

const DashboardPage = () => {
	const { balance, income, expense, saving } = useBudgetContext();

	return (
		<MainContainer>
			<AnimatedDiv>
				<div>
					<Title>My Balance</Title>
					<p className="text-[56px] font-bold text-white"> R$ {balance}</p>
				</div>
				<BudgetOperations />
				<div className="flex gap-6">
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
			</AnimatedDiv>
		</MainContainer>
	);
};

export default DashboardPage;
