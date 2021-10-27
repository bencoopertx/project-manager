import { IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { DropTarget, useDrag, ConnectDropTarget, useDrop } from "react-dnd";

const knightStyle: CSSProperties = {};

interface Props {
	text: string;
}

export const Card: React.FC<Props> = (props) => {
	const { text, connectDropTarget, isShiftedDown } = props;
	const [bottomPadding, setBottomPadding] = React.useState(0);
	const [{ isDragging }, drag, preview] = useDrag(
		() => ({
			type: "card",
			collect: (monitor) => ({
				isDragging: !!monitor.isDragging(),
			}),
		}),
		[]
	);
	const ref = React.useRef(null);
	const [{ canDrop, isOverCurrent }, drop] = useDrop({
		accept: "card",
		canDrop: () => true,
		hover: () => {
			console.log("is hovering");
			setBottomPadding(10);
		},
		collect: (monitor) => ({
			hovered: monitor.isOver(),
			canDrop: monitor.canDrop(),
			isOverCurrent: monitor.isOver({ shallow: true }),
		}),
	});
	drop(ref);

	return (
		<div ref={ref}>
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
				mb={bottomPadding}
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
	);
};

export default Card;
