import { Text, Box, Image, Badge, Divider, Container } from "@chakra-ui/react";
import Card from "../card";
import Footer from "./Footer";
import { Header } from "./Header";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Draggable, Droppable, DroppableProps } from "react-beautiful-dnd";
import { AddCard } from "../cardForms/AddCard";
import React from "react";
import { addCard } from "src/lib/api/cards";
interface Props {
	name: string;
	id: string;
}

export const Section: React.FC<Props> = (props) => {
	const { name, id } = props;
	const [cards, setCards] = React.useState([]);
	const [addVisible, setAddVisible] = React.useState(true);

	const getCards = async () => {
		const res = await fetch(`http://localhost:3000/api/workspaces/1/sections/${id}/cards/`);

		let x = await res.json();
		x = x.data;
		console.log("x", x);
		if (x != undefined) {
			setCards(x);
		}
	};

	React.useState(() => {
		getCards();
	});

	return (
		<Box position="relative" width={230}>
			<Box position="absolute" top={0}>
				<Box borderWidth="1px" borderRadius="lg" width={230} backgroundColor="gray.50" paddingBottom={0}>
					<Header name={name} />

					<Box paddingTop={2}>
						<Droppable droppableId={name}>
							{(provided) => {
								return (
									<ul {...provided.droppableProps} ref={provided.innerRef}>
										{cards.map(({ name }, index) => {
											return <Card text={name} id={name} index={index} />;
										})}
										{provided.placeholder}
									</ul>
								);
							}}
						</Droppable>
					</Box>

					<Box p={2} paddingTop={2}>
						{addVisible ? (
							<AddCard
								onSubmit={(name: string) => {
									addCard({ name: name, sectionId: id });
								}}
							/>
						) : (
							<Footer />
						)}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Section;
