import { Box, Text, Container, VStack, HStack, Divider } from "@chakra-ui/react";
import Section from "src/components/section";
import Header from "./Header";

export const Home = () => {
	const sections = ["To Do", "Doing", "Done"];

	return (
		<>
			<Header />
			<Container maxW="container.xl" paddingTop="120">
				<Box p="6">
					<HStack spacing={"24px"}>
						{sections.map((value) => (
							<Section name={value} />
						))}
					</HStack>
				</Box>
			</Container>
		</>
	);
};

export default Home;
