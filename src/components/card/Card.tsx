import { IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { DropTarget, useDrag, ConnectDropTarget, useDrop } from "react-dnd";
import { Ref } from "@types/react";

const knightStyle: CSSProperties = {};

interface Props {
	text: string;
	id: string;
}

interface Item {
	ref: any;
	id: string;
}

export const Card: React.FC<Props> = (props) => {
	const { text, id } = props;
	const [cardHeight, setCardHeight] = React.useState(0);
	const [padding, setPadding] = React.useState(0);
	const ref = React.useRef(null);

	React.useEffect(() => {
		setCardHeight(ref.current.clientHeight);
	}, []);

	// this is the stuff we send over on drag
	const [{ isDragging }, drag, preview] = useDrag(
		() => ({
			type: "card",
			item: { ref: ref, id: id, height: cardHeight },
			collect: (monitor) => ({
				isDragging: !!monitor.isDragging(),
			}),
		}),
		[]
	);

	// this how we interact w/ stuff sent on drag
	const [{ canDrop, isOverCurrent }, drop] = useDrop({
		accept: "card",
		canDrop: () => true,
		hover: (item: Item, monitor) => {
			// don't apply if on the same object
			console.log("item height", item.height);

			setPadding(item.height);

			// get direction of hover.

			// move

			// somehow get rid of adjustments on not hovering
		},
		collect: (monitor) => ({
			hovered: monitor.isOver(),
			canDrop: monitor.canDrop(),
			isOverCurrent: monitor.isOver({ shallow: true }),
		}),
	});
	drop(ref);
	React.useEffect(() => {
		setPadding(0);
	}, [isOverCurrent]);
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
					height: isDragging ? 0 : "auto",
				}}
				mb={padding}
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
