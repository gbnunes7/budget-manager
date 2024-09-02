import { BiSolidSend } from "react-icons/bi";
import Button from "../button";

const FormOperation = () => {
	return (
		<form
			id="operationForm"
			className="flex flex-col space-y-4 p-6 gap-4 bg-black text-white rounded-lg shadow-md"
		>
			<div className="flex flex-col">
				<label htmlFor="operations" className="mb-2 text-lg font-semibold">
					Operation Type
				</label>
				<select
					id="operations"
					name="operations"
					className="p-2 bg-[#0F0F13] text-[#8A8A98] rounded focus:outline-none focus:ring-2 focus:ring-[#4807EA]"
				>
					<option value="income">Income</option>
					<option value="expense">Expense</option>
					<option value="saving">Saving</option>
				</select>
			</div>

			<div className="flex flex-col">
				<label htmlFor="description" className="mb-2 text-lg font-semibold">
					Description
				</label>
				<input
					type="text"
					id="description"
					name="description"
					placeholder="Ex: Shopping at the mall"
					required
					minLength={3}
					maxLength={120}
					className="p-2 bg-[#0F0F13] text-[#8A8A98] rounded focus:outline-none focus:ring-2 focus:ring-[#4807EA]"
				/>
			</div>

			<div className="flex flex-col">
				<label htmlFor="price" className="mb-2 text-lg font-semibold">
					Price
				</label>
				<input
					type="text"
					id="price"
					name="price"
					placeholder="Ex: 4.99"
					required
					minLength={3}
					maxLength={120}
					pattern="^\d*\.?\d+$"
					className="p-2 bg-[#0F0F13] text-[#8A8A98] rounded focus:outline-none focus:ring-2 focus:ring-[#4807EA]"
				/>
			</div>
            <Button type="submit"><BiSolidSend/>Submit</Button>
		</form>
	);
};

export default FormOperation;
