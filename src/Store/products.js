const productsData = [
	{
		title: "French Fries",
		image:
			"data:image/jpeg;base64,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",
		hoverDescription:
			"Fries are my spirit animal.",
		Description: "French Fries",
		subProducts: [
			{
				title: "VadaPav 1",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
			{
				title: "VadaPav 2",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
		],
	},
	{
		title: "Vadapav",
		image: "/products/VadapavImage.jpg",
		hoverDescription: "Ek Dum Mumbai Style",
		Description: "Vadapav",
		subProducts: [
			{
				title: "VadaPav 1",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
			{
				title: "VadaPav 2",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
		],
	},
	{
		title: "Burger",
		image: "/products/Burger.jpg",
		hoverDescription: "Are Yaar Burger Khila Do",
		Description: "Burger",
		subProducts: [
			{
				title: "VadaPav 1",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
			{
				title: "VadaPav 2",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
		],
	},
	{
		title: "Sandwich",
		image: "/products/Sandwich.jpg",
		hoverDescription:
			"Khane Ka Shortcut Apna Sandwich",
		Description: "Sandwich",
		subProducts: [
			{
				title: "VadaPav 1",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
			{
				title: "VadaPav 2",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
		],
	},
	{
		title: "Pizza",
		image: "/products/Pizza.jpg",
		hoverDescription: "Aao Pizza Khilaye",
		Description: "Pizza",
		subProducts: [
			{
				title: "VadaPav 1",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
			{
				title: "VadaPav 2",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
		],
	},
	{
		title: "Garlic Bread",
		image: "/products/GarlicBread.jpg",
		hoverDescription:
			"Pizza ka chhota bhai Garlic Bread",
		Description: "Garlic Bread",
		subProducts: [
			{
				title: "VadaPav 1",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
			{
				title: "VadaPav 2",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
		],
	},
	{
		title: "Maska Bun",
		image: "/products/MaskaBun.jpg",
		hoverDescription:
			"Kisi ko manaye Maska bun ke saath",
		Description: "Maska Bun",
		subProducts: [
			{
				title: "VadaPav 1",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
			{
				title: "VadaPav 2",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
		],
	},
	{
		title: "Chhole Pav",
		image: "/products/ChholePav.jpg",
		hoverDescription: "Chhole Pav",
		Description: "Chhole Pav",
		subProducts: [
			{
				title: "VadaPav 1",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
			{
				title: "VadaPav 2",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
		],
	},

	{
		title: "Tea",
		image: "/products/Tea.jpg",
		hoverDescription: "Tea",
		Description: "Tea",
		subProducts: [
			{
				title: "VadaPav 1",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
			{
				title: "VadaPav 2",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
		],
	},
	{
		title: "Hot Milk",
		image: "/products/Milk.jpg",
		hoverDescription: "Hot Milk",
		Description: "Coffee",
		subProducts: [
			{
				title: "VadaPav 1",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
			{
				title: "VadaPav 2",
				image: "/products/VadapavImage.jpg",
				hoverDescription:
					"Vada is my spirit animal.",
				Description: "Vada",
			},
		],
	},

	// Add more products as needed
]

export default productsData
