import { Box, Text, Container, VStack, HStack, Divider, Center } from "@chakra-ui/react";
import { DragDropContext } from "react-beautiful-dnd";
import React from "react";
import Section from "src/components/section";
import Header from "./Header";
import AddSection from "../section/AddSection";
import { addSection } from "src/lib/api/sectionCrud";

interface Props {}

export const Home: React.FC<Props> = (props) => {
	const [sections, setSections] = React.useState([]);

	const getSections = async () => {
		const res = await fetch("http://localhost:3000/api/workspaces/1/sections");

		let x = await res.json();
		x = x.data;
		console.log("x", x);

		setSections(x);
	};

	React.useEffect(() => {
		getSections();
	});

	return (
		<>
			<Header />
			<Container maxW="container.xl" paddingTop="120">
				<Center>
					<Box p="6" style={{ justifyContent: "center", alignContent: "center" }}>
						<HStack spacing={"30px"}>
							<DragDropContext onDragEnd={() => console.log("")}>
								{sections.map(({ name, _id }) => (
									<Section name={name} id={_id} />
								))}
							</DragDropContext>
							<AddSection />
						</HStack>
					</Box>
				</Center>
			</Container>
		</>
	);
};

export default Home;
