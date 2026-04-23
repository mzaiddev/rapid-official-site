import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Search, Globe, ChevronDown, ChevronUp, ChevronRight, Package, Activity, Zap, Shield, Warehouse, BrainCircuit, Cloud, Layout as LayoutIcon, Smartphone, PenTool, Server, Database, Scan, Fingerprint, Cpu, ShieldCheck, Infinity } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const Logo = () => (
  <div className="flex items-center">
    <img 
      src="/logo.png" 
      alt="Rapid Logo" 
      className="h-10 w-auto object-contain"
      onError={(e) => {
        (e.target as HTMLImageElement).src = '/logo.svg';
      }}
    />
  </div>
);

const MegaMenu = ({ isOpen, activeMenu, onClose }: { isOpen: boolean; activeMenu: string | null; onClose: () => void }) => {
  if (activeMenu !== 'Services') return null;

  const serviceColumns = [
    [
      { name: 'ERP Development', desc: 'Streamline and integrate your business operations with custom ERP solutions built to fit your unique needs.', isNew: false, icon: Database },
      { name: 'Web Development', desc: 'Build a strong digital presence with modern, high-performing websites tailored to your business goals.', isNew: false, icon: LayoutIcon },
      { name: 'App Development', desc: 'Turn your ideas into powerful mobile applications that engage users and drive business growth.', isNew: false, icon: Smartphone },
      { name: 'UI / UX Design', desc: 'Create meaningful and engaging digital experiences with our user-centric UI/UX design services.', isNew: false, icon: PenTool },
    ],
    [
      { name: 'Middleware Solutions', desc: 'Streamline communication between your applications and systems with our reliable middleware solutions.', isNew: false, icon: Server },
      { name: 'BigData Solutions', desc: 'Unlock the power of your data with advanced big data solutions.', isNew: false, icon: Activity },
      { name: 'RFID Solutions', desc: 'Enhance tracking, security, and automation with our RFID (Radio Frequency Identification) solutions.', isNew: false, icon: Scan },
      { name: 'Biometric Solutions', desc: 'Secure and simplify identity verification with advanced biometric solutions.', isNew: false, icon: Fingerprint },
    ],
    [
      { name: 'AI & ML Solutions', desc: 'Transform your business with intelligent, data-driven solutions.', isNew: true, icon: BrainCircuit },
      { name: 'IoT Solutions', desc: 'Connect, monitor, and control your devices with our end-to-end Internet of Things (IoT) solutions.', isNew: true, icon: Cpu },
      { name: 'CyberSecurity', desc: 'Protect your digital assets with robust, proactive cybersecurity solutions.', isNew: true, icon: ShieldCheck },
      { name: 'DevOps', desc: 'Accelerate your software delivery with our DevOps expertise.', isNew: true, icon: Infinity },
    ]
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      onMouseLeave={onClose}
      className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-7xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-50 p-6 md:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {serviceColumns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6">
            {col.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={idx} 
                  to={`/services?service=${encodeURIComponent(item.name)}`}
                  onClick={onClose}
                  className="group flex items-start gap-4 p-3 -m-3 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  <div className="mt-1 flex-shrink-0 text-slate-400 group-hover:text-brand-primary transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-slate-900 group-hover:text-brand-primary transition-colors">{item.name}</span>
                      {item.isNew && (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 text-[10px] font-extrabold uppercase tracking-widest">New</span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/industries' },
    { name: 'Services', path: '/services', hasItems: true },
    { name: 'Industries', path: '/industries' },
    { name: 'Resources', path: '/blog' },
    { name: 'Company', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50 selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Navbar */}
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          scrolled 
            ? "bg-brand-dark/95 backdrop-blur-md py-4 shadow-xl border-brand-primary/10" 
            : "bg-brand-dark py-6 border-transparent"
        )}
      >
        {/* Subtle Header Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center" onMouseEnter={() => setActiveMenu(null)}>
              <Link to="/" className="flex items-center">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                >
                  <button
                    onClick={(e) => {
                      if (link.hasItems) {
                        e.preventDefault();
                        if (activeMenu === link.name) {
                          setActiveMenu(null);
                        } else {
                          setActiveMenu(link.name);
                        }
                      } else {
                        navigate(link.path);
                        setActiveMenu(null);
                      }
                    }}
                    className={cn(
                      "px-4 py-2 text-sm font-bold flex items-center gap-1 transition-all duration-200",
                      location.pathname === link.path ? "text-brand-primary" : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.name}
                    {link.hasItems && (
                      activeMenu === link.name ? (
                        <ChevronUp className="w-3.5 h-3.5 text-brand-primary" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                      )
                    )}
                  </button>
                </div>
              ))}
            </nav>
            
            <div className="hidden lg:flex items-center gap-6" onMouseEnter={() => setActiveMenu(null)}>
              <div className="flex items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 250, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="overflow-hidden flex items-center"
                    >
                      <input 
                        type="text" 
                        placeholder="Search modules..."
                        className="bg-transparent border-b border-white/20 text-white text-sm outline-none w-full px-2 py-1"
                        autoFocus
                      />
                      <button 
                        onClick={() => setIsSearchOpen(false)}
                        className="text-white/40 hover:text-white ml-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                {!isSearchOpen && (
                  <button 
                    onClick={() => setIsSearchOpen(true)}
                    className="text-white/80 hover:text-white p-2"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              <button className="text-white/80 hover:text-white">
                <Globe className="w-5 h-5" />
              </button>

              <Link to="/contact" className="bg-white text-brand-dark px-6 py-2.5 rounded-lg font-bold hover:bg-brand-primary/10 hover:text-brand-dark transition-all text-sm shadow-lg shadow-white/10">
                Schedule Demo
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-brand-primary focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        <AnimatePresence>
          {activeMenu && (
            <MegaMenu 
              isOpen={!!activeMenu} 
              activeMenu={activeMenu} 
              onClose={() => setActiveMenu(null)} 
            />
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-brand-dark shadow-2xl overflow-hidden absolute w-full left-0"
            >
              <div className="px-4 py-8 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-lg font-bold transition-colors",
                      location.pathname === link.path ? "text-brand-primary" : "text-white/60"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-white text-brand-dark w-full flex items-center justify-center py-4 rounded-xl font-bold">
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 lg:pt-24 min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#111624] text-slate-300 py-16 border-t border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Logo & Info */}
            <div className="lg:pr-4">
              <div className="mb-6 inline-block">
                <Logo />
              </div>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Rapid ERP, our software stands as a symbol of precision, quality, and trust for all your enterprise needs.
              </p>
              <div className="flex items-center gap-3 text-sm font-bold text-white">
                <span className="mr-1">Follow us :</span>
                <div className="flex gap-2">
                  <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all"><Facebook className="w-3.5 h-3.5" /></a>
                  <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all"><Instagram className="w-3.5 h-3.5" /></a>
                  <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all"><Twitter className="w-3.5 h-3.5" /></a>
                </div>
              </div>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <div className="mb-6">
                <h3 className="text-white font-bold tracking-wider uppercase text-[13px] inline-block pb-2 border-b-2 border-brand-primary">
                  QUICK LINKS
                </h3>
              </div>
              <ul className="space-y-3 font-medium text-slate-400 text-sm">
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/brands" className="hover:text-white transition-colors">Brands</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/contact" className="hover:text-white transition-colors">Book Appointment</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Opening Hours & Support */}
            <div>
              <div className="mb-6">
                <h3 className="text-white font-bold tracking-wider uppercase text-[13px] inline-block pb-2 border-b-2 border-brand-primary">
                  OPENING HOURS
                </h3>
              </div>
              <ul className="space-y-3 font-medium text-slate-400 text-sm mb-8">
                <li>Monday-Friday 8:00 am-6:00 pm</li>
                <li>Break : 1:00 pm-2:00 pm</li>
                <li>Sunday : Closed</li>
              </ul>

              <div className="mb-6">
                <h3 className="text-white font-bold tracking-wider uppercase text-[13px] inline-block pb-2 border-b-2 border-brand-primary">
                  SUPPORT
                </h3>
              </div>
              <ul className="space-y-3 font-medium text-slate-400 text-sm">
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li className="flex items-center gap-2 group"><ChevronRight className="w-3.5 h-3.5 text-brand-primary transition-transform group-hover:translate-x-1" /><Link to="/terms" className="hover:text-white transition-colors">Terms & Condition</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <div className="mb-6">
                <h3 className="text-white font-bold tracking-wider uppercase text-[13px] inline-block pb-2 border-b-2 border-brand-primary">
                  CONTACT INFO
                </h3>
              </div>
              <ul className="space-y-6 text-slate-400 font-medium text-sm">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">123 Tech Boulevard,<br/>Innovation District, CA 94043</span>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span>+1 (555) 123-4567</span>
                    <span>+1 (555) 987-6543</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span>info@rapid-erp.com</span>
                    <span>support@rapid-erp.com</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-800 flex justify-start items-center text-sm font-medium text-slate-500">
            <div>&copy; {new Date().getFullYear()} <span className="text-brand-primary font-semibold">Rapid ERP</span>. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
