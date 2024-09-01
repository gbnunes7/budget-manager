import ListItem from "../listItem";
import { MdAnalytics, MdDashboard } from "react-icons/md";
import { MdOutlineCurrencyExchange } from "react-icons/md";

const AsideNav = () => {
	return (
		<aside className="w-[288px] flex flex-grow bg-black">
			<nav>
				<ul className="flex flex-col gap-4">
					<ListItem>
						<MdDashboard />
						Dashboard
					</ListItem>
					<ListItem>
						<MdOutlineCurrencyExchange />
						Operations
					</ListItem>
					<ListItem>
						<MdAnalytics />
						Analytics
					</ListItem>
				</ul>
			</nav>
		</aside>
	);
};

export default AsideNav;
