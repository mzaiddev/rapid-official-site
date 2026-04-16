import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const Logo = () => (
  <img src="/Logo.png" alt="RAPID Logo" className="h-12 w-auto" />
);

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#111111] border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-[#d32f2f]",
                    location.pathname === link.path ? "text-[#d32f2f]" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="bg-[#d32f2f] text-white px-5 py-2 rounded font-bold hover:bg-red-700 transition-colors ml-4 shadow-sm text-sm">
                BOOK APPOINTMENT
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-[#d32f2f] focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    location.pathname === link.path
                      ? "text-[#d32f2f] bg-slate-800"
                      : "text-slate-300 hover:text-[#d32f2f] hover:bg-slate-800"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Link to="/contact" className="block w-full text-center bg-[#d32f2f] text-white px-5 py-2 rounded font-bold hover:bg-red-700 transition-colors shadow-sm">
                  BOOK APPOINTMENT
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6 inline-block">
                <Logo />
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Rapid offers seamless business transformation through cutting-edge technology tailored to your needs. We ensure efficiency and scalability for your enterprise.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#d32f2f] hover:text-white transition-colors border border-slate-700"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#d32f2f] hover:text-white transition-colors border border-slate-700"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#d32f2f] hover:text-white transition-colors border border-slate-700"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#d32f2f] hover:text-white transition-colors border border-slate-700"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/contact" className="hover:text-[#d32f2f] transition-colors flex items-center gap-2"><span className="text-[#d32f2f]">›</span> Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider text-sm">Industries</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/industries" className="hover:text-[#d32f2f] transition-colors flex items-center gap-2"><span className="text-[#d32f2f]">›</span> Retail & Supermarket</Link></li>
                <li><Link to="/industries" className="hover:text-[#d32f2f] transition-colors flex items-center gap-2"><span className="text-[#d32f2f]">›</span> Healthcare & Clinic</Link></li>
                <li><Link to="/industries" className="hover:text-[#d32f2f] transition-colors flex items-center gap-2"><span className="text-[#d32f2f]">›</span> Automotive</Link></li>
                <li><Link to="/industries" className="hover:text-[#d32f2f] transition-colors flex items-center gap-2"><span className="text-[#d32f2f]">›</span> Hospitality & Hotel</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider text-sm">Contact Info</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d32f2f] flex-shrink-0" />
                  <span>123 Tech Boulevard, Innovation District, Silicon Valley, CA 94043</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d32f2f] flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#d32f2f] flex-shrink-0" />
                  <span>info@rapid-erp.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-wider">
            <div>&copy; {new Date().getFullYear()} Rapid ERP. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Floating Button Placeholder */}
      <div className="fixed bottom-6 right-6 bg-red-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-colors z-50">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </div>
    </div>
  );
}
