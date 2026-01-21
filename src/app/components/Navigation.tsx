import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/90 backdrop-blur-xl border-b border-[#ff6b6b]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] bg-clip-text text-transparent">
            &lt;Fokhrul/&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-[#ff6b6b] transition-all duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-[#ff6b6b] transition-all duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-[#ff6b6b] transition-all duration-300 relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-[#ff6b6b] transition-all duration-300 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-[#ff6b6b] transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-[#ff6b6b]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-[#1e2542] hover:text-[#ff6b6b] rounded-md transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-[#1e2542] hover:text-[#ff6b6b] rounded-md transition-all duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-[#1e2542] hover:text-[#ff6b6b] rounded-md transition-all duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-[#1e2542] hover:text-[#ff6b6b] rounded-md transition-all duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-[#1e2542] hover:text-[#ff6b6b] rounded-md transition-all duration-300"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
