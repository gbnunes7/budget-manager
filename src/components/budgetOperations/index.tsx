import { MdDelete } from "react-icons/md";

type Operation = 'Income' | 'Expense' | 'Saving';

interface budgetOperationProps {
    operation: Operation
    description: string
    price: number
}


const BudgetOperations:React.FC<budgetOperationProps> = ({operation, description, price}) => {
    
    const getBgColor = (operation: Operation) => {
        switch (operation) {
            case 'Income':
                return 'bg-green-500';
            case 'Expense':
                return 'bg-red-500';
            case 'Saving':
                return 'bg-yellow-500'
        }
    }

	return (
		<table className="min-w-full rounded-lg overflow-hidden">
			<thead>
				<tr>
					<th className="py-2 px-4 bg-black text-left text-base font-semibold text-white uppercase">
						Operation
					</th>
					<th className="py-2 px-4 bg-black text-left text-base font-semibold text-white uppercase">
						Description
					</th>
					<th className="py-2 px-4 bg-black text-left text-base font-semibold text-white uppercase">
						Price
					</th>
					<th className="py-2 px-4 bg-black text-left text-base font-semibold text-white uppercase"></th>
				</tr>
			</thead>
			<tbody>
				<tr className="bg-black text-left text-white text-sm font-semibold">
					<td className="py-2 px-4"><span className={`px-2 py-1 rounded-sm ${getBgColor(operation)}`}>{operation}</span></td>
					<td className="py-2 px-4">{description}</td>
					<td className="py-2 px-4">{price}</td>
					<td className="py-2">
						<button><MdDelete className="text-red-700 text-2xl" /></button>
					</td>
				</tr>                
			</tbody>
		</table>
	);
};

export default BudgetOperations;
