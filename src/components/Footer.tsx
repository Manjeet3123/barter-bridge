
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-semibold text-lg">S</span>
              </div>
              <span className="font-semibold text-xl">SkillSwap</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Exchange skills without exchanging money. SkillSwap connects you with talented people for mutual growth and collaboration.
            </p>
            <form className="flex items-center space-x-2 mb-8">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-background border border-border rounded-l-md px-4 py-2 flex-1"
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-base font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/browse" className="text-muted-foreground hover:text-primary transition-colors">Browse Skills</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="text-base font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-base font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h4 className="text-base font-medium mb-4">Follow Us</h4>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@skillswap.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-border my-8"></div>
        
        {/* Bottom section */}
        <div className="text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
