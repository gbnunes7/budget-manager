interface MessageProps {
	children: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ children }) => {
	return <div className="text-base text-white flex items-center gap-4">{children}</div>;
};

export default Message;
