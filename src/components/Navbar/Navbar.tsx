/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

// Types
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface NavbarProps {
  logo?: {
    text: string;
    href?: string;
  };
  navItems?: NavItem[];
  className?: string;
}

const Navbar = ({ 
  logo = { text: 'Joy-Web Solutions', href: '/' }, 
  navItems = defaultNavItems,
  className = '' 
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className={`bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href={logo.href || '/'} 
              className="shrink-0 flex items-center"
            >
              <div className="h-8 w-8 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">JWS</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                {logo.text}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      onClick={(e) => toggleDropdown(item.label, e)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActiveLink(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActiveLink(child.href)
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActiveLink(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/get-started"
              className="ml-4 px-4 py-2 rounded-md bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="space-y-1">
                      <button
                        onClick={(e) => toggleDropdown(item.label, e)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          isActiveLink(item.href)
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <div className="pl-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                isActiveLink(child.href)
                                  ? 'text-blue-600 bg-blue-50'
                                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActiveLink(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <Link
                href="/get-started"
                className="block w-full mt-4 px-4 py-2 text-center rounded-md bg-linear-to-r from-blue-500 to-purple-600 text-white text-base font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Products', 
    href: '/products',
    children: [
      { label: 'Web App', href: '/products/web-app' },
      { label: 'Mobile App', href: '/products/mobile' },
      { label: 'API', href: '/products/api' },
    ]
  },
  { 
    label: 'Solutions', 
    href: '/solutions',
    children: [
      { label: 'For Startups', href: '/solutions/startups' },
      { label: 'For Enterprise', href: '/solutions/enterprise' },
      { label: 'Case Studies', href: '/solutions/case-studies' },
    ]
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default Navbar;