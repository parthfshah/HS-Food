import React from "react"
import {
	Box,
	Heading,
	Text,
	VStack,
	Divider,
	Link,
	Icon,
} from "@chakra-ui/react"
import { FiMapPin } from "react-icons/fi"

const About = () => {
	return (
		<VStack
			spacing={6}
			align="center"
			p={6}
			boxShadow="lg"
			borderRadius="md"
		>
			<Heading as="h2" size="xl">
				About Us
			</Heading>
			<Text>
				Welcome to HS Food! We are a passionate
				team dedicated to serving delicious and
				high-quality food.
				{/* Add more details about your restaurant or business */}
			</Text>

			<Divider />

			<Heading as="h3" size="lg">
				Find us:
			</Heading>
			<Box width="100%" maxW="800px">
				<iframe
					title="HS Food Location"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9342888249917!2d72.5472741!3d23.0995012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e834f954d90dd%3A0xb9ebd585a47bd634!2sHS%20Food!5e0!3m2!1sen!2sus!4v1703999803294!5m2!1sen!2sus"
					width="100%"
					height="450"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</Box>

			<Divider />

			<Text>
				Visit us at{" "}
				<Link color="blue.500" href="#">
					www.hsfood.in
				</Link>
			</Text>
			<Text>
				<Icon as={FiMapPin} boxSize={5} />
				SHAYONA AAGMAN, Gota, Ahmedabad, Gujarat
				382481, India
			</Text>
			<Divider />

			{/* <Text>
				Call us at{" "}
				<Link
					color="blue.500"
					href="tel:+919898070564"
				>
					+91 - 9898070564
				</Link>
			</Text>
			<Text>
				Call us at{" "}
				<Link
					color="blue.500"
					href="tel:+919426170564"
				>
					+91 - 9426170564
				</Link>
			</Text> */}
		</VStack>
	)
}

export default About
