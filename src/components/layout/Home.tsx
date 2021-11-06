import { Box, Text, Container, VStack, HStack, Divider, Center } from "@chakra-ui/react";
import { DragDropContext } from "react-beautiful-dnd";
import React from "react";
import Section from "src/components/section";
import Header from "./Header";
import AddSection from "../section/AddSection";
import { addSection } from "src/lib/api/sectionCrud";
import { dragCard } from "src/lib/api/cardCrud";
import { SectionContext } from "src/contexts/SectionContext";

interface Props {}

export const Home: React.FC<Props> = (props) => {
	const [sections, setSections] = React.useState([]);
	const [sectionIdToRefresh, setSectionIdToRefresh] = React.useState([]);
	const {} = React.useContext(SectionContext);

	const getSections = async () => {
		const res = await fetch("http://localhost:3000/api/workspaces/1/sections");

		let x = await res.json();
		x = x.data;

		setSections(x);
	};

	React.useEffect(() => {
		getSections();
	});

	return (
		<>
			<SectionContext.Provider value={{ sectionIdToRefresh: "", setSectionIdToRefresh: () => {} }}>
				<Header />
				<Container maxW="full" paddingTop="120">
					<Center>
						<Box p="6" style={{ justifyContent: "center", alignContent: "center", minWidth: 250 }} height={2000} overflowX="scroll">
							<HStack spacing={"25px"}>
								<DragDropContext
									onDragEnd={(result, provided) => {
										dragCard(result.draggableId, { index: result.destination.index, sectionId: result.destination.droppableId });
										getSections();
									}}
									onDragUpdate={(result, provided) => console.log("drag update", result, provided)}
								>
									{sections.map(({ name, _id }) => (
										<Box style={{ minWidth: 230 }}>
											<Section name={name} id={_id} />
										</Box>
									))}
								</DragDropContext>
								<AddSection />
							</HStack>
						</Box>
					</Center>
				</Container>
			</SectionContext.Provider>
		</>
	);
};

export default Home;
