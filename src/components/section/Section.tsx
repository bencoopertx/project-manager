import { Text, Box, Image, Badge, Divider, Container } from "@chakra-ui/react";
import Card from "../card";
import Footer from "./Footer";
import { Header } from "./Header";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Draggable, Droppable, DroppableProps } from "react-beautiful-dnd";
import { AddCard } from "../cardForms/AddCard";
import React from "react";
interface Props {
	name: string;
}

export const Section: React.FC<Props> = (props) => {
	const { name } = props;
	let id = 0;
	const cards = ["Test", "Hdjdjdjdjdjjdjdjdjjdjdjdjdjdjdjjdjdjjdjdjdey", "are"];
	const [addVisible, setAddVisible] = React.useState(true);
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
									return <Card text={card} id={card} index={index} />;
								})}
								{provided.placeholder}
							</ul>
						);
					}}
				</Droppable>
			</Box>

			<Box p={2} paddingTop={2}>
				{addVisible ? <AddCard /> : <Footer />}
			</Box>
		</Box>
	);
};

export default Section;
