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
		selectedOp,
		setSelectedOp,
		description,
		setDescription,
		valor,
		setValor,
	} = useContext(BudgetContext)!;

	const setWalletBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBalance(parseInt(event.target.value));
	};
	const onHandleChangeOperation = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOp(event.target.value);
	};

	const onHandleChangeValor = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValor(parseInt(event.target.value));
	};
	const onHandleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(event.target.value);
	};

	useEffect(() => {
		if (budget.length === 0) return;
	  
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
		const savingReduce = operationSave.reduce(
		  (acc, curr) => acc + curr.Value,
		  0
		);
	  
		setIncome(Math.floor(incomeReduce));
		setSaving(Math.floor(savingReduce));
		setExpense(Math.floor(expenseReduce));
	  
	  }, [budget, setIncome, setSaving, setExpense]);


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
		onHandleChangeOperation,
		onHandleChangeValor,
		onHandleChangeDescription,
	};
};

export default useBudgetContext;
