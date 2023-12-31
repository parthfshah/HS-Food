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
					src="/products/5LSandwich.jpg"
					alt="3 women looking at a laptop"
					fit="cover"
					maxWidth="100%"
					height="auto"
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
					marginBottom={2}
					color="brand.600"
					_dark={{
						color: "gray.300",
					}}
					fontSize="lg"
					textTransform="uppercase"
					fontWeight="extrabold"
				>
					New product: THE 5 LAYER SANDWICH AT HS
					FOOD
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
					HS Food stands as Ahmedabad's premier
					destination for the exquisite 5 Layer
					Sandwich. Our unwavering dedication to
					quality and flavor positions us as the
					go-to place for connoisseurs of this
					delectable creation. Immerse yourself in
					a delightful culinary journey and relish
					the true essence of this exceptional
					addition to our menu. Discover a
					symphony of flavors in every bite at HS
					Food.
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
