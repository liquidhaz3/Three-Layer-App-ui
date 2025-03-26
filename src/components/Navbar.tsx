import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-600 p-4 absolute shadow-md top-0 left-0 z-50 w-full">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <h1 className="text-white text-xl font-bold">Moja Aplikacja</h1>
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link to="/" className=""><p className="text-white hover:text-yellow-300 transition duration-300">Strona Główna</p></Link>
                    </li>
                    <li>
                        <Link to="/planets" className=""><p className="text-white hover:text-yellow-300 transition duration-300">Lista Planet</p></Link>
                    </li>
                    <li>
                        <Link to="/products" className=""><p className="text-white hover:text-yellow-300 transition duration-300">Lista Produktów</p></Link>
                    </li>
                </ul>
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden bg-blue-600 p-4">
                    <ul className="space-y-4">
                        <li>
                            <Link to="/" className=""><p className="text-white hover:text-yellow-300 transition duration-300">Strona
                                Główna</p></Link>
                        </li>
                        <li>
                            <Link to="/planets" className=""><p className="text-white hover:text-yellow-300 transition duration-300">Lista
                                Planet</p></Link>
                        </li>
                        <li>
                            <Link to="/products" className=""><p className="text-white hover:text-yellow-300 transition duration-300">Lista
                                Produktów</p></Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}