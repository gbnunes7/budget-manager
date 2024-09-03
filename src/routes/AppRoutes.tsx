import { BrowserRouter, Route, Routes } from "react-router-dom";
import FixedLayout from "../components/fixedLayout";
import DashboardPage from "../pages/dashboard";
import OperationsPage from "../pages/operations";
import BudgetProvider from "../context";
import Wallet from "../pages/wallet";

function AppRoutes() {
	return (
		<BrowserRouter>
			<BudgetProvider>
				<Routes>
					<Route path="/" element={<FixedLayout />}>
						<Route path="/" element={<Wallet />} />
						<Route path="/operations" element={<OperationsPage />} />
						<Route path="/dashboard" element={<DashboardPage />} />
						<Route path="/analytics" element={<div />} />
					</Route>
				</Routes>
			</BudgetProvider>
		</BrowserRouter>
	);
}

export default AppRoutes;
