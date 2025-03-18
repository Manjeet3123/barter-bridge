
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // NavLink component for consistent styling
  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    
    return (
      <Link
        to={to}
        className={cn(
          "relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary",
          isActive 
            ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary" 
            : "text-foreground/80"
        )}
      >
        {children}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm py-2.5" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-semibold text-lg">S</span>
          </div>
          <span className="font-semibold text-xl">SkillSwap</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/browse">Browse Skills</NavLink>
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/browse" className="text-foreground/70 hover:text-primary transition-colors">
            <Search size={20} />
          </Link>
          <Link to="/auth" className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
            <div className="container py-4 flex flex-col space-y-3">
              <Link to="/" className="px-3 py-2 hover:bg-secondary rounded-md transition-colors">Home</Link>
              <Link to="/browse" className="px-3 py-2 hover:bg-secondary rounded-md transition-colors">Browse Skills</Link>
              <Link to="/how-it-works" className="px-3 py-2 hover:bg-secondary rounded-md transition-colors">How It Works</Link>
              <Link to="/about" className="px-3 py-2 hover:bg-secondary rounded-md transition-colors">About</Link>
              <div className="pt-2 border-t border-border">
                <Link to="/auth" className="flex items-center px-3 py-2 space-x-2 text-primary font-medium">
                  <User size={18} />
                  <span>Sign In / Register</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
