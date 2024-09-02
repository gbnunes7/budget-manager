import { BrowserRouter, Route, Routes } from "react-router-dom";
import FixedLayout from "../components/fixedLayout";
import DashboardPage from "../pages/dashboard";
import OperationsPage from "../pages/operations";
import BudgetProvider from "../context";


function AppRoutes() {
	return (
		<BrowserRouter>
			<BudgetProvider>
				<Routes>
					<Route path="/" element={<FixedLayout />}>
						<Route path="/" element={<DashboardPage />} />
						<Route path="/operations" element={<OperationsPage />} />
					</Route>
				</Routes>
			</BudgetProvider>
		</BrowserRouter>
	);
}

export default AppRoutes;


