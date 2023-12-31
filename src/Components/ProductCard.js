import React, { useState } from "react"
import "./ProductCard.css" // Import CSS for styling
import { motion } from "framer-motion"

const ProductCard = ({ product }) => {
	const [isHovered, setIsHovered] =
		useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	return (
		// <motion.div
		// 	className={`product-card ${
		// 		isHovered ? "hovered" : ""
		// 	}`}
		// 	initial={{ opacity: 0 }}
		// 	animate={{ opacity: 1 }}
		// 	transition={{ duration: 5 }}
		// 	onMouseEnter={handleMouseEnter}
		// 	onMouseLeave={handleMouseLeave}
		// >
		// 	<div
		// 		className={`product-card ${
		// 			isHovered ? "hovered" : ""
		// 		}`}
		// 		onMouseEnter={handleMouseEnter}
		// 		onMouseLeave={handleMouseLeave}
		// 	>
		// 		<img
		// 			src={product.image}
		// 			alt={product.title}
		// 		/>
		// 		<div className="card-content">
		// 			<h3>{product.title}</h3>
		// 			<p>
		// 				{isHovered
		// 					? product.hoverDescription
		// 					: product.description}
		// 			</p>
		// 		</div>
		// 	</div>
		// </motion.div>
		<motion.div
			className={`product-card ${
				isHovered ? "hovered" : ""
			}`}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.3 }}
			whileHover={{ scale: 1.05 }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<motion.img
				src={product.image}
				alt={product.title}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			/>
			<motion.div
				className="card-content"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<motion.h3
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					{product.title}
				</motion.h3>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					{isHovered
						? product.hoverDescription
						: product.description}
				</motion.p>
			</motion.div>
		</motion.div>
	)
}

export default ProductCard
