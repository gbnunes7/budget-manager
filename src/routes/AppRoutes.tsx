import { BrowserRouter, Route, Routes } from "react-router-dom";
import FixedLayout from "../components/fixedLayout";
import DashboardPage from "../pages/dashboard";
import OperationsPage from "../pages/operations";
import BudgetProvider from "../context/budgetContext";
import Wallet from "../pages/wallet";
import Analytics from "../pages/analytics";
import Login from "../pages/login";
import { ComponentType } from "react";
import { AuthProvider } from "../context/authContext";
import useAuth from "../hooks/useAuth/intex";

const Private = ({ Element }: { Element: ComponentType }) => {
	const { signed } = useAuth();

	return signed ? <Element /> : <Login />;
};

function AppRoutes() {
	return (
		<BrowserRouter>
			<BudgetProvider>
				<AuthProvider>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/" element={<Private Element={FixedLayout} />}>
							<Route path="wallet" element={<Wallet />} />
							<Route path="operations" element={<OperationsPage />} />
							<Route path="dashboard" element={<DashboardPage />} />
							<Route path="analytics" element={<Analytics />} />
						</Route>
						<Route path="*" element={<Login />} />
					</Routes>
				</AuthProvider>
			</BudgetProvider>
		</BrowserRouter>
	);
}

export default AppRoutes;
