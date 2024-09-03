import { useContext, useEffect } from "react";
import { BudgetContext } from "../context";
import axios from "axios";
import { useNavigate } from "react-router";
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

	const navigate = useNavigate()

	//Input for wallet page
	const setWalletBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBalance(parseInt(event.target.value));
	};

	const API_URL: string =
		"https://sheet2api.com/v1/ChIyuf9XQFCK/budget-manager/P%C3%A1gina1?";

	// axios get dbjson
	useEffect(() => {
	
		const fetchData = async () => {
			if(setBudget.length > 0) return
			try {
				const response = await axios.get<IArray[]>(API_URL);
				setBudget(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [setBudget]);

	const onHandleChangeOperation = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedOp(event.target.value);
	};

	const onHandleChangeValor = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValor(parseInt(event.target.value));
	};
	const onHandleChangeDescription = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
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

	const onHandleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
	
		try {
			await axios.post(API_URL, {
				OperationType: selectedOp,
				Description: description,
				Value: valor,
			});
	
			setBudget((prevBudget) => [
				...prevBudget,
				{
					OperationType: selectedOp,
					Description: description,
					Value: valor,
				},
			]);
	
			// Atualizar o saldo
			setBalance((prevBalance) => {
				switch (selectedOp) {
					case "Income":
						return prevBalance + valor;
					case "Expense":
					case "Saving":
						return prevBalance - valor;
					default:
						return prevBalance;
				}
			});

			navigate('/dashboard')
		} catch (err) {
			console.error("Error posting data:", err);
		}
	};

	const onHandleDelete = (arr: IArray[], index: number) => {
		return arr.filter((_, i) => i !== index);
	};

	const handleDelete = (index: number) => {
		const updatedBudget = onHandleDelete(budget, index);
		setBudget(updatedBudget);

		axios.delete(API_URL + index)
		.then(res => console.log(res))
		.catch(err => console.error(err))
	};

	return {
		budget,
		income,
		expense,
		balance,
		saving,
		navigate,
		setWalletBalance,
		onHandleSubmit,
		onHandleChangeOperation,
		onHandleChangeValor,
		onHandleChangeDescription,
		handleDelete
	};
};

export default useBudgetContext;
