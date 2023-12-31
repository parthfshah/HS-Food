import "./App.css"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About" // Import the About component
import Menu from "./Components/Menu"
import Gallery from "./Components/Gallery"
import Contact from "./Components/Contact"
import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom" // Change Switch to Routes
import Footer from "./Components/Footer"

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					{/* Define your routes */}
					<Route
						path="/about"
						element={<About />}
					/>

					<Route
						path="/menu"
						element={<Menu />}
					/>

					<Route
						path="/gallery"
						element={<Gallery />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>

					{/* Add more routes if needed */}
					{/* The home route should be the last one in the Routes */}
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
