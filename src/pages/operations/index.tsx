import AnimatedDiv from "../../components/animatedDiv";
import FormOperation from "../../components/formOperation";
import MainContainer from "../../components/mainContainer";
import Title from "../../components/title";

const OperationsPage = () => {
	return (
		<MainContainer>
			<AnimatedDiv>
				<Title>Add your operation here, and start managing your finances!</Title>
				<FormOperation />
			</AnimatedDiv>
		</MainContainer>
	);
};

export default OperationsPage;
