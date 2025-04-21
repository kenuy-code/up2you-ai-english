
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">
              <span className="text-up2you-coral">UP2</span>
              <span className="text-up2you-teal">YOU</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">Home</Link>
          <Link to="/como-funciona" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">Como Funciona</Link>
          <Link to="/precos" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">Preços</Link>
          <Link to="/sobre" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">Sobre Nós</Link>
        </nav>

        {/* Call to Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="text-up2you-teal border-up2you-teal hover:bg-up2you-teal/10">
            Login
          </Button>
          <Button className="bg-up2you-coral text-white hover:bg-up2you-coral/90 border-none">
            Começar Grátis
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden rounded-md p-2 text-up2you-darkGray hover:bg-gray-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <Link to="/" className="block py-2 text-up2you-darkGray hover:text-up2you-coral">Home</Link>
            <Link to="/como-funciona" className="block py-2 text-up2you-darkGray hover:text-up2you-coral">Como Funciona</Link>
            <Link to="/precos" className="block py-2 text-up2you-darkGray hover:text-up2you-coral">Preços</Link>
            <Link to="/sobre" className="block py-2 text-up2you-darkGray hover:text-up2you-coral">Sobre Nós</Link>
            <div className="flex space-x-2 py-2">
              <Button variant="outline" className="flex-1 text-up2you-teal border-up2you-teal hover:bg-up2you-teal/10">
                Login
              </Button>
              <Button className="flex-1 bg-up2you-coral text-white hover:bg-up2you-coral/90 border-none">
                Começar Grátis
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
