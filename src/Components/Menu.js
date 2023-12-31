import React from "react"

const Menu = () => {
	return (
		<div>
			<h2>Menu</h2>
			{/* Use the object tag to embed the PDF */}
			<object
				data="/menu.pdf"
				type="application/pdf"
				width="100%"
				height="500px"
			>
				<p>
					It appears you don't have a PDF plugin
					for this browser. You can{" "}
					<a href="/menu.pdf">
						click here to download the PDF file.
					</a>
				</p>
			</object>
		</div>
	)
}

export default Menu
