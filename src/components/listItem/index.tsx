interface ListItemProps {
    children: React.ReactNode
}

const ListItem:React.FC<ListItemProps> = ({children}) => {
    return (
        <li className="text-[20px] text-white flex items-center gap-4 hover:scale-105 transition">
           {children}
        </li>
    )
};

export default ListItem