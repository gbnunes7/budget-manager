import { MdDelete } from "react-icons/md";

type Operation = 'Income' | 'Expense' | 'Saving';

interface budgetOperationProps {
    operation: Operation
    description: string
    price: number
}


const BudgetOperations:React.FC<budgetOperationProps> = ({operation, description, price}) => {
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
					<td className="py-2 px-4">{operation}</td>
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
