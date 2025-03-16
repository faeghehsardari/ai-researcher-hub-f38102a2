
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-researcher-primary">
            AI Research Lab
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection("summary")}
            className="text-gray-700 hover:text-researcher-primary transition-colors"
          >
            Research
          </button>
          <button 
            onClick={() => scrollToSection("news")}
            className="text-gray-700 hover:text-researcher-primary transition-colors"
          >
            News
          </button>
          <button 
            onClick={() => scrollToSection("publications")}
            className="text-gray-700 hover:text-researcher-primary transition-colors"
          >
            Publications
          </button>
          <button 
            onClick={() => scrollToSection("gallery")}
            className="text-gray-700 hover:text-researcher-primary transition-colors"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-researcher-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection("summary")}
              className="text-left py-2 px-4 hover:bg-gray-100 rounded-md"
            >
              Research
            </button>
            <button 
              onClick={() => scrollToSection("news")}
              className="text-left py-2 px-4 hover:bg-gray-100 rounded-md"
            >
              News
            </button>
            <button 
              onClick={() => scrollToSection("publications")}
              className="text-left py-2 px-4 hover:bg-gray-100 rounded-md"
            >
              Publications
            </button>
            <button 
              onClick={() => scrollToSection("gallery")}
              className="text-left py-2 px-4 hover:bg-gray-100 rounded-md"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 px-4 hover:bg-gray-100 rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
