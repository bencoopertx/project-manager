import { Text, Box, Image, Badge, Divider, Flex, useColorModeValue, IconButton, FormControl, Textarea, Button, Input } from "@chakra-ui/react";
import Card from "../card";
import { Header } from "./Header";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { addSection } from "src/lib/api/sectionCrud";
import { Formik, Form, Field } from "formik";

interface Props {}

export const AddSection: React.FC<Props> = (props) => {
	const [isHovering, setIsHovering] = React.useState(false);
	const [didClick, setDidClick] = React.useState(false);
	const toggleDidClick = () => setDidClick(!didClick);

	const submit = (name: string) => {
		addSection({ name: name });
	};

	const cards = ["Test", "hhhehfsofhsofshofhsofhsofhoshe", "test card so  hthehtoethoehtoehtoeno  ehtoentoheotheoh ohtoeh tohet "];
	return (
		<Box position="relative">
			<Box position="absolute" top={0}>
				<Box pl={5}>
					{didClick ? (
						<Box px={0} borderWidth="1px" borderRadius="lg" width={230} backgroundColor="gray.50" paddingBottom={0}>
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
										onSubmit={async (values, actions) => {
											actions.setFieldValue("name", "hey", false);
											actions.setValues({ name: "hey" }, false);
											setTimeout(() => {
												actions.setSubmitting(false);
												submit(values.name);
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
												<Box pt={5} px={2} py={2} mt={2} mb={2}>
													<Field name="name">
														{({ field, form }) => (
															<div>
																<Flex p={0} w="full" alignItems="center" justifyContent="center" style={{}} mt={0}>
																	<Box w="full" maxW="sm" mx="auto" rounded="md" bg={useColorModeValue("white", "gray.800")}>
																		<Box style={{ float: "right" }}></Box>
																		<Box>
																			<Input
																				{...field}
																				{...form}
																				id="name"
																				placeholder="Enter name of section..."
																				w="full"
																				maxW="sm"
																				mx="auto"
																				px={1}
																				py={1}
																				rounded="md"
																				resize="vertical"
																				maxH={250}
																				value={field}
																				defaultValue={values.name}
																			/>
																		</Box>
																	</Box>
																</Flex>
															</div>
														)}
													</Field>
													<Button mt={4} colorScheme="teal" type="submit" size="sm">
														Add section
													</Button>
												</Box>
											</Form>
										)}
									</Formik>
								</div>
							</div>
						</Box>
					) : (
						<IconButton colorScheme="gray" aria-label="Search database" icon={<AddIcon />} size="lg" variant="outline" onClick={toggleDidClick} />
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default AddSection;
