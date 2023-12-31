import React from "react"

const Menu = () => {
	return (
		<div>
			<h2>Menu</h2>
			{/* You can embed a PDF viewer or use an iframe to display the PDF */}
			<iframe
				title="Menu PDF"
				src="/menu.pdf"
				width="100%"
				height="500px"
			></iframe>
		</div>
	)
}

export default Menu
