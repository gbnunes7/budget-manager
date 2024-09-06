import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import ListItem from "../listItem";
import { FaWallet } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
	MdAnalytics,
	MdDashboard,
	MdOutlineCurrencyExchange,
} from "react-icons/md";

const DropdownMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative inline-block text-left lg:hidden">
			<div>
				<button
					type="button"
					className="inline-flex justify-center w-full shadow-sm px-4 py-2 text-2xl text-white font-medium "
					onClick={toggleMenu}
				>
					<CiMenuBurger />
				</button>
			</div>

			{isOpen && (
				<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5">
					<div
						className="p-4"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						<ul className="text-sm flex flex-col gap-2">
							<ListItem>
								<FaWallet />
								<Link onClick={toggleMenu} to="/wallet">
									Wallet
								</Link>
							</ListItem>
							<ListItem>
								<MdOutlineCurrencyExchange />
								<Link onClick={toggleMenu} to="/operations">
									Operations
								</Link>
							</ListItem>
							<ListItem>
								<MdDashboard />
								<Link onClick={toggleMenu} to="/dashboard">
									Dashboard
								</Link>
							</ListItem>
							<ListItem>
								<MdAnalytics />
								<Link onClick={toggleMenu} to="/analytics">
									Analytics
								</Link>
							</ListItem>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
