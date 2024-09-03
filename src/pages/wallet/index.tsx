import AnimatedDiv from "../../components/animatedDiv";
import Button from "../../components/button";
import MainContainer from "../../components/mainContainer";
import Title from "../../components/title";
import useBudgetContext from "../../hooks";
import { FaWallet } from "react-icons/fa6";

const Wallet = () => {
	const { setWalletBalance, navigate } = useBudgetContext();
	return (
		<MainContainer>
			<AnimatedDiv>
				<Title>Enter the amount you have in your account!</Title>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						navigate("/operations");
					}}
					className="flex flex-col space-y-4 p-6 gap-4 bg-black text-white rounded-lg shadow-md w-3/5"
				>
					<div className="flex flex-col gap-2">
						<label htmlFor="wallet" className="mb-2 text-xl font-semibold">
							Enter your available account balance:
						</label>
						<input
							type="number"
							id="wallet"
							name="wallet"
							min="0"
							step="0.01"
							placeholder="Ex: 13332.70"
							className="p-2 bg-[#0F0F13] text-[#8A8A98] rounded focus:outline-none focus:ring-2 focus:ring-[#4807EA]"
							onChange={setWalletBalance}
						/>
					</div>
					<Button type="submit">
						<FaWallet />
						Place
					</Button>
				</form>
			</AnimatedDiv>
		</MainContainer>
	);
};

export default Wallet;
