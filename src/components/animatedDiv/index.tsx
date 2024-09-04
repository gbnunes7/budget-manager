import { motion } from "framer-motion";
import isAChild from "../../interface/children";
const animation = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const AnimatedDiv: React.FC<isAChild> = ({ children }) => {
	return (
		<motion.div
			className="flex flex-col gap-10"
			variants={animation}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedDiv;
