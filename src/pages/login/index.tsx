import { IoIosLogIn } from "react-icons/io";
import useBudgetContext from "../../hooks";
import { FaRegPenToSquare } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth/intex";

const Login = () => {
	const {
		userEmail,
		userPassword,
		setUserEmail,
		setUserPassword,
		navigate,
		err,
		setErr,
	} = useBudgetContext();

	const { register, signin } = useAuth();

	const handleRegister = () => {
		const res = register(userEmail, userPassword);

		if (res) {
			setErr(res);
			return;
		}
	};

	const handleLogin = () => {
		const res = signin(userEmail, userPassword);

		if (res) {
			setErr(res);
			return;
		}

		navigate("/wallet");
	};

	return (
		<div className="flex justify-center items-center min-h-screen w-screen bg-[#0F0F13]">
			<div className="flex flex-col lg:flex-row w-11/12 lg:w-3/6 h-auto lg:h-3/6 shadow-xl shadow-[#2A2A2A]">
				<div className="bg-black w-full lg:w-3/6 flex">
					<div className="flex flex-col text-white gap-6 p-6 w-full">
						<img src="/logo.png" alt="Logo" className="w-2/5 mx-auto lg:mx-0" />
						<p className="text-center lg:text-left">
							Welcome, login to your account!
						</p>
						<div className="flex flex-col gap-2">
							<input
								type="email"
								id="email"
								name="email"
								autoComplete="off"
								value={userEmail}
								onChange={(e) => [setUserEmail(e.target.value), setErr("")]}
								placeholder="Email Address"
								className="p-2 w-full h-[50px] focus:text-sm bg-[#0F0F13] text-[#8A8A98] rounded focus:outline-none focus:ring-2 focus:ring-[#4807EA] focus:placeholder:text-[12px] placeholder:opacity-100"
							/>
							<input
								type="password"
								name="password"
								id="password"
								autoComplete="off"
								placeholder="Password"
								value={userPassword}
								onChange={(e) => [setUserPassword(e.target.value), setErr("")]}
								className="p-2 w-full h-[50px] focus:text-sm bg-[#0F0F13] text-[#8A8A98] rounded focus:outline-none focus:ring-2 focus:ring-[#4807EA] focus:placeholder:text-[12px] placeholder:opacity-100"
							/>
						</div>
						<div className="text-[12px] text-red-500">{err}</div>
						<div className="flex gap-4 justify-center lg:justify-start">
							<button
								onClick={handleLogin}
								className="flex items-center pl-4 w-[110px] text-[#F5F5FF] h-[40px] border-2 rounded-md border-[#40404A] transition duration-300 ease-in-out transform hover:scale-105 gap-2 hover:border-[#4807EA]"
							>
								<IoIosLogIn className="text-xl" />
								Login
							</button>
							<button
								onClick={handleRegister}
								className="py-[6px] pr-[20px] flex items-center pl-4 w-[130px] text-[#F5F5FF] h-[40px] border-2 rounded-md border-[#40404A] transition duration-300 ease-in-out transform hover:scale-105 gap-2 hover:border-[#4807EA]"
							>
								<FaRegPenToSquare className="text-xl" />
								Register
							</button>
						</div>
					</div>
				</div>
				<div className="bg-[url('/iconLogo.png')] bg-no-repeat bg-cover bg-center w-full lg:w-3/6 min-h-[300px] lg:min-h-full"></div>
			</div>
		</div>
	);
};

export default Login;
