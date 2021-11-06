import { IconButton, Text, Container } from "@chakra-ui/react";
import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link, useDisclosure, Input, Button, FormLabel, FormControl, FormErrorMessage, Textarea } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { DropTarget, useDrag, ConnectDropTarget, useDrop } from "react-dnd";
import { Ref } from "@types/react";
import { Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import AddModal from "../cardForms/EditModal";
import { Formik, Form, Field } from "formik";

interface Props {
	onSubmit: (name: string) => any;
}

export const AddCard: React.FC<Props> = (props) => {
	const { onSubmit } = props;
	const [cardHeight, setCardHeight] = React.useState(0);
	const [padding, setPadding] = React.useState(0);
	const ref = React.useRef(null);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box px={0}>
			<div>
				<div>
					<Formik
						initialValues={{ name: "" }}
						validate={(values) => {
							const errors = {};
							if (!values.name) {
								errors.name = "Required";
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
								onSubmit(values.name);
							}, 400);
						}}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
							/* and other goodies */
						}) => (
							<Form>
								<Field name="name">
									{({ field, form }) => (
										<div>
											<Flex p={0} w="full" alignItems="center" justifyContent="center" style={{}} mt={padding}>
												<Box w="full" maxW="sm" mx="auto" rounded="md" bg={useColorModeValue("white", "gray.800")}>
													<Box style={{ float: "right" }}></Box>
													<Box>
														<FormControl>
															<Textarea {...field} id="name" placeholder="Enter title for card..." w="full" maxW="sm" mx="auto" px={1} py={1} rounded="md" resize="vertical" maxH={250} />
														</FormControl>
													</Box>
												</Box>
											</Flex>
										</div>
									)}
								</Field>
								<Button mt={4} colorScheme="teal" type="submit" size="md">
									Submit
								</Button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</Box>
	);
};

export default AddCard;
