import React from 'react';
import { Droplet, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Droplet className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">RaktDaan</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-red-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-red-600 transition-colors">How it Works</a>
            <a href="#hospitals" className="text-gray-700 hover:text-red-600 transition-colors">For Hospitals</a>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Donate Now
            </button>
            <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">How it Works</a>
            <a href="#hospitals" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">For Hospitals</a>
            <button className="w-full mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Donate Now
            </button>
            <button className="w-full mt-2 border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}