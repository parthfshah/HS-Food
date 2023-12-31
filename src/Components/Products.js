// Products.js
import React from "react"
import {
	Box,
	Flex,
	Heading,
	Text,
	Image,
	Center,
	Divider,
	AbsoluteCenter,
} from "@chakra-ui/react"
// ... (imports)

import ProductCard from "./ProductCard"
import productsData from "../Store/products"

const Products = () => {
	return (
		<Box>
			<Divider orientation="horizontal" />
			<Center>
				<Heading as="h2" fontSize="2xl" my={8}>
					OUR PRODUCTS
				</Heading>
			</Center>
			<Divider orientation="horizontal" />
			<Flex
				flexWrap="wrap"
				justifyContent="center"
			>
				{productsData.map((product) => (
					<ProductCard
						key={product.title}
						product={product}
					/>
				))}
			</Flex>
		</Box>
	)
}

export default Products
