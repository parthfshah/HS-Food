// SplitComponent.js
import React from "react"
import {
	SimpleGrid,
	Box,
	Flex,
	Image,
	Text,
	chakra,
	Icon,
} from "@chakra-ui/react"
import { FiExternalLink } from "react-icons/fi"

const SplitComponent = () => {
	return (
		<SimpleGrid
			columns={{
				base: 1,
				md: 2,
			}}
			spacing={0}
		>
			<Flex bg="brand.400">
				<Image
					src="https://static.vecteezy.com/system/resources/previews/000/661/832/non_2x/indian-food-vada-pav-with-mint-sauce-vector.jpg"
					alt="3 women looking at a laptop"
					fit="cover"
					w="full"
					h={{
						base: 64,
						md: "full",
					}}
					bg="gray.100"
					loading="lazy"
					opacity={1}
				/>
			</Flex>
			<Flex
				direction="column"
				alignItems="start"
				justifyContent="center"
				px={{
					base: 4,
					md: 8,
					lg: 20,
				}}
				py={24}
				zIndex={3}
			>
				<chakra.span
					color="brand.600"
					_dark={{
						color: "gray.300",
					}}
					fontSize="lg"
					textTransform="uppercase"
					fontWeight="extrabold"
				>
					Enjoy the Flavor of Vadapav at HS Food
				</chakra.span>

				<chakra.p
					pr={{
						base: 0,
						lg: 16,
					}}
					mb={4}
					fontSize="lg"
					color="brand.600"
					_dark={{
						color: "gray.400",
					}}
					letterSpacing="wider"
				>
					HS Food is Ahmedabad's top spot for
					delicious Vadapav. Our commitment to
					quality and taste makes us the ultimate
					destination for Vadapav lovers. Join us
					for a delightful experience and savor
					the essence of authentic street food.
				</chakra.p>
				<Box
					as="a"
					href="/menu.pdf" // Replace with the actual path to your PDF file
					target="_blank" // Open the link in a new tab/window
					rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
					rounded="md"
					shadow="md"
				>
					<chakra.a
						mt={2}
						display="inline-flex"
						alignItems="center"
						justifyContent="center"
						px={5}
						py={3}
						border="solid transparent"
						fontWeight="bold"
						w="full"
						rounded="md"
						color="black" // Set text color to white
						bg="brand.600"
						_dark={{
							bg: "brand.500",
						}}
						_hover={{
							bg: "brand.700",
							_dark: {
								bg: "brand.600",
							},
						}}
					>
						View our Menu
						<Icon as={FiExternalLink} ml={2} />
					</chakra.a>
				</Box>
			</Flex>
		</SimpleGrid>
	)
}

export default SplitComponent
