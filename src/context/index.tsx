import { createContext, useState } from "react";

interface BudgetProviderProps {
	children: React.ReactNode;
}

interface IArray {
	OperationType: string;
	Description: string;
	Value: number;
}

interface BudgetContextType {
	budget: IArray[];
	setBudget: React.Dispatch<React.SetStateAction<IArray[]>>;
	income: number;
	setIncome: React.Dispatch<React.SetStateAction<number>>;
	expense: number;
	setExpense: React.Dispatch<React.SetStateAction<number>>;
	balance: number;
	setBalance: React.Dispatch<React.SetStateAction<number>>;
	saving: number;
	setSaving: React.Dispatch<React.SetStateAction<number>>;
}

export const BudgetContext = createContext<BudgetContextType | undefined>(
	undefined
);

const BudgetProvider: React.FC<BudgetProviderProps> = ({ children }) => {
	const [budget, setBudget] = useState<IArray[]>([]);
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);
	const [balance, setBalance] = useState(0);
	const [saving, setSaving] = useState(0);

	return (
		<BudgetContext.Provider
			value={{
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
			}}
		>
			{children}
		</BudgetContext.Provider>
	);
};

export default BudgetProvider;
