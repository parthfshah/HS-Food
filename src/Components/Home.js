import React from "react"
import { Link } from "react-router-dom"
import {
	Box,
	Image,
	Text,
	Flex,
	Heading,
	Container,
	Icon,
} from "@chakra-ui/react"
import {
	FaWhatsapp,
	FaArrowUp,
} from "react-icons/fa"
import { motion } from "framer-motion"
import menuItems from "../Store/menu" // Import the menu items

const MotionBox = motion(Box)

const Home = () => {
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	}

	const itemHoverVariants = {
		hover: { scale: 1.1 },
	}

	return (
		<>
			<Container maxW="container.xl" mt={8}>
				<Flex wrap="wrap" justify="center">
					{menuItems.map((item) => (
						<MotionBox
							key={item.id}
							m={3}
							p={0}
							w={[
								"100%",
								"100%",
								"100%",
								"50%",
								"33.33%",
							]}
							variants={itemVariants}
							initial="hidden"
							animate="visible"
							whileHover="hover"
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.5 }}
							_hover={itemHoverVariants}
						>
							<Image
								src={item.image}
								alt={item.name}
								h="15rem"
								w="100%"
								objectFit="cover"
							/>
							<Box p={2}>
								<Heading
									as="h3"
									fontSize="xl"
									mb={2}
								>
									{item.name}
								</Heading>
								<Text fontSize="md" mb={2}>
									{item.description}
								</Text>
								<Text
									fontSize="lg"
									fontWeight="bold"
								>
									Rs. {item.price.toFixed(2)}
								</Text>
							</Box>
						</MotionBox>
					))}
					<Link to="/" className="whatsapp">
						<Icon
							as={FaWhatsapp}
							boxSize={8}
							color="green.500"
						/>
					</Link>
				</Flex>
				<Link to="#top" className="top">
					<Icon
						as={FaArrowUp}
						boxSize={8}
						color="blue.500"
					/>
				</Link>
			</Container>
		</>
	)
}

export default Home
