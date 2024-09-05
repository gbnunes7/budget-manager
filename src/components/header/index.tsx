import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth/intex";
import useBudgetContext from "../../hooks";

interface HeaderProps {
	src: string;
	alt: string;
}

const Header: React.FC<HeaderProps> = ({ src, alt }) => {
	const { signout } = useAuth();
	const { navigate, setUserEmail, setUserPassword, setErr } = useBudgetContext();

	return (
		<header className="bg-black max-h-[68px] flex justify-between items-center px-5">
			<Link to="/dashboard">
				<img src={src} alt={alt} className="w-[100px] h-[100px]" />
			</Link>
			<button
				className="text-white"
				onClick={() => {
					signout(), navigate("/"), setUserEmail(''), setUserPassword(''), setErr('');
				}}
			>
				Signout
			</button>
		</header>
	);
};

export default Header;
