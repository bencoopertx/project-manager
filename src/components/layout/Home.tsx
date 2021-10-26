import { Box, Text, Container, VStack, HStack, Divider, Center } from "@chakra-ui/react";
import Section from "src/components/section";
import Header from "./Header";

export const Home = () => {
	const sections = ["To Do", "Doing", "Done"];

	return (
		<>
			<Header />
			<Container maxW="container.xl" paddingTop="120">
				<Center>
					<Box p="6" style={{ justifyContent: "center", alignContent: "center" }}>
						<HStack spacing={"30px"}>
							{sections.map((value) => (
								<Section name={value} />
							))}
						</HStack>
					</Box>
				</Center>
			</Container>
		</>
	);
};

export default Home;
