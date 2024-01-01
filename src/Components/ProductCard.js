import React, { useState } from "react"
import "./ProductCard.css"
import { FaTimes } from "react-icons/fa" // Import the close icon

import {
	motion,
	AnimatePresence,
} from "framer-motion"

const SubProductCard = ({
	subProduct,
	onClose,
}) => {
	return (
		<AnimatePresence>
			{subProduct && (
				<motion.div
					className="sub-product-modal"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
				>
					<button
						className="close-button"
						onClick={onClose}
					>
						<FaTimes />
					</button>

					<div className="sub-product-content">
						<h4>{subProduct.title}</h4>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

const ProductCard = ({ product }) => {
	const [isHovered, setIsHovered] =
		useState(false)
	const [showSubProducts, setShowSubProducts] =
		useState(false)
	const [
		showMainProductDescription,
		setShowMainProductDescription,
	] = useState(true)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	const handleClick = () => {
		setShowSubProducts(!showSubProducts)
		setShowMainProductDescription(
			!showMainProductDescription
		)
	}

	return (
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
			onClick={handleClick}
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
				{/* <motion.h3
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					{product.title}
				</motion.h3> */}
				{showMainProductDescription && (
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						{product.title}
					</motion.h3>
				)}

				{/* <motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					{isHovered
						? product.hoverDescription
						: product.description}
				</motion.p> */}

				{showMainProductDescription && (
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						{isHovered
							? product.hoverDescription
							: product.description}
					</motion.p>
				)}
			</motion.div>

			{showSubProducts && (
				<div className="sub-products-container">
					{product.subProducts.map(
						(subProduct, index) => (
							<SubProductCard
								key={index}
								subProduct={subProduct}
							/>
						)
					)}
				</div>
			)}
		</motion.div>
	)
}

export default ProductCard
