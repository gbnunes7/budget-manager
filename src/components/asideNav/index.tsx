import ListItem from "../listItem";
import {
	MdAnalytics,
	MdDashboard,
	MdOutlineCurrencyExchange,
} from "react-icons/md";
import Message from "../message";
import { FaMessage, FaWallet } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AsideNav: React.FC = () => {
	return (
		<aside className="w-1/5 flex flex-col bg-black gap-12 py-6">
			<Message>
				<FaMessage />
				<p>
					Não gaste seu dinheiro <br></br>que nem um idiota
				</p>
			</Message>
			<nav className="w-full ">
				<ul className="flex flex-col gap-4">
					<ListItem>
						<FaWallet />
						<Link to="/">Wallet</Link>
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
		</aside>
	);
};

export default AsideNav;
