import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'glass-morphism shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-testid="navbar-logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_mediastorage/artifacts/r5f8v1qk_logo_kairoz.png"
              alt="Karoiz.online"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-[#0A4D68]">Karoiz.online</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#0A4D68] transition-smooth" data-testid="nav-home">
              Home
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-[#0A4D68] transition-smooth" data-testid="nav-pricing">
              Pricing
            </Link>
            <a href="#features" className="text-gray-700 hover:text-[#0A4D68] transition-smooth" data-testid="nav-features">
              Features
            </a>
            <a href="#faq" className="text-gray-700 hover:text-[#0A4D68] transition-smooth" data-testid="nav-faq">
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              className="btn-primary"
              onClick={onGetStarted}
              data-testid="navbar-get-started-btn"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4" data-testid="mobile-menu">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-[#0A4D68] transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/pricing" 
                className="text-gray-700 hover:text-[#0A4D68] transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-[#0A4D68] transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-[#0A4D68] transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button 
                className="btn-primary w-full"
                onClick={() => {
                  onGetStarted();
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;