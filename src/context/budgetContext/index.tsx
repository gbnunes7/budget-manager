import { createContext, useState } from "react";
import isAChild from "../../interface/children";

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
	selectedOp: string;
	setSelectedOp: React.Dispatch<React.SetStateAction<string>>;
	description: string;
	setDescription: React.Dispatch<React.SetStateAction<string>>;
	valor: number;
	setValor: React.Dispatch<React.SetStateAction<number>>;
	btc: CryptoData | null;
	setBtc: React.Dispatch<React.SetStateAction<CryptoData | null>>;
	eth: CryptoData | null;
	setEth: React.Dispatch<React.SetStateAction<CryptoData | null>>;
	userEmail: string
	setUserEmail: React.Dispatch<React.SetStateAction<string>>
	userPassword: string
	setUserPassword: React.Dispatch<React.SetStateAction<string>>
	err: string
	setErr: React.Dispatch<React.SetStateAction<string>>
}

interface CryptoData {
	name: string;
	market_data: {
		current_price: {
			usd: number;
		};
	};
}

export const BudgetContext = createContext<BudgetContextType | undefined>(
	undefined
);

const BudgetProvider: React.FC<isAChild> = ({ children }) => {
	const [budget, setBudget] = useState<IArray[]>([]);
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);
	const [balance, setBalance] = useState(0);
	const [saving, setSaving] = useState(0);
	const [selectedOp, setSelectedOp] = useState("Income");
	const [description, setDescription] = useState("");
	const [valor, setValor] = useState(0);
	const [btc, setBtc] = useState<CryptoData | null>(null);
	const [eth, setEth] = useState<CryptoData | null>(null);
	const [userEmail,setUserEmail] = useState('')
	const [userPassword,setUserPassword] = useState('')
	const [err, setErr] = useState('')

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
				selectedOp,
				setSelectedOp,
				description,
				setDescription,
				valor,
				setValor,
				btc,
				setBtc,
				eth,
				setEth,
				userEmail,
				setUserEmail,
				userPassword,
				setUserPassword,
				err,
				setErr,
			}}
		>
			{children}
		</BudgetContext.Provider>
	);
};

export default BudgetProvider;
