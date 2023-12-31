import React from "react"
import { Link } from "react-router-dom"
import {
	useColorMode,
	useColorModeValue,
	useDisclosure,
	chakra,
	Flex,
	IconButton,
	VStack,
	CloseButton,
	Button,
	HStack,
	Link as ChakraLink,
	Stack,
	SimpleGrid,
	Icon,
	Box,
	Image,
	Popover,
	PopoverTrigger,
	PopoverContent,
	VisuallyHidden,
} from "@chakra-ui/react"

import { FaMoon, FaSun } from "react-icons/fa"
import {
	AiFillHome,
	AiOutlineInbox,
	AiOutlineMenu,
} from "react-icons/ai"
import { BsFillCameraVideoFill } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"

const Navbar = () => {
	const bg = useColorModeValue(
		"white",
		"gray.800"
	)
	const mobileNav = useDisclosure()
	return (
		<React.Fragment>
			<chakra.header
				bg={bg}
				w="full"
				px={{
					base: 2,
					sm: 4,
				}}
				py={4}
				shadow="md"
			>
				<Flex
					alignItems="center"
					justifyContent="space-between"
					mx="auto"
				>
					<Flex>
						<chakra.a
							href="/"
							title="Home Page"
							display="flex"
							alignItems="center"
						>
							<VisuallyHidden></VisuallyHidden>
						</chakra.a>
						<chakra.h1
							fontSize="xl"
							fontWeight="medium"
							ml="2"
						>
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
									boxSize="5rem"
									width={"100%"}
									marginRight="2"
								/>
								<span>HS Food</span>
							</ChakraLink>
						</chakra.h1>
					</Flex>
					<HStack
						display="flex"
						alignItems="center"
						spacing={1}
					>
						<HStack
							spacing={1}
							mr={1}
							color="brand.500"
							display={{
								base: "none",
								md: "inline-flex",
							}}
						>
							<Button variant="ghost">
								About
							</Button>
							<Button
								variant="ghost"
								as={Link}
								to="/menu.pdf"
							>
								Menu
							</Button>
							<Button variant="ghost">
								Gallery
							</Button>
							<Button variant="ghost">
								Contact
							</Button>
						</HStack>
						<Button colorScheme="brand" size="sm">
							Get Started
						</Button>
						<Box
							display={{
								base: "inline-flex",
								md: "none",
							}}
						>
							<IconButton
								display={{
									base: "flex",
									md: "none",
								}}
								aria-label="Open menu"
								fontSize="20px"
								color="gray.800"
								_dark={{
									color: "inherit",
								}}
								variant="ghost"
								icon={<AiOutlineMenu />}
								onClick={mobileNav.onOpen}
							/>

							<VStack
								pos="absolute"
								top={0}
								left={0}
								right={0}
								display={
									mobileNav.isOpen
										? "flex"
										: "none"
								}
								flexDirection="column"
								p={2}
								pb={4}
								m={2}
								bg={bg}
								spacing={3}
								rounded="sm"
								shadow="sm"
							>
								<CloseButton
									aria-label="Close menu"
									onClick={mobileNav.onClose}
								/>

								<Button w="full" variant="ghost">
									Features
								</Button>
								<Button w="full" variant="ghost">
									Pricing
								</Button>
								<Button w="full" variant="ghost">
									Blog
								</Button>
								<Button w="full" variant="ghost">
									Company
								</Button>
								<Button w="full" variant="ghost">
									Sign in
								</Button>
							</VStack>
						</Box>
					</HStack>
				</Flex>
			</chakra.header>
		</React.Fragment>
	)
}

export default Navbar
