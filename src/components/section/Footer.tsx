import { Text, Box, Image, Badge, Divider, Flex, useColorModeValue, IconButton } from "@chakra-ui/react";
import Card from "../card";
import { Header } from "./Header";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";
interface Props {
	name: string;
}

export const Footer: React.FC<Props> = (props) => {
	const { name } = props;
	const [isHovering, setIsHovering] = React.useState(false);

	const cards = ["Test", "hhhehfsofhsofshofhsofhsofhoshe", "test card so  hthehtoethoehtoehtoeno  ehtoentoheotheoh ohtoeh tohet "];
	return (
		<Box backgroundColor="gray.50" onClick={() => {}} _hover={{ bg: "gray.200" }} borderRadius={5}>
			<Flex p={0} w="full" alignItems="center" justifyContent="center">
				<Box w="full" maxW="sm" mx="auto" px={1} py={1} rounded="md">
					<Box px={1}>
						<Text color={"gray.500"}>
							<AddIcon fontSize={12} mb={1} />
							&nbsp;New
						</Text>
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};

export default Footer;
