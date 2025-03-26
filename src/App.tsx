import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlanetList from './components/PlanetsList';
import ProductList from "./components/ProductList.tsx";

export default function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-6">
                <Routes>
                    <Route path="/" element={<h1>Witaj w aplikacji!</h1>} />
                    <Route path="/planets" element={<PlanetList />} />
                    <Route path="/products" element={<ProductList/>}></Route>
                </Routes>
            </div>
        </Router>
    );
}