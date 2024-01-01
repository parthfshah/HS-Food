import React from "react"
import { motion } from "framer-motion"
import "./SubProductCard.css"

const SubProductCard = ({
	subProduct,
	isOpen,
}) => {
	// Check if subProduct is defined before accessing its properties
	if (!subProduct) {
		return null // Or render an appropriate fallback
	}

	return (
		<motion.div
			className={`sub-product-card ${
				isOpen ? "open" : ""
			}`}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.8 }}
		>
			{/* Check if image property is defined before accessing it */}
			{subProduct.image && (
				<img
					src={subProduct.image}
					alt={subProduct.title}
				/>
			)}
			<div className="sub-product-content">
				<h4>{subProduct.title}</h4>
				<p>{subProduct.description}</p>
			</div>
		</motion.div>
	)
}

export default SubProductCard
