import { MdDelete } from "react-icons/md";
import useBudgetContext from "../../hooks";

type OperationType = "Income" | "Saving" | "Expense";

const BudgetOperations: React.FC = () => {
	const { budget, handleDelete } = useBudgetContext();

	const getBgColor = (OperationType: OperationType | string) => {
		switch (OperationType) {
			case "Income":
				return "bg-green-500";
			case "Expense":
				return "bg-red-500";
			case "Saving":
				return "bg-yellow-500";
		}
	};

	return (
		<div className="min-h-[350px] min-w-full">
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
					{budget.map((item, index) => (
						<tr
							key={index}
							className="bg-black text-left text-white text-sm font-semibold"
						>
							<td className="py-2 px-4">
								<span
									className={`px-2 py-1 rounded-sm ${getBgColor(
										item.OperationType
									)}`}
								>
									{item.OperationType}
								</span>
							</td>
							<td className="py-2 px-4">{item.Description}</td>
							<td className="py-2 px-4">{item.Value}</td>
							<td className="py-2">
								<button onClick={() => handleDelete(index)}>
									<MdDelete className="text-red-700 text-2xl" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default BudgetOperations;
