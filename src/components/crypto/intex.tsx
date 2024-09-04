import axios from "axios";
import { useEffect, useState } from "react";
import { CiBitcoin } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa6";

interface CryptoData {
	name: string;
	market_data: {
		current_price: {
			usd: number;
		};
	};
}

const CryptoCard = () => {
	const [btc, setBtc] = useState<CryptoData | null>(null);
	const [eth, setEth] = useState<CryptoData | null>(null);

	const coin: string = "bitcoin";
	const coin2: string = "ethereum";

	const options = {
		headers: {
			accept: "application/json",
			"x-cg-demo-api-key": "	CG-4v864zGKfd2z9epApLFESADD",
		},
	};

	useEffect(() => {
		axios
			.get(`https://api.coingecko.com/api/v3/coins/${coin}`, options)
			.then((res) => setBtc(res.data))
			.catch((err) => console.error(err));

		axios
			.get(`https://api.coingecko.com/api/v3/coins/${coin2}`, options)
			.then((res) => setEth(res.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="bg-black text-white flex flex-col max-w-[200px] min-h-[200px] p-4 gap-6 items-center rounded-xl border-2 border-[#40404A] shadow-lg transition-transform transform hover:scale-105">
			<h1 className="text-2xl font-semibold tracking-wide">Latest Quote</h1>
			{btc && (
				<div className="text-lg font-medium flex items-center gap-2">
                    <CiBitcoin className="text-2xl"/>
					BTC: $
					{btc.market_data.current_price.usd
						.toFixed(2)
						.toString()
						.replace(".", ",")}
				</div>
			)}
			{eth && (
				<div className="text-lg font-medium flex items-center gap-2">
                    <FaEthereum className="text-2xl"/>
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
