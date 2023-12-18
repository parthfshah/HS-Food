import React from "react"
import {
	Box,
	Flex,
	Link as ChakraLink,
	ChakraProvider,
	Image,
	VStack,
	Text,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<ChakraProvider>
			<Box bg="teal.500" p="4" color="white">
				<Flex
					justify="space-around"
					align="start"
					maxW="1200px"
					marginInline="auto"
				>
					{/* Logo and Content Section */}
					<VStack
						align="start"
						spacing={4}
						flex="2"
					>
						<Image
							src="logo.jpg"
							alt="logo"
							className="m-3"
							boxSize="100px"
						/>
						<Text>
							HS Food is Ahmedabad's favourite
							place for tasty food junction. We
							strive to provide the best
							experience to our guests.
						</Text>
					</VStack>

					{/* Useful Links Section */}
					<VStack
						align="start"
						spacing={8}
						flex="2"
					>
						<Text fontSize="lg" fontWeight="bold">
							Useful Links
						</Text>
						<UnorderedList>
							<ListItem>
								<ChakraLink
									as={Link}
									to="/"
									color="white"
								>
									Home
								</ChakraLink>
							</ListItem>
							<ListItem>
								<ChakraLink
									as={Link}
									to="/about"
									color="white"
								>
									About Us
								</ChakraLink>
							</ListItem>
							<ListItem>
								<ChakraLink
									as={Link}
									to="/menu"
									color="white"
								>
									Menu
								</ChakraLink>
							</ListItem>
							<ListItem>
								<ChakraLink
									as={Link}
									to="/gallery"
									color="white"
								>
									Gallery
								</ChakraLink>
							</ListItem>
						</UnorderedList>
					</VStack>

					{/* Contact Information Section */}
					<VStack
						align="start"
						spacing={8}
						flex="3"
					>
						<Text fontSize="lg" fontWeight="bold">
							Contact Us
						</Text>
						<UnorderedList>
							<ListItem>+91 9426170564</ListItem>
							<ListItem>
								Shayona Aagman, Vande Matram Road,
								Gota, Ahmedabad, Gujarat-382481
							</ListItem>
						</UnorderedList>
					</VStack>
				</Flex>

				{/* Copyright and Social Icons Section */}
				<Box mt={8} textAlign="center">
					<Text mb={2} pb={3}>
						Copyright © 2023 - HS Food
					</Text>
					<Flex justify="center">
						<ChakraLink href="#" mx={2}>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 9.86967C10.0377 6.62167 8.31651 5 6.83534 5C4.61303 5 3.20964 7.58183 2.39071 11.0865C1.60846 14.4337 1.83513 19 4.61303 19C5.85086 19 7.55537 17.1742 9.22211 14.7393C10.3333 13.1165 11.2589 11.4925 12 9.86967ZM12 9.86967C13.9623 6.62167 15.6835 5 17.1647 5C19.387 5 20.7904 7.58183 21.6093 11.0865C22.3915 14.4337 22.1649 19 19.387 19C18.1491 19 16.4446 17.1742 14.7779 14.7393C13.6667 13.1165 12.7411 11.4925 12 9.86967Z"
									stroke="#fff"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</ChakraLink>
						<ChakraLink href="#" mx={2}>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
									stroke="#fff"
									strokeWidth="1.5"
									strokeLinejoin="round"
								/>
								<path
									d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
									stroke="#fff"
									strokeWidth="1.5"
								/>
								<path
									d="M17.5078 6.5L17.4988 6.5"
									stroke="#fff"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</ChakraLink>
					</Flex>
				</Box>
			</Box>
		</ChakraProvider>
	)
}

export default Footer
