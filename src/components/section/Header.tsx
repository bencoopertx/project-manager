import { Box, Icon, Spacer } from "@chakra-ui/react";
import { Text, Image, Badge, Divider, IconButton, Flex, useDisclosure } from "@chakra-ui/react";
import { PlusSquareIcon, AddIcon } from "@chakra-ui/icons";
import AddModal from "../cardForms/EditModal";

export const Header: React.FC<{ name: string; onAdd: () => {} }> = (props) => {
	const { name } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box>
			<Box p="2" style={{ position: "relative", width: "100%" }}>
				<Flex>
					<Text mt="1" ml="1" fontWeight="medium" fontSize="19" style={{ textAlign: "center" }}>
						{name}
					</Text>
					<Spacer />
					<Box px={1}>
						<IconButton aria-label="Search database" icon={<AddIcon />} size="sm" float={"right"} colorScheme="blue" onClick={onOpen} />
					</Box>
				</Flex>
				<AddModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
			</Box>
			<Divider />
		</Box>
	);
};
