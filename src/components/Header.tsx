import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: You can use icons from lucide-react

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-6 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Hang Meas Logo" className="h-10 w-10 md:h-20 md:w-20 object-contain rounded-full" />
        </div>

        {/* Desktop Nav */}
        <div className="px-3">
          <nav className="hidden md:flex space-x-8 justify-center flex-1">
            <a href="#features" className="hover:text-[#F59B1D] transition">Features</a>
            <a href="#how-it-works" className="hover:text-[#F59B1D] transition">How It Works</a>
          </nav>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-white"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-4 bg-white rounded-lg text-black shadow-lg md:hidden">
          <a href="#features" className="py-2 px-4 hover:bg-gray-100 hover:text-[#F59B1D]">Features</a>
          <a href="#how-it-works" className="py-2 px-4 hover:bg-gray-100 hover:text-[#F59B1D]">How It Works</a>
        </div>
      )}
    </header>
  );
};

export default Header;
