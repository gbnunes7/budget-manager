import isAChild from "../../interface/children";

const Title: React.FC<isAChild> = ({ children }) => {
	return <h1 className="text-3xl text-white">{children}</h1>;
};

export default Title;
