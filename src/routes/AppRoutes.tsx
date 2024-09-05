import { BrowserRouter, Route, Routes } from "react-router-dom";
import FixedLayout from "../components/fixedLayout";
import DashboardPage from "../pages/dashboard";
import OperationsPage from "../pages/operations";
import BudgetProvider from "../context";
import Wallet from "../pages/wallet";
import Analytics from "../pages/analytics";
import Title from "../components/title";

function AppRoutes() {
	return (
		<BrowserRouter>
			<BudgetProvider>
				<Routes>
					<Route path="/" element={<FixedLayout />}>
						<Route path="/" element={<Wallet />} />
						<Route path="/operations" element={<OperationsPage />} />
						<Route path="/dashboard" element={<DashboardPage />} />
						<Route path="/analytics" element={<Analytics />} />
						<Route
							path="*"
							element={
								<div className="bg-[#090909] h-full w-full p-14">
									<Title>Error 404</Title>
									<p className="text-white mt-4 text-[50px]">Página não encontrada</p>
								</div>
							}
						/>
					</Route>
				</Routes>
			</BudgetProvider>
		</BrowserRouter>
	);
}

export default AppRoutes;
