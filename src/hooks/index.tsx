import { useContext, useEffect } from "react";
import { BudgetContext } from "../context";
import axios from "axios";
interface IArray {
	OperationType: string;
	Description: string;
	Value: number;
}

const useBudgetContext = () => {
	const {
		budget,
		setBudget,
		income,
		setIncome,
		expense,
		setExpense,
		balance,
		setBalance,
		saving,
		setSaving,
	} = useContext(BudgetContext)!;

	const setWalletBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBalance(parseInt(event.target.value));
	};

	const operationExpense = budget.filter(
		(item) => item.OperationType === "Expense"
	);
	const operationIncome = budget.filter(
		(item) => item.OperationType === "Income"
	);
	const operationSave = budget.filter(
		(item) => item.OperationType === "Saving"
	);

	const expenseReduce = operationExpense.reduce(
		(acc, curr) => acc + curr.Value,
		0
	);
	const incomeReduce = operationIncome.reduce(
		(acc, curr) => acc + curr.Value,
		0
	);
	const saveReduce = operationSave.reduce((acc, curr) => acc + curr.Value, 0);

	useEffect(() => {
		setIncome(incomeReduce);
		setSaving(saveReduce);
		setExpense(expenseReduce);
	}, [
		incomeReduce,
		saveReduce,
		expenseReduce,
		setIncome,
		setSaving,
		setExpense,
	]);

	useEffect(() => {
		setBalance(((balance +income) - expense) - saving)  
	},[
		balance,
		setBalance
	])

	const API_URL: string =
		"https://sheet2api.com/v1/ChIyuf9XQFCK/budget-manager/P%C3%A1gina1?";
	// Consuming API sheet2API
	useEffect(() => {
		axios.get<IArray[]>(API_URL).then((res) => setBudget(res.data));
	}, [setBudget]);

	return {
		budget,
		income,
		expense,
		balance,
		saving,
		setWalletBalance,
	};
};

export default useBudgetContext;
