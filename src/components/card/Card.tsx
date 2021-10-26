import { IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

interface Props {
	text: string;
}

export const Card: React.FC<Props> = (props) => {
	const { text } = props;
	return (
		<Flex p={0} w="full" alignItems="center" justifyContent="center">
			<Box w="full" maxW="sm" mx="auto" px={1} py={1} bg={useColorModeValue("white", "gray.800")} borderWidth="1px" rounded="md">
				<Box style={{ float: "right" }}>
					<IconButton colorScheme="gray" aria-label="Search database" icon={<EditIcon />} size="sm" variant="ghost" />
				</Box>
				<Box px={1}>
					<Text>{text}</Text>
				</Box>
			</Box>
		</Flex>
	);
};
export default Card;
