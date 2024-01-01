import React from "react"
import {
	Box,
	Heading,
	Text,
	Link,
	VStack,
	Flex,
	Spacer,
	IconButton,
} from "@chakra-ui/react"
import {
	FaFilePdf,
	FaExternalLinkAlt,
} from "react-icons/fa"

const Menu = () => {
	return (
		<VStack spacing={6} align="stretch">
			<Box p={6} boxShadow="lg" borderRadius="md">
				<Heading mb={4} textAlign="center">
					Menu
				</Heading>
				<iframe
					title="Menu PDF"
					src="https://docs.google.com/gview?url=hsfood.in/menu.pdf&embedded=true"
					width="100%"
					height="500px"
					frameBorder="0"
					scrolling="auto"
				></iframe>
				<Text mt={4} textAlign="center">
					If you are unable to view the Menu, you
					can{" "}
					<Link
						href="/menu.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						download the PDF file
					</Link>
					.
				</Text>
			</Box>

			<Flex justify="center" align="center">
				<Text fontSize="xl" mr={2}>
					View on Google Docs:
				</Text>
				<Link
					href="https://docs.google.com/gview?url=hsfood.in/menu.pdf&embedded=true"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconButton
						aria-label="View on Google Docs"
						icon={<FaExternalLinkAlt />}
						size="md"
					/>
				</Link>
			</Flex>

			<Flex justify="center" align="center">
				<Text fontSize="xl" mr={2}>
					Download PDF:
				</Text>
				<Link
					href="/menu.pdf"
					target="_blank"
					rel="noopener noreferrer"
					download
				>
					<IconButton
						aria-label="Download PDF"
						icon={<FaFilePdf />}
						size="md"
					/>
				</Link>
			</Flex>
		</VStack>
	)
}

export default Menu
