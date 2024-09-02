import { BrowserRouter, Route, Routes } from "react-router-dom";
import FixedLayout from "../components/fixedLayout";
import DashboardPage from "../pages/dashboard";
import OperationsPage from "../pages/operations";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<FixedLayout />}>
					<Route path="/" element={<DashboardPage />} />
					<Route path="/operations" element={<OperationsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
