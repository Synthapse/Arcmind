import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="text-primary text-xl font-bold">
              Arcmind
            </Link>
          </div>
          <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </nav>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Arcmind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 