import React from "react"
import {
	chakra,
	Box,
	Flex,
	Image,
	VStack,
	Icon,
	Text,
	Stack,
	HStack,
	Divider,
} from "@chakra-ui/react"

import {
	FaFacebookF,
	FaInstagram,
} from "react-icons/fa"

import { Link } from "react-router-dom"

const Footer = () => {
	return (
		// <Box
		// 	bg="white"
		// 	_dark={{
		// 		bg: "gray.600",
		// 	}}
		// >
		// 	<Stack
		// 		direction={{
		// 			base: "column",
		// 			lg: "row",
		// 		}}
		// 		w="full"
		// 		justify="space-between"
		// 		p={10}
		// 	>
		// 		<Flex justify="center">
		// 			<Image
		// 				src="/logo.jpg"
		// 				alt="Company Logo"
		// 				rounded="lg"
		// 				width={{
		// 					base: "150px",
		// 					lg: "200px",
		// 				}}
		// 				height={{
		// 					base: "75px",
		// 					lg: "100px",
		// 				}}
		// 				my={{
		// 					base: 2,
		// 					lg: 0,
		// 				}}
		// 			/>
		// 		</Flex>
		// 		<HStack
		// 			alignItems="start"
		// 			flex={1}
		// 			justify="space-around"
		// 			fontSize={{
		// 				base: "12px",
		// 				md: "16px",
		// 			}}
		// 			color="gray.800"
		// 			_dark={{
		// 				color: "white",
		// 			}}
		// 			textAlign={{
		// 				base: "center",
		// 				md: "left",
		// 			}}
		// 		>
		// 			<Flex
		// 				justify="start"
		// 				direction="column"
		// 			>
		// 				<Link textTransform="uppercase">
		// 					Pre-Sale FAQS
		// 				</Link>
		// 				<Link textTransform="uppercase">
		// 					Submit a ticket
		// 				</Link>
		// 			</Flex>
		// 			<Flex
		// 				justify="start"
		// 				direction="column"
		// 			>
		// 				<Link textTransform="uppercase">
		// 					Services
		// 				</Link>
		// 				<Link textTransform="uppercase">
		// 					Theme Tweak
		// 				</Link>
		// 			</Flex>
		// 		</HStack>
		// 		<HStack
		// 			alignItems="start"
		// 			flex={1}
		// 			justify="space-around"
		// 			fontSize={{
		// 				base: "12px",
		// 				md: "16px",
		// 			}}
		// 			color="gray.800"
		// 			_dark={{
		// 				color: "white",
		// 			}}
		// 			textAlign={{
		// 				base: "center",
		// 				md: "left",
		// 			}}
		// 		>
		// 			<Flex
		// 				justify="start"
		// 				direction="column"
		// 			>
		// 				<Link textTransform="uppercase">
		// 					Show Case
		// 				</Link>
		// 				<Link textTransform="uppercase">
		// 					Widget Kit
		// 				</Link>
		// 				<Link textTransform="uppercase">
		// 					Support
		// 				</Link>
		// 			</Flex>
		// 			<Flex
		// 				justify="start"
		// 				direction="column"
		// 			></Flex>
		// 		</HStack>
		// 	</Stack>
		// 	<Divider
		// 		w="95%"
		// 		mx="auto"
		// 		color="gray.600"
		// 		_dark={{
		// 			color: "#F9FAFB",
		// 		}}
		// 		h="3.5px"
		// 	/>
		// 	<VStack py={3}>
		// 		<HStack justify="center">
		// 			<Link>
		// 				<Icon
		// 					color="gray.800"
		// 					_dark={{
		// 						color: "white",
		// 					}}
		// 					h="20px"
		// 					w="20px"
		// 					as={FaFacebookF}
		// 				/>
		// 			</Link>
		// 			<Link>
		// 				<Icon
		// 					color="gray.800"
		// 					_dark={{
		// 						color: "white",
		// 					}}
		// 					h="20px"
		// 					w="20px"
		// 					{...{ as: FaInstagram }}
		// 				/>
		// 			</Link>
		// 		</HStack>

		// 		<Text
		// 			textAlign="center"
		// 			fontSize="smaller"
		// 			_dark={{
		// 				color: "white",
		// 			}}
		// 		>
		// 			&copy;Copyright HS Food 2023. All rights
		// 			reserved.
		// 		</Text>
		// 	</VStack>
		// </Box>
		<div>
			<Divider
				orientation="horizontal"
				marginBottom={-10}
			/>
			<Flex
				w="full"
				bg="FFFFff"
				p={50}
				alignItems="center"
				justifyContent="center"
				marginBottom={-10}
			>
				<Flex
					w="full"
					as="footer"
					flexDir={{
						base: "column",
						sm: "row",
					}}
					align="center"
					justify="space-between"
					px="6"
					py="4"
					bg="white"
					_dark={{
						bg: "gray.800",
					}}
				>
					<chakra.a
						href="#"
						fontSize="xl"
						fontWeight="bold"
						color="gray.600"
						_dark={{
							color: "white",
							_hover: {
								color: "gray.300",
							},
						}}
						_hover={{
							color: "gray.700",
						}}
					>
						<Image
							src="/logo.jpg"
							alt="logo"
							boxSize="5rem"
							width={"100%"}
							marginRight="2"
						/>
					</chakra.a>

					<chakra.p
						py={{
							base: "2",
							sm: "0",
						}}
						color="gray.800"
						_dark={{
							color: "white",
						}}
					>
						&copy;Copyright HS Food 2023. All
						rights reserved
					</chakra.p>

					<Flex mx="-2">
						<chakra.a
							href="#"
							mx="2"
							color="gray.600"
							_dark={{
								color: "gray.300",
								_hover: {
									color: "gray.400",
								},
							}}
							_hover={{
								color: "gray.500",
							}}
							aria-label="Reddit"
						>
							<Icon
								boxSize="5"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
							</Icon>
						</chakra.a>

						<chakra.a
							href="#"
							mx="2"
							color="gray.600"
							_dark={{
								color: "gray.300",
								_hover: {
									color: "gray.400",
								},
							}}
							_hover={{
								color: "gray.500",
							}}
							aria-label="Facebook"
						>
							<Icon
								boxSize="5"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
							</Icon>
						</chakra.a>
					</Flex>
				</Flex>
			</Flex>
		</div>
	)
}

export default Footer
