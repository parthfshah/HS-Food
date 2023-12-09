import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {
  BrowserRouter,
  // Route,
  // Routes
} from "react-router-dom";
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
