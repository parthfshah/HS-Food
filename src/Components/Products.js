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

const ProductCard = ({
	image,
	title,
	description,
	hoverDescription,
}) => {
	const [isHovered, setIsHovered] =
		React.useState(false)

	return (
		<Box
			maxW="300px"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			m={4}
			position="relative"
			_hover={{
				transform: "rotateY(180deg)",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
			}}
			transition="transform 0.6s ease-in-out, box-shadow 0.3s ease-in-out"
		>
			<Box className="card-inner">
				<Box className="card-front">
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
					className="card-back"
					transform={`rotateY(180deg)${
						isHovered ? " rotateY(180deg)" : ""
					}`}
					style={{
						backfaceVisibility: "hidden",
						transformStyle: "preserve-3d",
						position: "absolute",
						top: "0",
						left: "0",
						right: "0",
						bottom: "0",
					}}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<Box p={4}>
						<Text>
							{isHovered ? hoverDescription : ""}
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

const Products = () => {
	const productsData = [
		{
			title: "French Fries",
			image: "path/to/french-fries.jpg",
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
