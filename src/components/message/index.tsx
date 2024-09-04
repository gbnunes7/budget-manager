import isAChild from "../../interface/children";

const Message: React.FC<isAChild> = ({ children }) => {
	return (
		<div className="text-sm text-white flex items-center gap-4">{children}</div>
	);
};

export default Message;
