import { Text, Box, Image, Badge, Divider } from "@chakra-ui/react";
import { DropTarget } from "react-dnd";
import Card from "../card";
import Footer from "./Footer";
import { Header } from "./Header";
import { v4 as uuidv4 } from "uuid";
interface Props {
	name: string;
}

export const Section: React.FC<Props> = (props) => {
	const { name } = props;
	let id = 0;
	const cards = ["Test", "hhhehfsofhsofshofhsofhsofhoshe", "test card so  hthehtoethoehtoehtoeno  ehtoentoheotheoh ohtoeh tohet "];
	return (
		<Box borderWidth="1px" borderRadius="lg" width={230} backgroundColor="gray.50" paddingBottom={0}>
			<Header name={name} />

			<Box paddingTop={2}>
				{cards.map((card) => {
					id = uuidv4();
					return (
						<Box p={2} paddingTop={1}>
							<Card text={card} id={`${id}`} />
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
