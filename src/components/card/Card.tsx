import { IconButton, Text, Container } from "@chakra-ui/react";
import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { DropTarget, useDrag, ConnectDropTarget, useDrop } from "react-dnd";
import { Ref } from "@types/react";
import { Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const knightStyle: CSSProperties = {};

interface Props {
	text: string;
	id: string;
	index: number;
}

interface Item {
	ref: any;
	id: string;
}

export const Card: React.FC<Props> = (props) => {
	const { text, id, index } = props;
	const [cardHeight, setCardHeight] = React.useState(0);
	const [padding, setPadding] = React.useState(0);
	const ref = React.useRef(null);

	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<Box {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} p={2} paddingTop={1}>
					<div ref={ref}>
						<div>
							<Flex
								p={0}
								w="full"
								alignItems="center"
								justifyContent="center"
								style={{
									...knightStyle,
								}}
								mt={padding}
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
						</div>
					</div>
				</Box>
			)}
		</Draggable>
	);
};

export default Card;
