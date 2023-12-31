import React from "react"
import {
	Box,
	Grid,
	GridItem,
	Heading,
	Image,
} from "@chakra-ui/react"

// Use Webpack's require.context to dynamically import files from the 'public/products' folder
const importAll = (r) => r.keys().map(r)
const productImageFiles = importAll(
	require.context(
		"/",
		false,
		/\.(png|jpe?g|svg)$/
	)
)

const Gallery = () => {
	// Extract filenames from the imported files
	const productImageFilenames =
		productImageFiles.map((file) =>
			file.replace(/^.*[\\/]/, "")
		)

	// Construct image URLs based on the filenames and the public folder
	const imageUrls = productImageFilenames.map(
		(filename) => `/products/${filename}`
	)

	return (
		<Box p={6}>
			<Heading as="h2" size="xl" mb={4}>
				Gallery
			</Heading>

			<Grid
				templateColumns="repeat(3, 1fr)"
				gap={4}
			>
				{imageUrls.map((imageUrl, index) => (
					<GridItem key={index}>
						<Image
							src={imageUrl}
							alt={`Product ${index + 1}`}
							borderRadius="md"
						/>
					</GridItem>
				))}
			</Grid>
		</Box>
	)
}

export default Gallery
