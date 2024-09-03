import { BiSolidSend } from "react-icons/bi";
import Button from "../button";
import useBudgetContext from "../../hooks";

const FormOperation = () => {
	const {
		onHandleSubmit,
		onHandleChangeOperation,
		onHandleChangeValor,
		onHandleChangeDescription,
	} = useBudgetContext();

	return (
		<>
			<form
				id="operationForm"
				className="flex flex-col space-y-4 p-6 gap-4 bg-black text-white rounded-lg shadow-md"
				onSubmit={onHandleSubmit}
			>
				<div className="flex flex-col">
					<label htmlFor="operations" className="mb-2 text-lg font-semibold">
						Operation Type
					</label>
					<select
						id="operations"
						name="Operation Type"
						className="p-2 bg-[#0F0F13] text-[#8A8A98] rounded focus:outline-none focus:ring-2 focus:ring-[#4807EA]"
						onChange={onHandleChangeOperation}
					>
						<option value="select an option" disabled selected>
							Select an option
						</option>
						<option value="Expense">Expense</option>
						<option value="Income">Income</option>
						<option value="Saving">Saving</option>
					</select>
				</div>

				<div className="flex flex-col">
					<label htmlFor="description" className="mb-2 text-lg font-semibold">
						Description
					</label>
					<input
						type="text"
						id="description"
						name="Description"
						placeholder="Ex: Shopping at the mall"
						required
						minLength={3}
						maxLength={120}
						className="p-2 bg-[#0F0F13] text-[#8A8A98] rounded focus:outline-none focus:ring-2 focus:ring-[#4807EA]"
						onChange={onHandleChangeDescription}
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="price" className="mb-2 text-lg font-semibold">
						Price
					</label>
					<input
						type="text"
						id="price"
						name="Value"
						pattern="^\d+(\.\d+)?$"
						placeholder="e.g., 4.99"
						required
						className="p-2 bg-[#0F0F13] text-[#8A8A98] rounded focus:outline-none focus:ring-2 focus:ring-[#4807EA]"
						onChange={onHandleChangeValor}
						aria-label="Price"
						aria-required="true"
						title="Follow the example: 4.99 (Numbers and dot)"
					/>
				</div>
				<Button type="submit">
					<BiSolidSend />
					Submit
				</Button>
			</form>
		</>
	);
};

export default FormOperation;
