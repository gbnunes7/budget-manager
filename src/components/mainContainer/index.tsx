import isAChild from "../../interface/children";

const MainContainer: React.FC<isAChild> = ({ children }) => {
	return (
		<main className="flex-grow p-6 flex flex-col h-full gap-10 bg-[#090909]">
			{children}
		</main>
	);
};

export default MainContainer;
