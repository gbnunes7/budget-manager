interface TitleProps {
    children: React.ReactNode
}

const Title:React.FC<TitleProps> = ({children}) => {
    return (
        <h1 className="text-3xl text-white">{children}</h1>
    )
}

export default Title