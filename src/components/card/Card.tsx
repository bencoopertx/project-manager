import { IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useDrag } from "react-dnd";

interface Props {
	text: string;
}
const knightStyle: CSSProperties = {};

export const Card: React.FC<Props> = (props) => {
	const { text } = props;
	const [{ isDragging }, drag, preview] = useDrag(
		() => ({
			type: "card",
			collect: (monitor) => ({
				isDragging: !!monitor.isDragging(),
			}),
		}),
		[]
	);

	return (
		<Flex
			p={0}
			w="full"
			alignItems="center"
			justifyContent="center"
			ref={drag}
			style={{
				...knightStyle,
				opacity: isDragging ? 0 : 1,
			}}
		>
			<Box w="full" maxW="sm" mx="auto" px={1} py={1} bg={useColorModeValue("white", "gray.800")} borderWidth="1px" rounded="md" _hover={{ backgroundColor: "gray.50" }}>
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
