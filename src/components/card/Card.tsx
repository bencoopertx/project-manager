import { IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { DropTarget, useDrag, ConnectDropTarget, useDrop } from "react-dnd";

const knightStyle: CSSProperties = {};

interface Props {
	text: string;
}

const handleHover = () => {};

export const Card: React.FC<Props> = (props) => {
	const { text, connectDropTarget, isShiftedDown } = props;
	const [bottomPadding, setBottomPadding] = React.useState(0);
	const [currentHeight, setCurrentHeight] = React.useState(0);
	const [testRefState, setTestRefState] = React.useState(undefined);

	const ref = React.useRef(null);
	const ref2 = React.useRef(null);

	React.useEffect(() => {
		// setting the client height that is passed to useDrop
		setCurrentHeight(ref.current.clientHeight);
		setTestRefState(ref);
	});

	// this is the stuff we send over on drag
	const [{ isDragging }, drag, preview] = useDrag(
		() => ({
			type: "card",
			item: { id: "hey", item: currentHeight, ref: ref },
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
		hover: (item, monitor) => {
			const item2 = monitor.getItem();
			console.log("item", item.ref.current.clientHeight);
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
				itemRef={ref2}
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
