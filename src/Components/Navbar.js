import React from "react"
import { Link } from "react-router-dom"
import {
	Flex,
	Box,
	Image,
	Link as ChakraLink,
	Button,
	Input,
	InputGroup,
	InputRightElement,
	ChakraProvider,
} from "@chakra-ui/react"

const Navbar = () => {
	return (
		<Flex
			as="nav"
			bg="teal.500"
			p="4"
			justify="space-between"
			align="center"
		>
			{/* Navbar Links */}
			<Box>
				<ChakraLink
					as={Link}
					to="/"
					color="white"
					marginRight="4"
				>
					Home
				</ChakraLink>
				<ChakraLink
					as={Link}
					to="/about"
					color="white"
					marginRight="4"
				>
					About
				</ChakraLink>
				<ChakraLink
					as={Link}
					to="/menu"
					color="white"
					marginRight="4"
				>
					Menu
				</ChakraLink>
				<ChakraLink
					as={Link}
					to="/contact"
					color="white"
					marginRight="4"
				>
					Contact
				</ChakraLink>
			</Box>

			{/* Logo and Brand Name */}
			<ChakraLink
				as={Link}
				to="/"
				color="white"
				textDecoration="none"
				display="flex"
				alignItems="center"
			>
				<Image
					src="/logo.jpg"
					alt="logo"
					boxSize="40px"
					marginRight="2"
				/>
				<span>HS Food</span>
			</ChakraLink>

			{/* Search Form */}
			<form className="d-flex">
				<InputGroup size="md">
					<Input
						type="search"
						placeholder="Search Here..."
					/>
					<InputRightElement width="4.5rem">
						<Button
							h="1.75rem"
							size="sm"
							colorScheme="teal"
						>
							Search
						</Button>
					</InputRightElement>
				</InputGroup>
			</form>
		</Flex>
	)
}

export default Navbar
