import { Text, Box, Image, Badge, Divider } from "@chakra-ui/react";
import Card from "../card";
import Footer from "./Footer";
import { Header } from "./Header";
interface Props {
	name: string;
}

export const Section: React.FC<Props> = (props) => {
	const { name } = props;
	const cards = ["Test", "hhhehfsofhsofshofhsofhsofhoshe", "test card so  hthehtoethoehtoehtoeno  ehtoentoheotheoh ohtoeh tohet "];
	return (
		<Box borderWidth="1px" borderRadius="lg" width={230} backgroundColor="gray.50" paddingBottom={0}>
			<Header name={name} />

			<Box paddingTop={2}>
				{cards.map((card) => {
					return (
						<Box p={2} paddingTop={1}>
							<Card text={card} />
						</Box>
					);
				})}
			</Box>

			<Box p={2} paddingTop={2}>
				<Footer />
			</Box>
		</Box>
	);
};

export default Section;
