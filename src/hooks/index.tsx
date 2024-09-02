import { useContext, useEffect } from "react";
import { BudgetContext } from "../context";
import axios from "axios";
interface IArray {
	OperationType: string;
	Description: string;
	Value: number;
}

const useBudgetContext = () => {
	const { budget, setBudget } = useContext(BudgetContext)!;

	const API_URL: string =
		"https://sheet2api.com/v1/ChIyuf9XQFCK/budget-manager/P%C3%A1gina1?";
	// Consuming API sheet2API
	useEffect(() => {
		axios.get<IArray[]>(API_URL).then((res) => setBudget(res.data));
	}, [setBudget]);

	return {
		budget,
	};
};

export default useBudgetContext;
