import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Message from "../message";
import { Autoplay } from "swiper/modules";

const SwiperMessage: FC = () => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			className="text-white w-[200px] border-2 border-[#40404A] rounded-lg px-2 py-2"
			modules={[Autoplay]}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
		>
			<SwiperSlide>
				<Message>Track every expense to stay on budget.</Message>
			</SwiperSlide>
			<SwiperSlide>
				<Message>Save a portion of your income before spending.</Message>
			</SwiperSlide>
            <SwiperSlide>
				<Message>Consider investing in cryptocurrencies.</Message>
			</SwiperSlide>
		</Swiper>
	);
};

export default SwiperMessage;
