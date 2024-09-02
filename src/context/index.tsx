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
}

export const BudgetContext = createContext<BudgetContextType | undefined>(
	undefined
);

const BudgetProvider: React.FC<BudgetProviderProps> = ({ children }) => {
	const [budget, setBudget] = useState<IArray[]>([]);

	return (
		<BudgetContext.Provider value={{ budget, setBudget }}>
			{children}
		</BudgetContext.Provider>
	);
};

export default BudgetProvider;
