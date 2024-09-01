import ListItem from "../listItem";
import { MdAnalytics, MdDashboard, MdOutlineCurrencyExchange } from "react-icons/md";
import Message from "../message";
import { FaMessage } from "react-icons/fa6";


const AsideNav:React.FC = () => {
	return (
		<aside className="w-[288px] flex flex-col flex-grow bg-black gap-12 py-6">
				<Message>
					<FaMessage/>
					<p>Não gaste seu dinheiro <br></br>que nem um idiota</p>
				</Message>
			<nav className="w-full ">
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
