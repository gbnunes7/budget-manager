import { Outlet } from "react-router";
import AsideNav from "../asideNav";
import Header from "../header";

const FixedLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header src="./public/logo.png" alt="Logo da empresa" />
			<div className="flex flex-row flex-grow">
				<AsideNav />
				<div className="flex-grow w-full">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default FixedLayout;
