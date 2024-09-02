interface ButtonProps {
    children: React.ReactNode
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button:React.FC<ButtonProps> = ({children,type = "button", onClick}) => {
    return (
        <button className="py-[6px] pr-[20px] flex items-center pl-4 w-[114px] text-[#F5F5FF] min-h-[32px] border-2 rounded-md border-[##40404A] transition duration-300 ease-in-out transform hover:scale-105 gap-2 hover:border-[#4807EA]" onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button