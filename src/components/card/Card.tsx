import { Text } from "@chakra-ui/react";
import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";

interface Props {
	text: string;
}

export const Card: React.FC<Props> = (props) => {
	const { text } = props;
	return (
		<Flex p={0} w="full" alignItems="center" justifyContent="center">
			<Box w="full" maxW="sm" mx="auto" px={2} py={2} bg={useColorModeValue("white", "gray.800")} shadow="md" rounded="md">
				<Box>
					<Text>{text}</Text>
				</Box>

				<Box></Box>
			</Box>
		</Flex>
	);
};
export default Card;
