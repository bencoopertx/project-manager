import { Text, Box, Image, Badge, Divider, Container } from "@chakra-ui/react";
import Card from "../card";
import Footer from "./Footer";
import { Header } from "./Header";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Draggable, Droppable, DroppableProps } from "react-beautiful-dnd";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Lorem } from "@chakra-ui/react";
interface Props {
	isOpen: boolean;
	onOpen: () => {};
	onClose: () => {};
}

export const AddModal: React.FC<Props> = (props) => {
	const { isOpen, onOpen, onClose } = props;
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody></ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost">Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddModal;
