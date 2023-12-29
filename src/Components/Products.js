// Products.js
import React from "react"
import {
	Box,
	Flex,
	Heading,
	Text,
	Image,
	Center,
} from "@chakra-ui/react"
// ... (imports)

import ReactFlipCard from "reactjs-flip-card"

const ProductCard = ({
	image,
	title,
	description,
	hoverDescription,
}) => {
	return (
		<ReactFlipCard // Use ReactFlipCard for card flipping
			flipDirection="horizontal" // Specify flip direction
			flipOnHover
		>
			<Box
				// ... (retain existing styles and layout for the front card)
				className="card-front"
				// ...
			>
				<Image
					src={image}
					alt={title}
					h="200px"
					objectFit="cover"
				/>
				<Box p={4}>
					<Heading fontSize="xl" mb={2}>
						{title}
					</Heading>
					<Text>{description}</Text>
				</Box>
			</Box>
			<Box
				// ... (retain existing styles and layout for the back card)
				className="card-back"
				// ...
			>
				<Box p={4}>
					<Center h="100%">
						<Text>{hoverDescription}</Text>
					</Center>
				</Box>
			</Box>
		</ReactFlipCard>
	)
}

const Products = () => {
	const productsData = [
		{
			title: "French Fries",
			image: "/logo.jpg",
			description: "Fries are my spirit animal.",
			hoverDescription: "French Fries",
		},
		// Add more products as needed
	]

	return (
		<Box>
			<Center>
				<Heading as="h2" fontSize="2xl" my={8}>
					OUR PRODUCTS
				</Heading>
			</Center>
			<Flex
				flexWrap="wrap"
				justifyContent="center"
			>
				{productsData.map((product, index) => (
					<ProductCard key={index} {...product} />
				))}
			</Flex>
		</Box>
	)
}

export default Products
