import React from "react"
import { Link } from "react-router-dom"
import {
	ChakraProvider,
	Flex,
	Box,
	Image,
	Link as ChakraLink,
	Button,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react"

const Navbar = () => {
	return (
		<ChakraProvider>
			<Flex as="nav" bg="teal.500" p="4">
				<Box>
					{/* Logo and Brand Name */}
					<Link
						to="/"
						style={{
							color: "white",
							textDecoration: "none",
							display: "flex",
							alignItems: "center",
						}}
					>
						<Image
							src="/logo.jpg"
							alt="logo"
							boxSize="40px"
							marginRight="2"
						/>
						<span>HS Food</span>
					</Link>
				</Box>

				{/* Navbar Links */}
				<Box ml="auto">
					<ChakraLink
						to="/"
						color="white"
						marginRight="4"
						as={Link}
					>
						Home
					</ChakraLink>
					<ChakraLink
						to="/about"
						color="white"
						marginRight="4"
						as={Link}
					>
						About
					</ChakraLink>
					<ChakraLink
						to="/menu"
						color="white"
						marginRight="4"
						as={Link}
					>
						Menu
					</ChakraLink>
					<ChakraLink
						to="/contact"
						color="white"
						marginRight="4"
						as={Link}
					>
						Contact
					</ChakraLink>
				</Box>

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
		</ChakraProvider>
	)
}

export default Navbar
