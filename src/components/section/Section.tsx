import { Text, Box, Image, Badge, Divider, Container } from "@chakra-ui/react";
import Card from "../card";
import Footer from "./Footer";
import { Header } from "./Header";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Draggable, Droppable, DroppableProps } from "react-beautiful-dnd";
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
				<Droppable droppableId={name}>
					{(provided) => {
						return (
							<ul {...provided.droppableProps} ref={provided.innerRef}>
								{cards.map((card, index) => {
									id = uuidv4();
									return (
										<Box p={2} paddingTop={1}>
											<Card text={card} id={card} index={index} />
										</Box>
									);
								})}
								{provided.placeholder}
							</ul>
						);
					}}
				</Droppable>
			</Box>

			<Box p={2} paddingTop={2}>
				<Footer />
			</Box>
		</Box>
	);
};

export default Section;
