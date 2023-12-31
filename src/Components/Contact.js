import React from "react"
import {
	Box,
	Heading,
	Text,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Button,
	VStack,
	Divider,
	Link,
	Icon,
} from "@chakra-ui/react"

import { FiMapPin } from "react-icons/fi"

const Contact = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
		// Add your logic to handle the form submission
		console.log("Form submitted!")
	}

	return (
		<Box p={6}>
			<Heading as="h2" size="xl" mb={4}>
				Contact Us
			</Heading>

			<Text mb={4}>
				We would love to hear from you! Please
				fill out the form below to get in touch.
			</Text>

			<form onSubmit={handleSubmit}>
				<FormControl id="name" mb={4}>
					<FormLabel>Your Name</FormLabel>
					<Input
						type="text"
						placeholder="John Doe"
					/>
				</FormControl>

				<FormControl id="email" mb={4}>
					<FormLabel>Email Address</FormLabel>
					<Input
						type="email"
						placeholder="john.doe@example.com"
					/>
				</FormControl>

				<FormControl id="message" mb={4}>
					<FormLabel>Your Message</FormLabel>
					<Textarea placeholder="Type your message here..." />
				</FormControl>

				<Button type="submit" colorScheme="teal">
					Send Message
				</Button>
			</form>
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

			<Text>
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
			</Text>
		</Box>
	)
}

export default Contact
