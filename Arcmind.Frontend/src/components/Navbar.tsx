import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import ThemeToggle from './ui/ThemeToggle';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link 
            to="/" 
            className="mr-6 flex items-center space-x-2 text-primary font-semibold text-xl"
          >
            Arcmind
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <div className={navigationMenuTriggerStyle()}>
                    Home
                  </div>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/practical-needs">
                  <div className={navigationMenuTriggerStyle()}>
                    Practical Needs
                  </div>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex-1 justify-end flex items-center space-x-4">
          <ThemeToggle />
          <Button onClick={() => window.open('https://form.typeform.com/to/zufeXJvl', '_blank')}>
            Create Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 