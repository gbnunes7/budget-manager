import ListItem from "../listItem";
import {
	MdAnalytics,
	MdDashboard,
	MdOutlineCurrencyExchange,
} from "react-icons/md";
import { FaMessage, FaWallet } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SwiperMessage from "../swiper";
import CryptoCard from "../crypto/intex";

const AsideNav: React.FC = () => {
	return (
		<aside className=" hidden lg:w-1/5 lg:flex lg:flex-col lg:bg-black lg:gap-12 lg:py-6 lg:px-5">
			<div className="flex items-center">
				<FaMessage  className="text-white text-2xl"/>
				<SwiperMessage />
			</div>
			<nav className="w-full ">
				<ul className="flex flex-col gap-4">
					<ListItem>
						<FaWallet />
						<Link to="/wallet">Wallet</Link>
					</ListItem>
					<ListItem>
						<MdOutlineCurrencyExchange />
						<Link to="/operations">Operations</Link>
					</ListItem>
					<ListItem>
						<MdDashboard />
						<Link to="/dashboard">Dashboard</Link>
					</ListItem>
					<ListItem>
						<MdAnalytics />
						<Link to="/analytics">Analytics</Link>
					</ListItem>
				</ul>
			</nav>
			<CryptoCard/>
		</aside>
	);
};

export default AsideNav;
