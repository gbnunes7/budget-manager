import UserLogin from "../userLogin";

interface HeaderProps {
	src: string;
	alt: string;
}

const Header: React.FC<HeaderProps> = ({ src, alt }) => {
	return (
		<header className="bg-black max-h-[68px] flex justify-between items-center px-5">
			<img src={src} alt={alt} className="w-[100px] h-[100px]" />
			<UserLogin
				src="https://github.com/gbnunes7.png"
				alt="logo"
				nome="Gabriel Melo"
			/>
		</header>
	);
};

export default Header;
