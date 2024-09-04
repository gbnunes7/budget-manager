import { CiBitcoin } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa6";
import useBudgetContext from "../../hooks";

const CryptoCard = () => {
	const { btc, eth } = useBudgetContext();

	return (
		<div className="bg-black text-white flex flex-col max-w-[210px] min-h-[200px] p-4 gap-6 items-center rounded-xl border-2 border-[#40404A]">
			<h1 className="text-2xl font-semibold tracking-wide">Latest Quote</h1>
			{btc && (
				<div className="text-lg font-medium flex items-center gap-2">
					<CiBitcoin className="text-2xl" />
					BTC: $
					{btc.market_data.current_price.usd
						.toFixed(2)
						.toString()
						.replace(".", ",")}
				</div>
			)}
			{eth && (
				<div className="text-lg font-medium flex items-center gap-2">
					<FaEthereum className="text-2xl" />
					ETH: $
					{eth.market_data.current_price.usd
						.toFixed(2)
						.toString()
						.replace(".", ",")}
				</div>
			)}
		</div>
	);
};

export default CryptoCard;
