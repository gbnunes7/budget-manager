interface UserLoginProps {
	nome: string;
	src: string;
	alt: string;
}

const UserLogin: React.FC<UserLoginProps> = ({ nome, src, alt }) => {
	return (
		<figure className="flex items-center gap-4">
			<img className="w-[32px] h-[32px] rounded-full" src={src} alt={alt} />
			<figcaption className="text-base text-white">{nome}</figcaption>
		</figure>
	);
};

export default UserLogin;
