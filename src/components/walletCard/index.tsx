import { IconType } from "react-icons";

interface WalletCardProps {
    iconImport: IconType
    value: number
    dataTransfer: string
    src: string
    alt: string
}

const WalletCard:React.FC<WalletCardProps> = ({iconImport: Icon,value,dataTransfer,src,alt}) => {
	return (
		<div className="max-w-[188px] min-h-[254px] rounded-xl bg-black flex flex-col px-3.5 pt-6 gap-4">
			<span className="text-white text-4xl">
				<Icon/>
			</span>
			<div>
				<p className="text-white text-lg font-bold">R$ {value.toFixed(2)}</p>
				<p className="text-[#D0D0DA] ">{dataTransfer}</p>
			</div>
			<img
				src={src}
				alt={alt}
				className="w-[160px] h-[100px]"
			/>
		</div>
	);
};

export default WalletCard;
