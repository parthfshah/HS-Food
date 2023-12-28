// SplitComponent.js
import React from "react"
import {
	Box,
	Flex,
	Image,
	Text,
} from "@chakra-ui/react"

const SplitComponent = () => {
	return (
		<Flex
			direction={{ base: "column", md: "row" }}
			maxW="1200px"
			mx="auto"
			p={8}
		>
			{/* Left side (Image) */}
			<Box flex={{ base: 1, md: 1 }}>
				<Image
					src={
						"https://static.vecteezy.com/system/resources/previews/000/661/832/non_2x/indian-food-vada-pav-with-mint-sauce-vector.jpg"
					}
					alt="Coffee Shop"
					objectFit="cover"
					borderRadius="md"
					h={{ base: "200px", md: "400px" }}
				/>
			</Box>

			{/* Right side (Text) */}
			<Box
				flex={{ base: 1, md: 1 }}
				ml={{ base: 0, md: 8 }}
				mt={{ base: 4, md: 0 }}
			>
				<Text
					fontSize="xl"
					fontWeight="bold"
					mb={4}
				>
					Enjoy the Flavor of Vadapav at HS Food
				</Text>
				<Text mb={4}>
					HS Food is Ahmedabad's top spot for
					delicious Vadapav. Our commitment to
					quality and taste makes us the ultimate
					destination for Vadapav lovers. Join us
					for a delightful experience and savor
					the essence of authentic street food.
				</Text>
			</Box>
		</Flex>
	)
}

export default SplitComponent
