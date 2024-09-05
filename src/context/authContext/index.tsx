import { createContext, useEffect, useState } from "react";
import isAChild from "../../interface/children";

interface User {
	email: string;
	password: string;
}

interface AuthContextType {
	user: User | null;
	signed: boolean;
	signin: (email: string, password: string) => string | undefined;
	register: (email: string, password: string) => string | undefined;
	signout: () => void;
}


export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

export const AuthProvider: React.FC<isAChild> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const userToken = localStorage.getItem("user_token");
		const userStorage = localStorage.getItem("users_db");

		if (userToken && userStorage) {
			const storedUser = JSON.parse(userStorage) as User[];
			const loggedInUser = storedUser.filter(
				(user) => user.email === JSON.parse(userToken).email
			);

			if (loggedInUser) setUser(loggedInUser[0]);
		}
	}, []);

	const signin = (email: string, password: string) => {
		const userStorage = localStorage.getItem("users_db");
		const storedUsers = userStorage ? (JSON.parse(userStorage) as User[]) : [];

		const hasUser = storedUsers?.filter((user) => user.email === email);

		if (hasUser?.length) {
			if (hasUser[0].email === email && hasUser[0].password === password) {
				const token = Math.random().toString(36).substring(2);
				localStorage.setItem("user_token", JSON.stringify({ email, token }));
				setUser({ email, password });
				return;
			} else {
				return "E-mail ou senha incorretos";
			}
		} else {
			return "User not registed";
		}
	};

	const register = (email: string, password: string) => {
        const userStorage = localStorage.getItem("users_db");
        const storedUsers = userStorage ? (JSON.parse(userStorage) as User[]) : [];
    
        const hasUser = storedUsers?.filter((user) => user.email === email);
    
        if (hasUser?.length) {
          return "Já existe uma conta com esse E-mail";
        }
    
        const newUser = [...storedUsers, { email, password }];
    
        localStorage.setItem("users_db", JSON.stringify(newUser));
    
        return;
      };

	const signout = () => {
		setUser(null);
		localStorage.removeItem("user_token");
	};
	return (
		<AuthContext.Provider
			value={{
				user,
				signed: !!user,
				signin,
				register,
				signout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
